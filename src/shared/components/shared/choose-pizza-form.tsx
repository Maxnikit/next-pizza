import { Title, VariantSelector, PizzaImage } from "@/shared/components/shared";
import { Button } from "@/shared/components/ui";
import {
  PizzaSize,
  pizzaSizes,
  PizzaType,
  pizzaTypes,
} from "@/shared/constants/pizza";
import { cn } from "@/shared/lib/utils";
import { Product } from "@prisma/client";
import Image from "next/image";
import React from "react";

type Props = {
  product: Product;
  onClickAdd?: () => void;
  className?: string;
};

export function ChoosePizzaForm({ className, product, onClickAdd }: Props) {
  const [size, setSize] = React.useState<PizzaSize>(20);
  const [type, setType] = React.useState<PizzaType>(1);
  // TODO get data from api
  const totalPrice = 350;
  const textDetails = "30 см, традиционное тесто 30";

  return (
    <div className={cn("flex flex-1", className)}>
      {/* TODO remove hardcoded size */}

      <PizzaImage src={product.imageUrl} alt={product.name} size={size} />
      <div className="w-[490px] bg-[#f7f6f5] p-7">
        <Title text={product.name} size="md" className="mb-1 font-extrabold" />
        <p className="text-gray-400">{textDetails}</p>
        {/* TODO get variants from api */}
        <VariantSelector
          items={pizzaSizes}
          selectedValue={String(size)}
          onClick={(value) => setSize(Number(value) as PizzaSize)}
        />

        <VariantSelector
          items={pizzaTypes}
          selectedValue={String(type)}
          onClick={(value) => setType(Number(value) as PizzaType)}
        />
        <Button className="h-[55px] w-full rounded-[18px] px-10 text-base">
          Добавить в корзину за {totalPrice} ₽
        </Button>
      </div>
    </div>
  );
}
