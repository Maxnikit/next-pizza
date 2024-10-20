"use client";
import { CartDrawer } from "@/shared/components/shared";
import { Button } from "@/shared/components/ui";
import { useCart } from "@/shared/hooks/use-cart";
import { cn } from "@/shared/lib";
import { ShoppingCart, ArrowRight } from "lucide-react";
import React from "react";

type Props = { className?: string };

export function CartButton({ className }: Props) {
  const { totalAmount, loading, items } = useCart();

  const getTotalItemCount = () => {
    let itemCount = 0;
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      itemCount += item.quantity;
    }
    return itemCount;
  };
  return (
    <CartDrawer>
      <Button
        loading={loading}
        className={cn("group relative", { "w-[105px]": loading }, className)}
      >
        <b>{totalAmount} ₽</b>
        <span className="mx-3 h-full w-[1px] bg-white/30" />
        <div className="flex items-center gap-1 transition duration-300 group-hover:opacity-0">
          <ShoppingCart className="relative" size={16} strokeWidth={2} />
          <b>{getTotalItemCount()}</b>
        </div>
        <ArrowRight
          size={20}
          className="absolute right-5 -translate-x-2 opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100"
        />
      </Button>
    </CartDrawer>
  );
}
