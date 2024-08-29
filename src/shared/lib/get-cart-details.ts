import { calcCartItemTotalPrice } from "@/shared/lib/calc-cart-item-total-price";
import { CartDTO } from "@/shared/services/dto/cart.dto";
import { Cart } from "@prisma/client";

export type CartStateItem = {
  id: number;
  quantity: number;
  price: number;
  name: string;
  imageUrl: string;
  pizzaSize?: 20 | 30 | 40 | null;
  pizzaType?: 1 | 2 | null;
  ingredients: Array<{ name: string; price: number }>;
};

type ReturnProps = {
  items: CartStateItem[];
  totalAmount: number;
};
export function getCartDetails(data: CartDTO): ReturnProps {
  const items = data.items.map((item) => {
    return {
      id: item.id,
      quantity: item.quantity,
      name: item.productVariation.product.name,
      imageUrl: item.productVariation.product.imageUrl,
      pizzaSize: item.productVariation.size as 20 | 30 | 40 | null,
      pizzaType: item.productVariation.pizzaType as 1 | 2 | null,
      price: calcCartItemTotalPrice(item),
      ingredients: item.ingredients.map((ingredient) => ({
        name: ingredient.name,
        price: ingredient.price,
      })),
    };
  });
  return { items, totalAmount: data.totalAmount };
}
