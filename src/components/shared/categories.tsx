import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  className?: string;
};

const cats = ["Все", "Пицца", "Салаты", "Напитки", "Десерты"];
const activeIndex = 0;
export function Categories({ className }: Props) {
  return (
    <div
      className={cn("inline-flex gap-1 bg-gray-50 p-1 rounded-2xl", className)}
    >
      {cats.map((cat, index) => (
        <a
          className={cn(
            "flex items-center font-bold h-11 rounded-2xl px-5",
            activeIndex === index &&
              "bg-white shadow-md shadow-gray-200 text-primary"
          )}
          key={index}
        >
          <button>{cat}</button>
        </a>
      ))}
    </div>
  );
}
