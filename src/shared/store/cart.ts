import { getCartDetails } from "@/shared/lib";
import { Api } from "@/shared/services/api-client";
import { create } from "zustand";

export type CartState = {
  loading: boolean;
  error: boolean;
  totalAmount: number;
  items: CartStateItem[];

  fetchCartItems: () => Promise<void>;
  updateItemQuantity: (id: number, quantity: number) => Promise<void>;
  // TODO change any
  addCartItem: (values: any) => Promise<void>;
  removeCartItem: (id: number) => Promise<void>;
};

export const useCartStore = create<CartState>((set, get) => ({
  loading: true,
  error: false,
  totalAmount: 0,
  items: [],

  fetchCartItems: async () => {
    try {
      set({ loading: true, error: false });
      const data = await Api.cart.fetchCart();
      set(getCartDetails(data));
    } catch (error) {
      console.error(error);
      set({ error: true });
    } finally {
      set({ loading: false });
    }
  },

  removeCartItem: async (id: number) => {},

  updateItemQuantity: async (id: number, quantity: number) => {},

  addCartItem: async (values: any) => {},
}));
