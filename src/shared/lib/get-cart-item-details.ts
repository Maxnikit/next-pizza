import { mapPizzaTypes, PizzaType } from "@/shared/constants/pizza";
import { PizzaSize } from "./../constants/pizza";
import { Ingredient } from "@prisma/client";

type Props = {
  pizzaSize: PizzaSize;
  pizzaType: PizzaType;
  ingredients: Ingredient[];
};
export function getCartItemDetails({
  pizzaSize,
  pizzaType,
  ingredients,
}: Props) {
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
