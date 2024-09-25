import { ProductWithRelations } from "@/@types/prisma";
import {
  Title,
  VariantSelector,
  ProductImage,
} from "@/shared/components/shared";
import { Button } from "@/shared/components/ui";
import { cn } from "@/shared/lib/utils";
import { Product } from "@prisma/client";
import Image from "next/image";
import React from "react";

type Props = {
  product: ProductWithRelations;
  onClickAddCart: (variationId: number) => void;
  loading: boolean;
  className?: string;
};

export function ChooseProductForm({
  className,
  product,
  onClickAddCart,
  loading,
}: Props) {
  // TODO get data from api
  const currentVariationId = product.variations[0].id;
  const handleClickAddCart = () => {
    if (!currentVariationId) {
      return;
    }

    onClickAddCart(currentVariationId);
  };
  return (
    <div className={cn("flex flex-1", className)}>
      <ProductImage src={product.imageUrl} alt={product.name} />
      <div className="flex w-[490px] flex-col bg-[#f7f6f5] p-5">
        <div className="flex-1">
          <Title
            text={product.name}
            size="md"
            className="mb-1 font-extrabold"
          />
          <p className="text-gray-400">PLACEHOLDER 0,3 л, PLACEHOLDER 300 г</p>
          <p className="text-gray-400">PLACEHOLDER</p>
        </div>
        <Button
          loading={loading}
          onClick={handleClickAddCart}
          className="mt-5 h-[55px] w-full rounded-[18px] px-10 text-base"
        >
          Добавить в корзину за {product.variations[0].price} ₽
        </Button>
      </div>
    </div>
  );
}
