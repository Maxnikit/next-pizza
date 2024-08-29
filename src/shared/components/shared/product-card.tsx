import { ProductWithRelations } from "@/@types/prisma";
import { Title } from "@/shared/components/shared";
import { Button } from "@/shared/components/ui";
import { Ingredient } from "@prisma/client";
import { Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  product: ProductWithRelations;
  className?: string;
};

export function ProductCard({ product, className }: Props) {
  const productDescription =
    product.ingredients.length > 0
      ? product.ingredients
          .map((ingredient: Ingredient) => ingredient.name)
          .join(", ")
      : product.variations[0].description;
  const productPrice = product.variations[0].price;

  return (
    <article className={className}>
      <Link scroll={false} href={`/product/${product.id}`}>
        <div className="flex h-[260px] justify-center rounded-lg bg-secondary p-6">
          <Image
            src={product.imageUrl}
            alt={product.name}
            priority={true}
            width={200}
            height={200}
            style={{ width: "auto", height: "auto" }}
          />
        </div>

        <Title text={product.name} size="sm" className="mb-1 mt-3 font-bold" />

        <p className="text-sm text-gray-400">{productDescription}</p>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-[20px]">
            от <b>{productPrice} ₽</b>
          </span>
          <Button variant="secondary" className="text-base font-bold">
            <Plus size={20} className="mr-1" />
            Добавить
          </Button>
        </div>
      </Link>
    </article>
  );
}
