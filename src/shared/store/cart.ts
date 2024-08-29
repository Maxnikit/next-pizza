import { getCartDetails } from "@/shared/lib";
import { CartStateItem } from "@/shared/lib/get-cart-details";
import { Api } from "@/shared/services/api-client";
import { CreateCartItemValues } from "@/shared/services/dto/cart.dto";
import { create } from "zustand";

export type CartState = {
  loading: boolean;
  error: boolean;
  totalAmount: number;
  items: CartStateItem[];

  fetchCartItems: () => Promise<void>;
  updateItemQuantity: (cartItemId: number, quantity: number) => Promise<void>;
  // TODO change any
  addCartItem: (values: CreateCartItemValues) => Promise<void>;
  removeCartItem: (cartItemId: number) => Promise<void>;
};

export const useCartStore = create<CartState>((set, get) => ({
  loading: true,
  error: false,
  totalAmount: 0,
  items: [],

  fetchCartItems: async () => {
    try {
      set({ loading: true, error: false });
      const data = await Api.cart.getCart();
      set(getCartDetails(data));
    } catch (error) {
      console.error(error);
      set({ error: true });
    } finally {
      set({ loading: false });
    }
  },

  updateItemQuantity: async (cartItemId: number, quantity: number) => {
    try {
      set({ loading: true, error: false });
      const data = await Api.cart.updateItemQuantity(cartItemId, quantity);
      set(getCartDetails(data));
    } catch (error) {
      console.error(error);
      set({ error: true });
    } finally {
      set({ loading: false });
    }
  },
  removeCartItem: async (cartItemId: number) => {
    try {
      set({ loading: true, error: false });
      const data = await Api.cart.removeCartItem(cartItemId);
      set(getCartDetails(data));
    } catch (error) {
      console.error(error);
      set({ error: true });
    } finally {
      set({ loading: false });
    }
  },
  addCartItem: async (values: CreateCartItemValues) => {
    try {
      set({ loading: true, error: false });
      const data = await Api.cart.addCartItem(values);
      set(getCartDetails(data));
    } catch (error) {
      console.error(error);
      set({ error: true });
    } finally {
      set({ loading: false });
    }
  },
}));
