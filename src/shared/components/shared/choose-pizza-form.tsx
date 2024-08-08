import {
  Title,
  VariantSelector,
  ProductImage,
  PizzaImage,
} from "@/components/shared";
import { Button } from "@/components/ui";
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
  // TODO get data from api

  const totalPrice = 350;
  const textDetails = "30 см, традиционное тесто 30";
  const size = 40;
  return (
    <div className={cn("flex flex-1", className)}>
      {/* TODO remove hardcoded size */}

      <PizzaImage src={product.imageUrl} alt={product.name} size={size} />
      <div className="w-[490px] bg-[#f7f6f5] p-7">
        <Title text={product.name} size="md" className="mb-1 font-extrabold" />
        <p className="text-gray-400">{textDetails}</p>
        {/* TODO get variants from api */}
        <VariantSelector
          selectedValue="1"
          items={[
            {
              value: "1",
              name: "Маленькая",
            },
            {
              value: "2",
              name: "Большая",
            },
          ]}
        />

        <Button className="h-[55px] w-full rounded-[18px] px-10 text-base">
          Добавить в корзину за {totalPrice} ₽
        </Button>
      </div>
    </div>
  );
}
