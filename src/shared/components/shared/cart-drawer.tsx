"use client";
import { CartDrawerItem } from "@/shared/components/shared/cart-drawer-item";
import { Button } from "@/shared/components/ui";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/shared/components/ui/sheet";
import { cn } from "@/shared/lib";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React, { ReactNode } from "react";

type Props = {
  className?: string;
  children: ReactNode;
};

const totalAmount = 500;
export function CartDrawer({ children, className }: Props) {
  return (
    <div className={cn("", className)}>
      <Sheet>
        <SheetTrigger asChild>{children}</SheetTrigger>

        <SheetContent className="flex flex-col justify-between bg-[#F4F1EE] pb-0">
          <SheetHeader>
            <SheetTitle>
              В корзине <span className="font-bold">3 товара</span>
            </SheetTitle>
          </SheetHeader>
          <div className="-mx-6 mt-5 flex flex-1 flex-col gap-2 overflow-auto">
            {/* TODO get cart items from backend */}
            <CartDrawerItem
              id={1}
              imageUrl=""
              details="detailsPLACEHOLDER"
              name={"NAMEPLACE"}
              price={500}
              quantity={1}
            />
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
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}
