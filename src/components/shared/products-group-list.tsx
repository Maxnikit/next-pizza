import { ProductCard, Title } from "@/components/shared";
import { cn } from "@/lib/utils";
import React from "react";

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
  return (
    <div className={className}>
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
