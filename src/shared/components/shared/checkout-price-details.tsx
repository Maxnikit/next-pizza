import { cn } from "@/shared/lib";
import React from "react";

type Props = {
  title: string;
  leftAdornment: React.ReactNode;
  value: number;
  className?: string;
};

export default function CheckoutPriceDetails({
  title,
  leftAdornment,
  value,
  className,
}: Props) {
  return (
    <div className={cn("my-4 flex", className)}>
      <span className="flex flex-1 text-lg text-neutral-500">
        <div className="flex items-center gap-2">
          {leftAdornment} {title}
        </div>

        <div className="border-b-neutral relative -top-1 mx-2 flex-1 border-b border-dashed" />
      </span>

      <span className="text-lg font-bold">{value} ₽</span>
    </div>
  );
}
