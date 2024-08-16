"use client";
import { cn, scrollToSection } from "@/shared/lib/utils";
import { useCategoryStore } from "@/shared/store/category";
import { Category } from "@prisma/client";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useHash } from "@/shared/hooks/use-hash";
type Props = {
  cats: Category[];
  className?: string;
};
export function Categories({ cats, className }: Props) {
  const activeIndex = useCategoryStore((state) => state.activeId);
  const hash = useHash();
  useEffect(() => {
    const section = hash.replace("#", "");
    if (section) {
      scrollToSection(section);
    }
  }, [hash]);

  return (
    <div
      className={cn("inline-flex gap-1 rounded-2xl bg-gray-50 p-1", className)}
    >
      {cats.map(({ name, id }, index) => (
        <button
          key={index}
          onClick={() => scrollToSection(name)}
          className={cn(
            "flex h-11 items-center rounded-2xl px-5 font-bold",
            activeIndex === id &&
              "bg-white text-primary shadow-md shadow-gray-200",
          )}
        >
          {name}
        </button>
      ))}
    </div>
  );
}
