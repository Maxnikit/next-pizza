"use client";

import {
  FilterCheckbox,
  FilterCheckboxProps,
} from "@/components/shared/filter-checkbox";
import { Input } from "@/components/ui";
import React from "react";

type Item = FilterCheckboxProps;
type Props = {
  title: string;
  items: Item[];
  defaultItems?: Item[];
  limit?: number;
  searchInputPlaceholder?: string;
  onChange?: (values: string[]) => void;
  defaultValue?: string[];
  className?: string;
};

export function CheckboxFilterGroup({
  title,
  items,
  defaultItems,
  limit = 5,
  searchInputPlaceholder = "Поиск...",
  onChange,
  defaultValue,
  className,
}: Props) {
  return (
    <div className={className}>
      <p className="mb-3 font-bold">{title}</p>
      <div className="mb-5">
        <Input
          placeholder={searchInputPlaceholder}
          className="border-none bg-gray-50"
        />
      </div>

      <div className="scrollbar flex max-h-96 flex-col gap-4 overflow-auto pr-2">
        {items.map((item, index) => (
          <FilterCheckbox
            key={index}
            text={item.text}
            value={item.value}
            endAdornment={item.endAdornment}
            onCheckedChange={(ids) => console.log(ids)}
            checked={defaultValue?.includes(item.value)}
          />
        ))}
      </div>
    </div>
  );
}
