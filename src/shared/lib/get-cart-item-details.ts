import { mapPizzaTypes, PizzaType } from "@/shared/constants/pizza";
import { PizzaSize } from "./../constants/pizza";
import { Ingredient } from "@prisma/client";
import { CartStateItem } from "@/shared/lib/get-cart-details";

export function getCartItemDetails(
  pizzaSize: PizzaSize,
  pizzaType: PizzaType,
  ingredients: CartStateItem["ingredients"],
) {
  const details = [];

  if (pizzaSize && pizzaType) {
    const typeName = mapPizzaTypes[pizzaType];
    details.push(`${typeName} ${pizzaSize} см`);
  }

  if (ingredients) {
    details.push(...ingredients.map((ingredient) => ingredient.name));
  }

  return details.join(", ");
}
