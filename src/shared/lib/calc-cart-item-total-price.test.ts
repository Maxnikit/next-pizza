import { expect, test } from "vitest";
import { calcCartItemTotalPrice } from "@/shared/lib/calc-cart-item-total-price";

test("Gets correct totalPrice for cartItem", () => {
  const item = {
    id: 1,
    productVariationId: 1,
    cartId: 1,
    quantity: 2,
    createdAt: new Date("2024-08-16T17:38:31.077Z"),
    updatedAt: new Date("2024-08-16T17:38:31.077Z"),
    productVariation: {
      id: 1,
      price: 513,
      size: 20,
      pizzaType: 1,
      description: "Освежает как никогда прежде!",
      productId: 23,
      createdAt: new Date("2024-08-16T17:38:31.077Z"),
      updatedAt: new Date("2024-08-16T17:38:31.077Z"),
      product: {
        id: 23,
        name: "Пепперони фреш",
        imageUrl:
          "https://media.dodostatic.net/image/r:233x233/11EE7D61304FAF5A98A6958F2BB2D260.webp",
        categoryId: 1,
        createdAt: new Date("2024-08-16T17:38:31.077Z"),
        updatedAt: new Date("2024-08-16T17:38:31.077Z"),
      },
    },
    ingredients: [
      {
        id: 1,
        name: "Сырный бортик",
        price: 179,
        imageUrl:
          "https://cdn.dodostatic.net/static/Img/Ingredients/99f5cb91225b4875bd06a26d2e842106.png",
        createdAt: new Date("2024-08-16T17:38:31.077Z"),
        updatedAt: new Date("2024-08-16T17:38:31.077Z"),
      },
      {
        id: 2,
        name: "Сливочная моцарелла",
        price: 79,
        imageUrl:
          "https://cdn.dodostatic.net/static/Img/Ingredients/cdea869ef287426386ed634e6099a5ba.png",
        createdAt: new Date("2024-08-16T17:38:31.077Z"),
        updatedAt: new Date("2024-08-16T17:38:31.077Z"),
      },
      {
        id: 3,
        name: "Сыры чеддер и пармезан",
        price: 79,
        imageUrl:
          "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA69C1FE796",
        createdAt: new Date("2024-08-16T17:38:31.077Z"),
        updatedAt: new Date("2024-08-16T17:38:31.077Z"),
      },
    ],
  };
  const totalPrice = calcCartItemTotalPrice(item);
  expect(totalPrice).toBe(1700);
});

// TODO Write more tests
