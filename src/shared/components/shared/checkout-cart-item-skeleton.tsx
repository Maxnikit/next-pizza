import { cn } from "@/shared/lib";
import React from "react";

type Props = {
  className?: string;
};
// TODO deal with jsx-ally warning and improve height of skeleton
export function CheckoutCartItemSkeleton({ className }: Props) {
  return (
    <div className={cn("flex items-center justify-between", className)}>
      <div className="flex items-center gap-5">
        <div className="h-[50px] w-[50px] animate-pulse rounded-full bg-gray-200" />
        <h2 className="h-5 w-40 animate-pulse rounded bg-gray-200" />
      </div>
      <div className="h-5 w-10 animate-pulse rounded-full bg-gray-200" />
      <div className="h-8 w-[133px] animate-pulse rounded-full bg-gray-200" />
    </div>
  );
}
