"use client";
import {
  CheckboxFiltersGroup,
  FilterCheckbox,
  RangeSlider,
  Title,
} from "@/shared/components/shared";
import { Input } from "@/shared/components/ui";
import { defaultPrices } from "@/shared/constants/pizza";
import { useFilters } from "@/shared/hooks/use-filters";
import { useIngredients } from "@/shared/hooks/use-ingredients";
import { useQueryFilters } from "@/shared/hooks/use-query-filters";
import { cn } from "@/shared/lib/utils";
import React from "react";
import { useSet } from "react-use";

type Props = {
  className?: string;
};

type PriceProps = {
  priceFrom: number;
  priceTo: number;
};

export function Filters({ className }: Props) {
  const { ingredients, loading } = useIngredients();
  const filters = useFilters();

  useQueryFilters(filters);

  const ingredientsToShow = ingredients.map((ingredient) => ({
    text: ingredient.name,
    value: String(ingredient.id),
  }));

  const handlePriceChange = (name: keyof PriceProps, value: number) => {
    value = Math.min(
      defaultPrices.priceTo,
      Math.max(defaultPrices.priceFrom, value),
    ); // Ensure value is within the range
    filters.setPrices(name, value);
  };

  const updatePrices = (prices: number[]) => {
    handlePriceChange("priceFrom", prices[0]);
    handlePriceChange("priceTo", prices[1]);
  };

  return (
    <div className={cn("", className)}>
      <Title text="Фильтрация" size="sm" className="mb-5 font-bold" />

      {/* Верхние чекбоксы */}
      <CheckboxFiltersGroup
        title="Тип теста"
        name="pizzaTypes"
        className="mb-5"
        onClickCheckbox={filters.setPizzaTypes}
        selected={filters.pizzaTypes}
        items={[
          { text: "Традиционное", value: "1" },
          { text: "Тонкое", value: "2" },
        ]}
      />

      <CheckboxFiltersGroup
        title="Размеры"
        name="sizes"
        className="mb-5"
        selected={filters.sizes}
        onClickCheckbox={filters.setSizes}
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
            placeholder={defaultPrices.priceFrom.toString()}
            min={defaultPrices.priceFrom}
            max={defaultPrices.priceTo}
            value={String(filters.prices.priceFrom)}
            onChange={(e) =>
              handlePriceChange("priceFrom", Number(e.target.value))
            }
          />
          <Input
            type="number"
            placeholder={defaultPrices.priceTo.toString()}
            min={100}
            max={defaultPrices.priceTo}
            value={String(filters.prices.priceTo)}
            onChange={(e) =>
              handlePriceChange("priceTo", Number(e.target.value))
            }
          />
        </div>

        <RangeSlider
          min={defaultPrices.priceFrom}
          max={defaultPrices.priceTo}
          step={50}
          value={[
            filters.prices.priceFrom || defaultPrices.priceFrom,
            filters.prices.priceTo || defaultPrices.priceTo,
          ]}
          onValueChange={updatePrices}
        />
      </div>

      {/* Ингредиенты */}
      <CheckboxFiltersGroup
        title="Ингредиенты"
        name="ingredients"
        className="mt-5"
        limit={6}
        items={ingredientsToShow}
        loading={loading}
        onClickCheckbox={filters.setSelectedIngredients}
        selected={filters.selectedIngredients}
      />
    </div>
  );
}
