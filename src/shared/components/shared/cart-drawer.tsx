"use client";
import { CartDrawerItem } from "@/shared/components/shared/cart-drawer-item";
import { Button } from "@/shared/components/ui";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/shared/components/ui/sheet";
import { cn, getCartItemDetails } from "@/shared/lib";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React, { ReactNode, useEffect } from "react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { CartEmpty } from "@/shared/components/shared";
import { useCart } from "@/shared/hooks/use-cart";

type Props = {
  className?: string;
  children: ReactNode;
};

const totalAmount = 500;
export function CartDrawer({ children, className }: Props) {
  const { items, totalAmount, updateItemQuantity, cleanCart, removeCartItem } =
    useCart();

  const onClickCountButton = (
    cartItemId: number,
    quantity: number,
    type: "plus" | "minus",
  ) => {
    const newQuantity = type === "plus" ? quantity + 1 : quantity - 1;
    updateItemQuantity(cartItemId, newQuantity);
  };

  return (
    <div className={cn("", className)}>
      <Sheet>
        <SheetTrigger asChild>{children}</SheetTrigger>

        <SheetContent
          className={cn(
            "flex h-full flex-col justify-between bg-[#F4F1EE] pb-0",
            !totalAmount && "justify-center",
          )}
        >
          <VisuallyHidden>
            <SheetDescription>This is your cart</SheetDescription>
          </VisuallyHidden>

          {/* Если есть какие-то товары, то отображаем их и всё остальное. Если нет, то компонент с сообщением о пустой корзине */}
          {totalAmount ? (
            <>
              <SheetHeader>
                <SheetTitle>
                  В корзине <span className="font-bold">3 товара</span>
                </SheetTitle>
              </SheetHeader>
              <Button onClick={cleanCart}>Очистить корзину</Button>
              <div className="-mx-6 mt-5 flex flex-1 flex-col gap-2 overflow-auto">
                {/* TODO get cart items from backend */}
                {items.map((item) => (
                  <CartDrawerItem
                    onClickCountButton={(type) =>
                      onClickCountButton(item.id, item.quantity, type)
                    }
                    onClickDeleteButton={() => removeCartItem(item.id)}
                    key={item.id}
                    id={item.id}
                    imageUrl={item.imageUrl}
                    details={
                      item.pizzaSize && item.pizzaType && item.ingredients
                        ? getCartItemDetails(
                            item.pizzaSize,
                            item.pizzaType,
                            item.ingredients,
                          )
                        : "Placeholder: This item is not Pizza!"
                    }
                    name={item.name}
                    price={item.price}
                    quantity={item.quantity}
                    disabled={item.disabled}
                  />
                ))}
              </div>
              <SheetFooter className="-mx-6 bg-white p-8">
                <div className="w-full">
                  <div className="mb-4 flex">
                    <span className="flex flex-1 text-lg text-neutral-500">
                      Итого
                      <div className="relative -top-1 mx-2 flex-1 border-b border-dashed border-b-neutral-200" />
                    </span>

                    <span className="text-lg font-bold">{totalAmount} ₽</span>
                  </div>

                  <Link href="/cart">
                    <Button className="h-12 w-full text-base">
                      Оформить заказ <ArrowRight className="ml-2 w-5" />
                    </Button>
                  </Link>
                </div>
              </SheetFooter>{" "}
            </>
          ) : (
            <CartEmpty />
          )}
        </SheetContent>
      </Sheet>
    </div>
  );
}
