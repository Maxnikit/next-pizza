import { prisma } from "@/prisma/prisma-client";
import { calcCartItemTotalPrice } from "@/shared/lib/calc-cart-item-total-price";

export async function updateCartTotalPrice(token: string) {
  const userCart = await prisma.cart.findFirst({
    where: { token },
    include: {
      items: {
        orderBy: {
          createdAt: "desc",
        },
        include: {
          productVariation: { include: { product: true } },
          ingredients: true,
        },
      },
    },
  });

  if (!userCart) {
    return 0;
  }
  const totalAmount = userCart?.items.reduce((acc, item) => {
    return acc + calcCartItemTotalPrice(item);
  }, 0);

  return await prisma.cart.update({
    where: { id: userCart.id },
    data: { totalAmount },
    include: {
      items: {
        orderBy: {
          createdAt: "desc",
        },
        include: {
          productVariation: { include: { product: true } },
          ingredients: true,
        },
      },
    },
  });
}
