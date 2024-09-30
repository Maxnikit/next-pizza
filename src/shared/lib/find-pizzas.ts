import { products } from "./../../prisma/constants";
import { prisma } from "@/prisma/prisma-client";
import { defaultPrices } from "@/shared/constants/pizza";

export interface GetSearchParams {
  query?: string;
  sortBy?: string;
  sizes?: string;
  pizzaTypes?: string;
  ingredients?: string;
  priceFrom?: string;
  priceTo?: string;
}

export const findPizzas = async (params: GetSearchParams) => {
  const sizes = params.sizes?.split(",").map(Number);
  const pizzaTypes = params.pizzaTypes?.split(",").map(Number);
  const ingredientsIdArr = params.ingredients?.split(",").map(Number);

  const minPrice = params.priceFrom
    ? Number(params.priceFrom)
    : defaultPrices.priceFrom;
  const maxPrice = params.priceTo
    ? Number(params.priceTo)
    : defaultPrices.priceTo;

  const categories = await prisma.category.findMany({
    include: {
      products: {
        orderBy: {
          id: "desc",
        },
        where: {
          ingredients: ingredientsIdArr
            ? { some: { id: { in: ingredientsIdArr } } }
            : undefined,
          variations: {
            some: {
              size: {
                in: sizes,
              },
              pizzaType: {
                in: pizzaTypes,
              },
              // price: {
              //   gte: minPrice,
              //   lte: maxPrice,
              // },
            },
          },
        },
        include: {
          ingredients: true,
          variations: {
            where: {
              price: {
                gte: minPrice,
                lte: maxPrice,
              },
            },
            orderBy: {
              price: "asc",
            },
          },
        },
      },
    },
  });
  console.log(categories);
  return categories;
};
