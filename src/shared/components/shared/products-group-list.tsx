"use client";
import { ProductCard, Title } from "@/shared/components/shared";
import { cn } from "@/shared/lib/utils";
import { useIntersection } from "react-use";
import React from "react";
import { useCategoryStore } from "@/shared/store/category";
import { ProductWithRelations } from "@/@types/prisma";

type Props = {
  title: string;
  //   products: CategoryProducts["products"];
  products: ProductWithRelations[];
  categoryId: number;
  className?: string;
  listClassName?: string;
};

export function ProductsGroupList({
  title,
  products,
  categoryId,
  className,
  listClassName,
}: Props) {
  const setActiveCategoryId = useCategoryStore((state) => state.setActiveId);
  const intersectionRef = React.useRef(null);
  const intersection = useIntersection(intersectionRef, {
    threshold: 0.4,
  });
  //? useIntersection работает не очень хорошо если в категории продуктов 3 или меньше продукта(т.е. всего 1 строчка). Тогда он можен перескакивать и пропускать категории. Что с этим делать сейчас я не знаю.
  React.useEffect(() => {
    if (intersection?.isIntersecting) {
      setActiveCategoryId(categoryId);
    }
  }, [intersection?.isIntersecting, categoryId, setActiveCategoryId, title]);

  return (
    <div className={className} id={title} ref={intersectionRef}>
      <Title text={title} size="lg" className="mb-5 font-extrabold" />

      <div className={cn("grid grid-cols-3 gap-[50px]", listClassName)}>
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
}
