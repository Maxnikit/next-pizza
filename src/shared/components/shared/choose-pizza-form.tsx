"use client";

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
  PizzaType,
  pizzaTypes,
} from "@/shared/constants/pizza";
import { usePizzaOptions } from "@/shared/hooks/use-pizza-options";
import { cn } from "@/shared/lib/utils";
import React from "react";

type Props = {
  product: ProductWithRelations;
  onClickAddCart: (variationId: number, ingredientsIds: number[]) => void;
  loading: boolean;
  className?: string;
};

/**
 * Renders a form for choosing a pizza with specific size and type, along with selected ingredients.
 * @param className - The class name for the component.
 * @param product - The product with its variations and ingredients.
 * @param onClickAddCart - The function to handle the click event of the add to cart button.
 * @returns The JSX element representing the form.
 */
export function ChoosePizzaForm({
  product,
  onClickAddCart,
  loading,
  className,
}: Props): JSX.Element {
  const {
    size,
    type,
    setType,
    setSize,
    selectedIngredientsIds,
    addIngredient,
    availableSizes,
    totalPrice,
    currentVariationId,
  } = usePizzaOptions(product);

  const handleClickAddCart = () => {
    if (!currentVariationId) {
      return;
    }

    onClickAddCart(currentVariationId, Array.from(selectedIngredientsIds));
  };

  return (
    <div className={cn("flex flex-1", className)}>
      <PizzaImage src={product.imageUrl} alt={product.name} size={size} />

      <div className="flex w-[490px] flex-col bg-[#f7f6f5] p-5">
        <div className="flex-1">
          <Title
            text={product.name}
            size="md"
            className="mb-1 font-extrabold"
          />

          <p className="text-gray-400">
            {size} см, {mapPizzaTypes[type].toLocaleLowerCase()} тесто
          </p>

          <div className="mt-3 flex flex-col gap-2">
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

          <div className="scrollbar mt-3 h-[420px] overflow-auto rounded-md bg-gray-50 p-5">
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
        </div>
        <Button
          loading={loading}
          onClick={handleClickAddCart}
          className="mt-5 h-[55px] w-full rounded-[18px] px-10 text-base"
        >
          Добавить в корзину за {totalPrice} ₽
        </Button>
      </div>
    </div>
  );
}
