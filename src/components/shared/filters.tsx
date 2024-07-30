import {
  CheckboxFilterGroup,
  FilterCheckbox,
  RangeSlider,
  Title,
} from "@/components/shared";
import { Input } from "@/components/ui";
import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  className?: string;
};

export function Filters({ className }: Props) {
  return (
    <div className={cn("", className)}>
      <Title text="Фильтрация" size="sm" className="mb-5 font-bold" />

      {/* Верхние чекбоксы */}
      <div className="flex flex-col gap-4">
        <FilterCheckbox text="Можно собирать" value="1" />
        <FilterCheckbox text="Новинки" value="2" />
      </div>

      {/* Цена */}
      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="mb-3 font-bold">Цена от и до:</p>
        <div className="mb-5 flex gap-3">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={1000}
            defaultValue={0}
          />
          <Input type="number" placeholder="0" min={100} max={30000} />
        </div>
        <RangeSlider min={0} max={5000} step={100} value={[0, 5000]} />
      </div>

      {/* Ингредиенты */}
      <CheckboxFilterGroup
        title="Ингредиенты:"
        className="mt-5"
        limit={3}
        defaultItems={[
          { text: "Сырный соус", value: "1" },
          { text: "Сыр", value: "2" },
          { text: "Моцарелла", value: "3" },
          { text: "Помидоры", value: "4" },
          { text: "Огурцы", value: "5" },
          { text: "Лук", value: "6" },
          { text: "Салат", value: "7" },
        ]}
        items={[
          { text: "Сырный соус", value: "1" },
          { text: "Сыр", value: "2" },
          { text: "Моцарелла", value: "3" },
          { text: "Помидоры", value: "4" },
          { text: "Огурцы", value: "5" },
          { text: "Лук", value: "6" },
          { text: "Салат", value: "7" },
        ]}
      />
    </div>
  );
}
