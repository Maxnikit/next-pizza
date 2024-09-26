import {
  Categories,
  Container,
  Filters,
  ProductCard,
  SortPopup,
  Title,
  TopBar,
  ProductsGroupList,
} from "@/shared/components/shared";
import { prisma } from "@/prisma/prisma-client";
import { Suspense } from "react";
import { findPizzas } from "@/shared/lib";
import { GetSearchParams } from "@/shared/lib/find-pizzas";
import { search } from "@/shared/services/products";

export default async function Home({
  searchParams,
}: {
  searchParams: GetSearchParams;
}) {
  const categories = await findPizzas(searchParams);
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>

      <TopBar
        categories={categories.filter(
          (category) => category.products.length > 0,
        )}
      />

      <Container className="mt-10 pb-14">
        <div className="flex gap-[80px]">
          {/* Фильтрация */}
          <div className="w-[250px]">
            <Suspense>
              <Filters />
            </Suspense>
          </div>

          {/* Список товаров */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              {categories.map(
                (category) =>
                  category.products.length > 0 && (
                    <ProductsGroupList
                      key={category.id}
                      title={category.name}
                      categoryId={category.id}
                      className="scroll-mt-[92px]"
                      products={category.products}
                    />
                  ),
              )}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
