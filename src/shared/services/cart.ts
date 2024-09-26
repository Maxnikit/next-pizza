import { create } from "zustand";
import { axiosInstance } from "@/shared/services/axios";
import { CartDTO, CreateCartItemValues } from "@/shared/services/dto/cart.dto";

export const getCart = async (): Promise<CartDTO> => {
  const { data } = await axiosInstance.get<CartDTO>("/cart");

  return data;
};

export const updateItemQuantity = async (
  cartItemId: number,
  quantity: number,
): Promise<CartDTO> => {
  const { data } = await axiosInstance.patch<CartDTO>(`/cart/` + cartItemId, {
    quantity,
  });

  return data;
};

export const removeCartItem = async (cartItemId: number): Promise<CartDTO> => {
  const { data } = await axiosInstance.delete<CartDTO>(`/cart/` + cartItemId);

  return data;
};

export const addCartItem = async (
  values: CreateCartItemValues,
): Promise<CartDTO> => {
  const { data } = await axiosInstance.post<CartDTO>("/cart", values);

  return data;
};

export const cleanCart = async (): Promise<CartDTO> => {
  const { data } = await axiosInstance.delete<CartDTO>("/cart");

  return data;
};
