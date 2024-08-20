import { CartItemDTO } from "@/shared/services/dto/cart.dto";

export function calcCartItemTotalPrice(item: CartItemDTO): number {
  const ingredientsTotalPrice = item.ingredients.reduce((acc, ingredient) => {
    return acc + ingredient.price;
  }, 0);
  const totalPrice =
    (item.productVariation.price + ingredientsTotalPrice) * item.quantity;

  return totalPrice;
}
