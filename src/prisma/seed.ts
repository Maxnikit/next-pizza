import { prisma } from "./prisma-client";
import { hashSync } from "bcrypt";
import { categories, _ingredients, products, descriptions } from "./constants";
import { Prisma } from "@prisma/client";

const getRandomDecimalNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min) * 10 + min * 10) / 10;
};

type Description = {
  name: string;
};

const getRandomDescription = (array: Description[]) => {
  return array[Math.floor(Math.random() * array.length)].name;
};

const generateProductVariation = ({
  productId,
  pizzaType,
  size,
}: {
  productId: number;
  pizzaType?: 1 | 2;
  size?: 20 | 30 | 40;
  description?: string;
}) => {
  return {
    productId,
    price: getRandomDecimalNumber(190, 600),
    pizzaType,
    size,
    description: getRandomDescription(descriptions),
  } as Prisma.ProductVariationUncheckedCreateInput;
};

async function up() {
  await prisma.user.createMany({
    data: [
      {
        fullName: "John Doe",
        email: "lLdKu@example.com",
        password: hashSync("111111", 10),
        verified: new Date(),
        role: "USER",
      },
      {
        fullName: "Vitaly Pupkin",
        email: "5z9zA@example.com",
        password: hashSync("111111", 10),
        verified: new Date(),
        role: "ADMIN",
      },
    ],
  });

  await prisma.category.createMany({
    data: categories,
  });

  await prisma.ingredient.createMany({
    data: _ingredients,
  });

  await prisma.product.createMany({
    data: products,
  });

  const pizza1 = await prisma.product.create({
    data: {
      name: "Пепперони фреш",
      imageUrl:
        "https://media.dodostatic.net/image/r:233x233/11EE7D61304FAF5A98A6958F2BB2D260.webp",
      categoryId: 1,
      ingredients: {
        connect: _ingredients.slice(0, 5),
      },
    },
  });

  const pizza2 = await prisma.product.create({
    data: {
      name: "Сырная",
      imageUrl:
        "https://media.dodostatic.net/image/r:233x233/11EE7D610CF7E265B7C72BE5AE757CA7.webp",
      categoryId: 1,
      ingredients: {
        connect: _ingredients.slice(5, 10),
      },
    },
  });

  const pizza3 = await prisma.product.create({
    data: {
      name: "Чоризо фреш",
      imageUrl:
        "https://media.dodostatic.net/image/r:584x584/11EE7D61706D472F9A5D71EB94149304.webp",
      categoryId: 1,
      ingredients: {
        connect: _ingredients.slice(10, 15),
      },
    },
  });

  const pizza4 = await prisma.product.create({
    data: {
      name: "Карбонара",
      imageUrl:
        "https://media.dodostatic.net/image/r:584x584/11EE7D61706D472F9A5D71EB94149304.webp",
      categoryId: 1,
      ingredients: {
        connect: _ingredients.slice(3, 8),
      },
    },
  });

  const pizza5 = await prisma.product.create({
    data: {
      name: "Цезарь",
      imageUrl:
        "https://media.dodostatic.net/image/r:584x584/11EE7D61706D472F9A5D71EB94149304.webp",
      categoryId: 1,
      ingredients: {
        connect: _ingredients.slice(6, 12),
      },
    },
  });

  const pizza6 = await prisma.product.create({
    data: {
      name: "Гавайская",
      imageUrl:
        "https://media.dodostatic.net/image/r:584x584/11EE7D61706D472F9A5D71EB94149304.webp",
      categoryId: 1,
      ingredients: {
        connect: _ingredients.slice(13, 17),
      },
    },
  });

  await prisma.productVariation.createMany({
    data: [
      // Пицца "Пепперони фреш"
      generateProductVariation({
        productId: pizza1.id,
        pizzaType: 1,
        size: 20,
      }),
      generateProductVariation({
        productId: pizza1.id,
        pizzaType: 2,
        size: 30,
      }),
      generateProductVariation({
        productId: pizza1.id,
        pizzaType: 2,
        size: 40,
      }),

      // Пицца "Сырная"
      generateProductVariation({
        productId: pizza2.id,
        pizzaType: 1,
        size: 20,
      }),
      generateProductVariation({
        productId: pizza2.id,
        pizzaType: 1,
        size: 30,
      }),
      generateProductVariation({
        productId: pizza2.id,
        pizzaType: 1,
        size: 40,
      }),
      generateProductVariation({
        productId: pizza2.id,
        pizzaType: 2,
        size: 20,
      }),
      generateProductVariation({
        productId: pizza2.id,
        pizzaType: 2,
        size: 30,
      }),
      generateProductVariation({
        productId: pizza2.id,
        pizzaType: 2,
        size: 40,
      }),

      // Пицца "Чоризо фреш"
      generateProductVariation({
        productId: pizza3.id,
        pizzaType: 1,
        size: 20,
      }),
      generateProductVariation({
        productId: pizza3.id,
        pizzaType: 2,
        size: 30,
      }),
      generateProductVariation({
        productId: pizza3.id,
        pizzaType: 2,
        size: 40,
      }),

      generateProductVariation({
        productId: pizza4.id,
        pizzaType: 1,
        size: 20,
      }),
      generateProductVariation({
        productId: pizza4.id,
        pizzaType: 2,
        size: 30,
      }),
      generateProductVariation({
        productId: pizza4.id,
        pizzaType: 2,
        size: 40,
      }),

      generateProductVariation({
        productId: pizza5.id,
        pizzaType: 1,
        size: 20,
      }),
      generateProductVariation({
        productId: pizza5.id,
        pizzaType: 2,
        size: 30,
      }),
      generateProductVariation({
        productId: pizza5.id,
        pizzaType: 2,
        size: 40,
      }),

      generateProductVariation({
        productId: pizza6.id,
        pizzaType: 1,
        size: 20,
      }),
      generateProductVariation({
        productId: pizza6.id,
        pizzaType: 2,
        size: 30,
      }),
      generateProductVariation({
        productId: pizza6.id,
        pizzaType: 2,
        size: 40,
      }),
      // Остальные продукты
      generateProductVariation({ productId: 1 }),
      generateProductVariation({ productId: 2 }),
      generateProductVariation({ productId: 3 }),
      generateProductVariation({ productId: 4 }),
      generateProductVariation({ productId: 5 }),
      generateProductVariation({ productId: 6 }),
      generateProductVariation({ productId: 7 }),
      generateProductVariation({ productId: 8 }),
      generateProductVariation({ productId: 9 }),
      generateProductVariation({ productId: 10 }),
      generateProductVariation({ productId: 11 }),
      generateProductVariation({ productId: 12 }),
      generateProductVariation({ productId: 13 }),
      generateProductVariation({ productId: 14 }),
      generateProductVariation({ productId: 15 }),
      generateProductVariation({ productId: 16 }),
      generateProductVariation({ productId: 17 }),
      generateProductVariation({ productId: 18 }),
      generateProductVariation({ productId: 19 }),
      generateProductVariation({ productId: 20 }),
      generateProductVariation({ productId: 21 }),
      generateProductVariation({ productId: 22 }),
    ],
  });

  await prisma.cart.createMany({
    data: [
      {
        userId: 1,
        totalAmount: 0,
        token: "11111",
      },
      {
        userId: 2,
        totalAmount: 0,
        token: "222222",
      },
    ],
  });

  await prisma.cartItem.create({
    data: {
      productVariationId: 1,
      cartId: 1,
      quantity: 2,
      ingredients: {
        connect: [{ id: 1 }, { id: 2 }, { id: 3 }],
      },
    },
  });
}

async function down() {
  await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Cart" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "CartItem" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Ingredient" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "ProductVariation" RESTART IDENTITY CASCADE`;
}

async function main() {
  try {
    await down();
    await up();
  } catch (e) {
    console.error(e);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
