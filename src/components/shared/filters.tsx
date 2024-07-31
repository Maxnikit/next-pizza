"use client";
import {
  CheckboxFiltersGroup,
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

type PriceProps = {
  priceFrom: number;
  priceTo: number;
};

export function Filters({ className }: Props) {
  const { ingredients, loading, selectedIds, toggleId } =
    useFilterIngredients();
  const [prices, setPrices] = React.useState<PriceProps>({
    priceFrom: 0,
    priceTo: 5000,
  });
  const cutIngredients = ingredients.map((ingredient) => ({
    text: ingredient.name,
    value: String(ingredient.id),
  }));

  const updatePrice = (name: keyof PriceProps, value: number) => {
    setPrices({
      ...prices,
      [name]: value,
    });
  };
  const updatePrices = (prices: number[]){
    setPrices()
  }
  return (
    <div className={cn("", className)}>
      <Title text="Фильтрация" size="sm" className="mb-5 font-bold" />

      {/* Верхние чекбоксы */}
    
{/* TODO доделать эти чекбоксы */}
      <CheckboxFiltersGroup
        title="Размеры"
        name="sizes"
        className="mb-5"

        // onClickCheckbox={filters.setSizes}
        // selected={filters.sizes}
        items={[
          { text: "20 см", value: "20" },
          { text: "30 см", value: "30" },
          { text: "40 см", value: "40" },
        ]}
      />
      {/* Цена */}
      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="mb-3 font-bold">Цена от и до:</p>
        <div className="mb-5 flex gap-3">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={1000}
            value={String(prices.priceFrom)}
            onChange={(e) => updatePrice("priceFrom", +e.target.value)}
          />
          <Input
            type="number"
            placeholder="0"
            min={100}
            max={1000}
            value={String(prices.priceTo)}
            onChange={(e) => updatePrice("priceTo", +e.target.value)}
          />
        </div>
        <RangeSlider
          min={0}
          max={1000}
          step={10}
          value={[prices.priceFrom || 0, prices.priceTo || 1000]}
          onValueChange={updatePrices}
        />
      </div>

      {/* Ингредиенты */}
      <CheckboxFiltersGroup
        title="Ингредиенты:"
        name="ingredients"
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
