import { expect, test } from "vitest";
import { calcCartItemTotalPrice } from "@/shared/lib/calc-cart-item-total-price";
import { CartItemDTO } from "@/shared/services/dto/cart.dto";

const placeholderDate = new Date("2024-08-16T17:38:31.077Z");

// Helper function to create test data
const createTestCartItem = (
  overrides: Partial<CartItemDTO> = {},
): CartItemDTO => ({
  id: 1,
  productVariationId: 1,
  cartId: 1,
  quantity: 2,
  createdAt: placeholderDate,
  updatedAt: placeholderDate,
  productVariation: {
    id: 1,
    price: 513,
    size: 20,
    pizzaType: 1,
    description: "Освежает как никогда прежде!",
    productId: 23,
    createdAt: placeholderDate,
    updatedAt: placeholderDate,
    product: {
      id: 23,
      name: "Пепперони фреш",
      imageUrl:
        "https://media.dodostatic.net/image/r:233x233/11EE7D61304FAF5A98A6958F2BB2D260.webp",
      categoryId: 1,
      createdAt: placeholderDate,
      updatedAt: placeholderDate,
    },
  },
  ingredients: [
    {
      id: 1,
      name: "Сырный бортик",
      price: 179,
      imageUrl:
        "https://cdn.dodostatic.net/static/Img/Ingredients/99f5cb91225b4875bd06a26d2e842106.png",
      createdAt: placeholderDate,
      updatedAt: placeholderDate,
    },
    {
      id: 2,
      name: "Сливочная моцарелла",
      price: 79,
      imageUrl:
        "https://cdn.dodostatic.net/static/Img/Ingredients/cdea869ef287426386ed634e6099a5ba.png",
      createdAt: placeholderDate,
      updatedAt: placeholderDate,
    },
    {
      id: 3,
      name: "Сыры чеддер и пармезан",
      price: 79,
      imageUrl:
        "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA69C1FE796",
      createdAt: placeholderDate,
      updatedAt: placeholderDate,
    },
  ],
  ...overrides, // Apply any overrides to the default test data
});

test("calculates total price for cart item with ingredients", () => {
  const item = createTestCartItem();
  const totalPrice = calcCartItemTotalPrice(item);
  expect(totalPrice).toBe(1700); // (513 + 179 + 79 + 79) * 2
});

test("calculates total price for cart item without ingredients", () => {
  const item = createTestCartItem({ ingredients: [] });
  const totalPrice = calcCartItemTotalPrice(item);
  expect(totalPrice).toBe(1026); // 513 * 2
});

test("calculates total price for cart item with different quantity", () => {
  const item = createTestCartItem({ quantity: 1 });
  const totalPrice = calcCartItemTotalPrice(item);
  expect(totalPrice).toBe(850); // 513 + 179 + 79 + 79
});
