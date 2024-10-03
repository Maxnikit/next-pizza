import { CartItemProps } from "@/shared/components/shared/cart-item-details/cart-item-details.types";
import { CountButtonProps } from "@/shared/components/shared/count-button";
import { cn } from "@/shared/lib";
import * as CartItem from "./cart-item-details";
import React from "react";
import { X } from "lucide-react";

type Props = CartItemProps & {
  onClickCountButton: (type: "plus" | "minus") => void;
  onClickDeleteButton: () => void;
  className?: string;
};

export function CheckoutCartItem({
  name,
  price,
  imageUrl,
  details,
  quantity,
  className,
  onClickCountButton,
  onClickDeleteButton,
}: Props) {
  return (
    <div className={cn("flex items-center justify-between", className)}>
      <div className="flex flex-1 items-center gap-5">
        <CartItem.Image src={imageUrl} alt={name} />
        <CartItem.Info name={name} details={details} />
      </div>

      <CartItem.Price value={price} />

      <div className="ml-20 flex items-center gap-5">
        <CartItem.CountButton onClick={onClickCountButton} value={quantity} />
        <button onClick={onClickDeleteButton}>
          <X
            className="cursor-pointer text-gray-400 hover:text-gray-600"
            size={20}
          />
        </button>
      </div>
    </div>
  );
}
