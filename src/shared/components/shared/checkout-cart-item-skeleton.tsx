import { Skeleton } from "@/components/ui/skeleton";
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
        <Skeleton className="h-[60px] w-[60px] rounded-full bg-gray-200" />
        <Skeleton className="h-5 w-40 rounded bg-gray-200" />
      </div>
      <Skeleton className="h-5 w-14 rounded-full bg-gray-200" />
      <Skeleton className="h-8 w-[140px] rounded-full bg-gray-200" />
    </div>
  );
}
