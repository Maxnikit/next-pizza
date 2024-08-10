"use client";
import { ProductWithRelations } from "@/@types/prisma";
import {
  ChoosePizzaForm,
  ChooseProductForm,
  Title,
} from "@/shared/components/shared";
import { ProductForm } from "@/shared/components/shared/product-form";
import { Dialog } from "@/shared/components/ui";
import {
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/shared/components/ui/dialog";
import { isPizza } from "@/shared/lib";
import { cn } from "@/shared/lib/utils";
import { Product } from "@prisma/client";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {
  product: ProductWithRelations;
  className?: string;
};

export function ChooseProductModal({ product, className }: Props) {
  const router = useRouter();

  const isPizzaForm = isPizza(product);

  return (
    <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
      <DialogContent
        className={cn(
          "min-h-[500px] w-[1060px] max-w-[1060px] overflow-hidden border-0 bg-white p-0",
          className,
        )}
      >
        <VisuallyHidden>
          <DialogTitle>{product.name}</DialogTitle>
          <DialogDescription>
            Choose a variant of your product
          </DialogDescription>
        </VisuallyHidden>

        <ProductForm product={product} />
      </DialogContent>
    </Dialog>
  );
}
