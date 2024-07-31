"use client";
import { cn } from "@/lib/utils";
import { useCategoryStore } from "@/store/category";
import React from "react";

type Props = {
  className?: string;
};
// TODO get categories from API inside top-bar.tsx
const cats = ["Пиццы", "Салаты", "Напитки", "Десерты"];
export function Categories({ className }: Props) {
  const activeIndex = useCategoryStore((state) => state.activeId);

  return (
    <div
      className={cn("inline-flex gap-1 rounded-2xl bg-gray-50 p-1", className)}
    >
      {cats.map((name, index) => (
        <a
          href={`/#${name}`}
          className={cn(
            "flex h-11 items-center rounded-2xl px-5 font-bold",
            activeIndex === index &&
              "bg-white text-primary shadow-md shadow-gray-200",
          )}
          key={index}
        >
          <button>{name}</button>
        </a>
      ))}
    </div>
  );
}

// TODO button can not be inside a tag
