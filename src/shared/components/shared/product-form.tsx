import { ProductWithRelations } from "@/@types/prisma";
import { ChoosePizzaForm, ChooseProductForm } from "@/shared/components/shared";
import { isPizza } from "@/shared/lib";
import React from "react";

type Props = {
  product: ProductWithRelations;
};

export function ProductForm({ product }: Props) {
  if (isPizza(product)) {
    return <ChoosePizzaForm product={product} />;
  } else {
    return <ChooseProductForm product={product} />;
  }
}
