import { cn } from "@/shared/lib/utils";
import { ArrowUpDown } from "lucide-react";
import React from "react";

type Props = {
  className?: string;
};

export function SortPopup({ className }: Props) {
  return (
    <div
      className={cn(
        "cusor-pointer inline-flex h-[52px] items-center gap-1 rounded-2xl bg-gray-50 px-5",
        className,
      )}
    >
      <ArrowUpDown size={16} />
      <b>Сортировка:</b>
      <b className="text-primary">популярное</b>
    </div>
  );
}
