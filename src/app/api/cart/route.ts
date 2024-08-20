import { prisma } from "@/prisma/prisma-client";
import { NextRequest, NextResponse } from "next/server";

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
    console.log(error);
    return NextResponse.json(
      { error: "An error occurred while fetching the cart" },
      { status: 500 },
    );
  }
}
