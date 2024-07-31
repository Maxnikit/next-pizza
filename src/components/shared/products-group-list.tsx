"use client";
import { ProductCard, Title } from "@/components/shared";
import { cn } from "@/lib/utils";
import { useIntersection } from "react-use";
import React from "react";
import { useCategoryStore } from "@/store/category";

type Props = {
  title: string;
  //   products: CategoryProducts["products"];
  products: any[];
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

  React.useEffect(() => {
    if (intersection?.isIntersecting) {
      setActiveCategoryId(categoryId);
    }
  }, [intersection?.isIntersecting, categoryId, setActiveCategoryId]);

  return (
    <div className={className} id={title} ref={intersectionRef}>
      <Title text={title} size="lg" className="mb-5 font-extrabold" />
      <div className={cn("grid grid-cols-3 gap-[50px]", listClassName)}>
        {products.map((product, index) => (
          <ProductCard
            key={index}
            id={product.id}
            name={product.name}
            imageUrl={product.imageUrl}
            price={product.items[0].price}
          />
        ))}
      </div>
    </div>
  );
}
