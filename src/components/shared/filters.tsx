import { FilterCheckbox, Title } from "@/components/shared";
import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  className?: string;
};

export function Filters({ className }: Props) {
  return (
    <div className={cn("", className)}>
      <Title text="Фильтрация" size="sm" className="mb-5 font-bold" />

      <div className="flex flex-col gap-4">
        <FilterCheckbox text="Можно собирать" value="1" />
        <FilterCheckbox text="Нельзя собирать" value="2" />
      </div>
    </div>
  );
}
