export const mapPizzaSizes = {
  20: "Маленькая",
  30: "Средняя",
  40: "Большая",
} as const;

export const mapPizzaTypes = {
  1: "Традиционное",
  2: "Тонкое",
} as const;

export const pizzaSizes = Object.entries(mapPizzaSizes).map(
  ([value, name]) => ({
    name,
    value,
  }),
);

export const pizzaTypes = Object.entries(mapPizzaTypes).map(
  ([value, name]) => ({
    name,
    value,
  }),
);

export type PizzaSize = keyof typeof mapPizzaSizes;
export type PizzaType = keyof typeof mapPizzaTypes;

export const defaultPrices = {
  priceFrom: 0,
  priceTo: 1000,
};
