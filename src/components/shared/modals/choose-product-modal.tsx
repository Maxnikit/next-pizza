"use client";
import { ChoosePizzaForm } from "@/components/shared/choose-pizza-form";
import { Title } from "@/components/shared/title";
import { Dialog } from "@/components/ui";
import { DialogContent } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { Product } from "@prisma/client";
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
          "max-w[1060px] min-h-[500px] w-[1060px] overflow-hidden bg-white p-0",
          className,
        )}
      >
        <ChoosePizzaForm product={product} />
      </DialogContent>
    </Dialog>
  );
}
