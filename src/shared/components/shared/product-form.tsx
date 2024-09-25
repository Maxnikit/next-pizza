"use client";

import { ProductWithRelations } from "@/@types/prisma";
import { ChoosePizzaForm, ChooseProductForm } from "@/shared/components/shared";
import { isPizza } from "@/shared/lib";
import { useCartStore } from "@/shared/store/cart";
import React from "react";
import toast from "react-hot-toast";

type Props = {
  product: ProductWithRelations;
};

export function ProductForm({ product }: Props) {
  const addCartItem = useCartStore((state) => state.addCartItem);
  const firstVariation = product.variations[0];

  const onAddPizza = async (
    productVariationId: number,
    ingredientsIds: number[],
  ) => {
    try {
      await addCartItem({
        productVariationId,
        ingredientsIds,
      });
      toast.success("Продукт добавлен в корзину");
    } catch (err) {
      toast.error("Не удалось добавить продукт в корзину");
      console.error(err);
    }
  };
  const onAddProduct = () => {
    addCartItem({ productVariationId: firstVariation.id });
  };

  if (isPizza(product)) {
    return <ChoosePizzaForm onClickAddCart={onAddPizza} product={product} />;
  } else {
    return <ChooseProductForm onClickAdd={onAddProduct} product={product} />;
  }
}
