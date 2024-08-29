import {
  Cart,
  CartItem,
  Ingredient,
  Product,
  ProductVariation,
} from "@prisma/client";

export type CartItemDTO = CartItem & {
  productVariation: ProductVariation & {
    product: Product;
  };
  ingredients: Ingredient[];
};

export type CartDTO = Cart & {
  items: CartItemDTO[];
};

export type CreateCartItemValues = {
  productVariationId: number;
  ingredientsIds?: number[];
};
