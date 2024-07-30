import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  className?: string;
};
// TODO get categories from API inside top-bar.tsx
const cats = ["Все", "Пицца", "Салаты", "Напитки", "Десерты"];
const activeIndex = 0;
export function Categories({ className }: Props) {
  return (
    <div
      className={cn("inline-flex gap-1 rounded-2xl bg-gray-50 p-1", className)}
    >
      {cats.map((cat, index) => (
        <a
          href="google.com"
          className={cn(
            "flex h-11 items-center rounded-2xl px-5 font-bold",
            activeIndex === index &&
              "bg-white text-primary shadow-md shadow-gray-200",
          )}
          key={index}
        >
          <button>{cat}</button>
        </a>
      ))}
    </div>
  );
}

// TODO button can not be inside a tag
