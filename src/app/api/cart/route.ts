import { prisma } from "@/prisma/prisma-client";
import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { findOrCreateCart } from "@/shared/lib/find-or-create-cart";
import { CreateCartItemValues } from "@/shared/services/dto/cart.dto";
import { updateCartTotalPrice } from "@/shared/lib/update-cart-total-price";

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

    const data = (await req.json()) as CreateCartItemValues;
    // TODO починить баг призмы. Every работает не так, как должен. Найти способ находить существующий продукт с точно теми же ингридиентами и только тогда делать +1
    const findCartItem = await prisma.cartItem.findFirst({
      where: {
        cartId: userCart.id,
        productVariationId: data.productVariationId,
        ingredients: { every: { id: { in: data.ingredientsIds } } },
      },
    });

    // Если такой товар уже был в корзине => делаем +1 количества
    // Если его нет, то добавляем новый
    if (findCartItem) {
      await prisma.cartItem.update({
        where: { id: findCartItem.id },
        data: {
          quantity: findCartItem.quantity + 1,
        },
      });
    } else {
      await prisma.cartItem.create({
        data: {
          cartId: userCart.id,
          productVariationId: data.productVariationId,
          ingredients: { connect: data.ingredientsIds?.map((id) => ({ id })) },
        },
      });
    }

    const updatedUserCart = await updateCartTotalPrice(token);
    const resp = NextResponse.json(updatedUserCart);
    resp.cookies.set("cartToken", token);

    return resp;
  } catch (error) {
    console.log("[CART_POST] Server error", error);
    return NextResponse.json(
      { error: "Не удалось создать корзину" },
      { status: 500 },
    );
  }
}

export async function DELETE(req: NextRequest) {
  try {
    let token = req.cookies.get("cartToken")?.value;

    if (!token) {
      return NextResponse.json({ items: [] });
    }
    const userCart = await findOrCreateCart(token);

    await prisma.cartItem.deleteMany({ where: { cartId: userCart.id } });

    const updatedUserCart = await updateCartTotalPrice(token);
    const resp = NextResponse.json(updatedUserCart);
    resp.cookies.set("cartToken", token);

    return resp;
  } catch (error) {
    console.log("[CART_DELETE] Server error", error);
    return NextResponse.json(
      { error: "Не удалось очистить корзину" },
      { status: 500 },
    );
  }
}
