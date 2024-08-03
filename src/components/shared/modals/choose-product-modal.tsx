"use client";
import { ChoosePizzaForm } from "@/components/shared/choose-pizza-form";
import { Title } from "@/components/shared/title";
import { Dialog } from "@/components/ui";
import {
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { Product } from "@prisma/client";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {
  product: Product;
  className?: string;
};

export function ChooseProductModal({ product, className }: Props) {
  const router = useRouter();

  return (
    <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
      <DialogContent
        className={cn(
          "min-h-[500px] w-[1060px] max-w-[1060px] overflow-hidden bg-white p-0",
          className,
        )}
      >
        <VisuallyHidden>
          <DialogTitle>{product.name}</DialogTitle>
          <DialogDescription>
            Choose a variant of your product
          </DialogDescription>
        </VisuallyHidden>
        <ChoosePizzaForm product={product} />
      </DialogContent>
    </Dialog>
  );
}
