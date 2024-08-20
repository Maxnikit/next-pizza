import { CartItemDTO } from "@/shared/services/dto/cart.dto";

export function calcCartItemTotalPrice(item: CartItemDTO): number {
  const ingredientsTotalAmount = item.ingredients.reduce(
    (totalValue, currentValue) => {
      return totalValue + currentValue.price;
    },
    0,
  );
  const totalAmount =
    (item.productVariation.price + ingredientsTotalAmount) * item.quantity;
  return totalAmount;
}
