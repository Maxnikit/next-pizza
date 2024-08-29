import { ProductWithRelations } from "@/@types/prisma";
import { Variant } from "@/shared/components/shared/variant-selector";
import { PizzaSize, PizzaType } from "@/shared/constants/pizza";
import {
  calcTotalPizzaPrice,
  getAvailablePizzaSizes,
} from "@/shared/lib/pizza";
import React from "react";
import { useSet } from "react-use";

interface ReturnProps {
  size: PizzaSize;
  type: PizzaType;
  selectedIngredientsIds: Set<number>;
  availableSizes: Variant[];
  totalPrice: number | null;
  currentVariationId?: number;
  setSize: (size: PizzaSize) => void;
  setType: (type: PizzaType) => void;
  addIngredient: (id: number) => void;
}
export const usePizzaOptions = (product: ProductWithRelations): ReturnProps => {
  const [size, setSize] = React.useState<PizzaSize>(20);
  const [type, setType] = React.useState<PizzaType>(1);
  const [selectedIngredientsIds, { toggle: addIngredient }] = useSet(
    new Set<number>([]),
  );
  const availableSizes = getAvailablePizzaSizes(product, type);
  const currentVariationId = product.variations.find(
    (variation) => variation.pizzaType === type && variation.size === size,
  )?.id;
  const [totalPrice, setTotalPrice] = React.useState<number | null>(null);
  const previousPrice = React.useRef<number | null>(null);

  React.useEffect(() => {
    const isCurrentSizeAvailable = availableSizes.find(
      (item) => Number(item.value) === size && !item.disabled,
    );
    const newAvailableSize = availableSizes.find((item) => !item.disabled);

    if (!isCurrentSizeAvailable && newAvailableSize) {
      setSize(Number(newAvailableSize.value) as PizzaSize);
    }
  }, [type, availableSizes, size]);

  React.useEffect(() => {
    const newTotalPrice = calcTotalPizzaPrice(
      product,
      type,
      size,
      selectedIngredientsIds,
    );

    if (newTotalPrice !== null) {
      setTotalPrice(newTotalPrice);
      previousPrice.current = newTotalPrice;
    }
  }, [product, type, size, selectedIngredientsIds]);

  return {
    size,
    type,
    selectedIngredientsIds,
    availableSizes,
    totalPrice,
    currentVariationId,
    setSize,
    setType,
    addIngredient,
  };
};
