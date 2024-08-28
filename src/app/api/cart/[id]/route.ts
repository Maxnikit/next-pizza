import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/prisma/prisma-client";
import { updateCartTotalPrice } from "@/shared/lib/update-cart-total-price";

export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  try {
    const id = Number(params.id);
    const data = (await req.json()) as { quantity: number };
    const token = req.cookies.get("cartToken")?.value;

    if (!token) {
      return NextResponse.json({ error: "Cart token not found" });
    }

    const cartItem = await prisma.cartItem.findFirst({
      where: { id },
    });

    if (!cartItem) {
      return NextResponse.json({ error: "Cart item not found" });
    }

    await prisma.cartItem.update({
      where: { id },
      data: {
        quantity: data.quantity,
      },
    });

    const updatedUserCart = await updateCartTotalPrice(token);
    return NextResponse.json(updatedUserCart);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: `An error occurred while updating the cart: ${error}` },
      { status: 500 },
    );
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  try {
    const id = Number(params.id);
    const token = req.cookies.get("cartToken")?.value;

    if (!token) {
      return NextResponse.json({ error: "Cart token not found" });
    }

    const cartItem = await prisma.cartItem.findFirst({
      where: { id },
    });

    if (!cartItem) {
      return NextResponse.json({ error: "Cart item not found" });
    }

    await prisma.cartItem.delete({
      where: { id },
    });

    const updatedUserCart = await updateCartTotalPrice(token);
    return NextResponse.json(updatedUserCart);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: `An error occurred while deleting cart item: ${error}` },
      { status: 500 },
    );
  }
}
