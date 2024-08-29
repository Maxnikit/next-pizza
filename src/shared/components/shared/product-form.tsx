"use client";

import { ProductWithRelations } from "@/@types/prisma";
import { ChoosePizzaForm, ChooseProductForm } from "@/shared/components/shared";
import { isPizza } from "@/shared/lib";
import { useCartStore } from "@/shared/store/cart";
import React from "react";

type Props = {
  product: ProductWithRelations;
};

export function ProductForm({ product }: Props) {
  const addCartItem = useCartStore((state) => state.addCartItem);
  const firstVariation = product.variations[0];

  const onAddPizza = (productVariationId: number, ingredientsIds: number[]) => {
    addCartItem({
      productVariationId,
      ingredientsIds,
    });
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
