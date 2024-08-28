import { cn } from "@/shared/lib";
import React from "react";
import { CartItemProps } from "@/shared/components/shared/cart-item-details/cart-item-details.types";
import * as CartItem from "./cart-item-details";
import { Trash2Icon } from "lucide-react";

type Props = CartItemProps & {
  onClickCountButton: (type: "plus" | "minus") => void;
  onClickDeleteButton: () => void;
  className?: string;
};

export function CartDrawerItem({
  id,
  imageUrl,
  details,
  name,
  price,
  quantity,
  disabled,
  className,
  onClickCountButton,
  onClickDeleteButton,
}: Props) {
  return (
    <div className={cn("flex gap-6 bg-white p-5", className)}>
      <CartItem.Image src={imageUrl} alt={name} />

      <div className="flex-1">
        <CartItem.Info name={name} details={details} />

        <hr className="my-3" />

        <div className="flex items-center justify-between">
          <CartItem.CountButton onClick={onClickCountButton} value={quantity} />

          <div className="flex items-center gap-3">
            <CartItem.Price value={price} />
            <Trash2Icon
              onClick={onClickDeleteButton}
              className="cursor-pointer text-gray-400 hover:text-gray-600"
              size={16}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
