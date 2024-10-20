import { CreateCartItemValues } from "@/shared/services/dto/cart.dto";
import {
  updateItemQuantity,
  removeCartItem,
  addCartItem,
} from "./../services/cart";
import { useCartStore } from "@/shared/store/cart";
import { useEffect } from "react";
import { CartStateItem } from "@/shared/lib/get-cart-details";

type ReturnProps = {
  items: CartStateItem[];
  totalAmount: number;
  loading: boolean;
  totalItemCount: number;

  updateItemQuantity: (id: number, quantity: number) => void;
  removeCartItem: (id: number) => void;
  addCartItem: (values: CreateCartItemValues) => void;
  cleanCart: () => void;
};
export const useCart = (): ReturnProps => {
  const getTotalItemCount = (items: CartStateItem[]) => {
    let itemCount = 0;
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      itemCount += item.quantity;
    }
    return itemCount;
  };

  const items = useCartStore((state) => state.items);
  const totalAmount = useCartStore((state) => state.totalAmount);
  const loading = useCartStore((state) => state.loading);
  const addCartItem = useCartStore((state) => state.addCartItem);
  const updateItemQuantity = useCartStore((state) => state.updateItemQuantity);
  const removeCartItem = useCartStore((state) => state.removeCartItem);
  const cleanCart = useCartStore((state) => state.cleanCart);
  const totalItemCount = getTotalItemCount(items);

  const fetchCartItems = useCartStore((state) => state.fetchCartItems);
  useEffect(() => {
    fetchCartItems();
  }, [fetchCartItems]);

  return {
    items,
    totalItemCount,
    totalAmount,
    loading,
    addCartItem,
    updateItemQuantity,
    removeCartItem,
    cleanCart,
  };
};
