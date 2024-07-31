import { prisma } from "@/prisma/prisma-client";

export async function GET(params: type) {
  const ingredients = await prisma.ingredient.findMany();
}
