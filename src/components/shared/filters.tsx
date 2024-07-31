"use client";
import {
  CheckboxFilterGroup,
  FilterCheckbox,
  RangeSlider,
  Title,
} from "@/components/shared";
import { Input } from "@/components/ui";
import { useFilterIngredients } from "@/hooks/useFilterIngredients";
import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  className?: string;
};

export function Filters({ className }: Props) {
  const { ingredients, loading, selectedIds, toggleId } =
    useFilterIngredients();
  const cutIngredients = ingredients.map((ingredient) => ({
    text: ingredient.name,
    value: String(ingredient.id),
  }));

  return (
    <div className={cn("", className)}>
      <Title text="Фильтрация" size="sm" className="mb-5 font-bold" />

      {/* Верхние чекбоксы */}
      {/* TODO подумать о том, чтобы добавлять разный name группам чекбоксов вместо того, чтобы писать cookable и new в value. 6:20:00-6:23:00 https://www.youtube.com/watch?v=GUwizGbY4cc */}
      <div className="flex flex-col gap-4">
        <FilterCheckbox text="Можно собирать" value="cookable" />
        <FilterCheckbox text="Новинки" value="new" />
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
        limit={6}
        items={cutIngredients}
        defaultItems={cutIngredients}
        loading={loading}
        onClickCheckbox={toggleId}
        selectedIds={selectedIds}
      />
    </div>
  );
}
