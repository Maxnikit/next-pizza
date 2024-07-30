import { cn } from "@/lib/utils";
import { ArrowUpDown } from "lucide-react";
import React from "react";

type Props = {
  className?: string;
};

export function SortPopup({ className }: Props) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-1 bg-gray-50 px-5 h-[52px] rounded-2xl cusor-pointer",
        className
      )}
    >
      <ArrowUpDown size={16} />
      <b>Сортировка:</b>
      <b className="text-primary">популярное</b>
    </div>
  );
}
