import { prisma } from "@/prisma/prisma-client";
import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { findOrCreateCart } from "@/shared/lib/find-or-create-cart";

export async function GET(req: NextRequest) {
  try {
    const token = req.cookies.get("cartToken")?.value;

    if (!token) {
      return NextResponse.json({ items: [] });
    }
    const userCart = await prisma.cart.findFirst({
      where: { token },
      include: {
        items: {
          orderBy: { createdAt: "desc" },
          include: {
            productVariation: { include: { product: true } },
            ingredients: true,
          },
        },
      },
    });
    return NextResponse.json(userCart);
  } catch (error) {
    console.log("[CART_GET] Server error", error);
    return NextResponse.json(
      { error: "Не удалось получить корзину" },
      { status: 500 },
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    let token = req.cookies.get("cartToken")?.value;

    if (!token) {
      token = crypto.randomUUID();
    }

    const userCart = await findOrCreateCart(token);

    const findCartItem = await prisma.cartItem.findFirst({
      where: {
        cartId: userCart.id,
        // TODO keep working
      },
    });

    return NextResponse.json(userCart);
  } catch (error) {
    console.log("[CART_POST] Server error", error);
    return NextResponse.json(
      { error: "Не удалось создать корзину" },
      { status: 500 },
    );
  }
}
