import { ProductWithRelations } from "@/@types/prisma";
import {
  Title,
  VariantSelector,
  PizzaImage,
  Ingredient,
} from "@/shared/components/shared";
import { Button } from "@/shared/components/ui";
import {
  mapPizzaTypes,
  PizzaSize,
  pizzaSizes,
  PizzaType,
  pizzaTypes,
} from "@/shared/constants/pizza";
import { cn } from "@/shared/lib/utils";
import { Product } from "@prisma/client";
import Image from "next/image";
import React from "react";
import { useSet } from "react-use";

type Props = {
  product: ProductWithRelations;
  onClickAddCart?: () => void;
  className?: string;
};

export function ChoosePizzaForm({ className, product, onClickAddCart }: Props) {
  const [size, setSize] = React.useState<PizzaSize>(20);
  const [type, setType] = React.useState<PizzaType>(1);

  const [selectedIngredientsIds, { toggle: addIngredient }] = useSet(
    new Set<number>([]),
  );

  // TODO возможен случай, когда у пиццы нет некоторых вариаций. Убрать в конце 0 и сделать вместо него недоступные вариации недоступными для клика
  const pizzaPrice =
    product.variations.find(
      (variation) => variation.pizzaType === type && variation.size === size,
    )?.price || 9999132132139;

  const totalIngredientsPrice = product.ingredients
    .filter((ingredient) => selectedIngredientsIds.has(ingredient.id))
    .reduce((acc, ingredient) => acc + ingredient.price, 0);

  // TODO get data from api
  const totalPrice = pizzaPrice + totalIngredientsPrice;

  const handleClickAddCart = () => {
    onClickAddCart?.();
    console.log({
      size,
      type,
      selectedIngredientsIds,
      totalPrice,
    });
  };

  const availableVariationsByType = product.variations.filter(
    (variation) => variation.pizzaType === type,
  );
  const availableSizes = pizzaSizes.map((item) => ({
    name: item.name,
    value: item.value,
    disabled: !availableVariationsByType.some(
      (variation) => variation.size === Number(item.value),
    ),
  }));

  React.useEffect(() => {
    const isCurrentSizeAvailable = availableSizes?.find(
      (item) => Number(item.value) === size && !item.disabled,
    );
    const newAvailableSize = availableSizes?.find((item) => !item.disabled);

    if (!isCurrentSizeAvailable && newAvailableSize) {
      setSize(Number(newAvailableSize.value) as PizzaSize);
    }
  }, [type, availableSizes, size]);
  return (
    <div className={cn("flex flex-1", className)}>
      <PizzaImage src={product.imageUrl} alt={product.name} size={size} />
      <div className="w-[490px] bg-[#f7f6f5] p-7">
        <Title text={product.name} size="md" className="mb-1 font-extrabold" />
        <p className="text-gray-400">
          {size} см, {mapPizzaTypes[type].toLocaleLowerCase()} тесто
        </p>
        <div className="mt-5 flex flex-col gap-4">
          <VariantSelector
            items={pizzaTypes}
            selectedValue={String(type)}
            onClick={(value) => setType(Number(value) as PizzaType)}
          />
          <VariantSelector
            items={availableSizes}
            selectedValue={String(size)}
            onClick={(value) => setSize(Number(value) as PizzaSize)}
          />
        </div>

        <div className="scrollbar mt-5 h-[420px] overflow-auto rounded-md bg-gray-50 p-5">
          <div className="grid grid-cols-3 gap-3">
            {product.ingredients.map((ingredient) => (
              <Ingredient
                key={ingredient.id}
                name={ingredient.name}
                price={ingredient.price}
                imageUrl={ingredient.imageUrl}
                onClick={() => addIngredient(ingredient.id)}
                active={selectedIngredientsIds.has(ingredient.id)}
              />
            ))}
          </div>
        </div>
        <Button
          onClick={handleClickAddCart}
          className="mt-10 h-[55px] w-full rounded-[18px] px-10 text-base"
        >
          Добавить в корзину за {totalPrice} ₽
        </Button>
      </div>
    </div>
  );
}
