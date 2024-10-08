import { ProductWithRelations } from "@/@types/prisma";
import { Variant } from "@/shared/components/shared/variant-selector";
import { pizzaSizes, PizzaType } from "@/shared/constants/pizza";
import { ProductVariation } from "@prisma/client";

/**
 * Calculates the total price of a pizza based on its type, size, and selected ingredients.
 * @param product - The product with its variations and ingredients.
 * @param type - The type of the pizza (1 or 2).
 * @param size - The size of the pizza (20, 30, or 40).
 * @param selectedIngredientsIds - The set of selected ingredients' IDs.
 * @returns The total price of the pizza, or null if the variation is not found.
 */
export const calcTotalPizzaPrice = (
  product: ProductWithRelations,
  type: 1 | 2,
  size: 20 | 30 | 40,
  selectedIngredientsIds: Set<number>,
): number | null => {
  const variation = product.variations.find(
    (variation) => variation.pizzaType === type && variation.size === size,
  );

  const variationPrice = variation ? variation.price : null;

  if (variationPrice === null) {
    return null;
  }

  const totalIngredientsPrice = product.ingredients
    .filter((ingredient) => selectedIngredientsIds.has(ingredient.id))
    .reduce((acc, ingredient) => acc + ingredient.price, 0) as number;

  return variationPrice + totalIngredientsPrice;
};

export const isPizza = (product: ProductWithRelations): boolean => {
  return Boolean(product.variations[0].pizzaType);
};

export const getAvailablePizzaSizes = (
  product: ProductWithRelations,
  type: PizzaType,
): Variant[] => {
  const filteredVariationsByType = product.variations.filter(
    (variation) => variation.pizzaType === type,
  );
  const availableSizes = pizzaSizes.map((item) => ({
    name: item.name,
    value: item.value,
    disabled: !filteredVariationsByType.some(
      (variation) => variation.size === Number(item.value),
    ),
  }));

  return availableSizes;
};
