"use client";

import { ProductWithRelations } from "@/@types/prisma";
import { ChoosePizzaForm, ChooseProductForm } from "@/shared/components/shared";
import { useCart } from "@/shared/hooks/use-cart";
import { isPizza } from "@/shared/lib";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";

type Props = {
  product: ProductWithRelations;
};

export function ProductForm({ product }: Props) {
  const { addCartItem, loading } = useCart();
  const firstVariation = product.variations[0];
  const router = useRouter();

  const onSubmit = async (
    productVariationId: number,
    ingredientsIds?: number[],
  ) => {
    console.log(ingredientsIds);
    try {
      if (isPizza(product)) {
        console.log(1);
        await addCartItem({
          productVariationId,
          ingredientsIds,
        });
      } else {
        console.log(2);
        await addCartItem({ productVariationId });
      }

      router.back();
      toast.success(`${product.name} теперь в корзине!`);
    } catch (err) {
      toast.error("Не удалось добавить продукт в корзину");
      console.error("Error adding product to cart:", err);
    }
  };
  if (isPizza(product)) {
    return (
      <ChoosePizzaForm
        onClickAddCart={onSubmit}
        product={product}
        loading={loading}
      />
    );
  } else {
    return (
      <ChooseProductForm
        onClickAddCart={onSubmit}
        product={product}
        loading={loading}
      />
    );
  }
}
