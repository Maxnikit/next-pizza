"use client";
import { cn } from "@/shared/lib/utils";
import React from "react";

type Variant = {
  name: string;
  value: string;
  disabled?: boolean;
};
type Props = {
  items: readonly Variant[];
  onClick?: (value: Variant["value"]) => void;
  selectedValue?: Variant["value"];
  className?: string;
};

export function VariantSelector({
  items,
  onClick,
  selectedValue,
  className,
}: Props) {
  return (
    <div
      className={cn(
        "flex select-none justify-between rounded-3xl bg-[#F3F3F7] p-1",
        className,
      )}
    >
      {items.map((item) => (
        <button
          key={item.value}
          onClick={() => onClick?.(item.value)}
          className={cn(
            "duration-400 flex h-7 flex-1 items-center justify-center rounded-3xl px-5 text-sm transition-all",
            {
              "bg-white shadow": item.value === selectedValue,
              "pointer-events-none text-gray-500 opacity-50": item.disabled,
            },
          )}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
}
