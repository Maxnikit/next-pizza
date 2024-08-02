import { Title, VariantSelector } from "@/components/shared";
import { ProductImage } from "@/components/shared/product-image";
import { Button } from "@/components/ui";
import { cn } from "@/lib/utils";
import { Product } from "@prisma/client";
import React from "react";

type Props = {
  product: Product;
  onClickAdd?: () => void;
  className?: string;
};

export function ChoosePizzaForm({ className, product, onClickAdd }: Props) {
  const totalPrice = 350;
  return (
    <div className={cn("flex flex-1", className)}>
      <ProductImage src={product.imageUrl} size={30} alt={product.name} />

      <div className="w-[490px] bg-[#f7f6f5] p-7">
        <Title text={product.name} size="md" className="mb-1 font-extrabold" />
        <p className="text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos
          nisi, libero deserunt labore facere esse! Eligendi quas a voluptates
          suscipit exercitationem. Quos ea totam laborum quaerat dolorem fugit
          temporibus animi.
        </p>
        {/* TODO get variants from api */}
        <VariantSelector
          selectedValue="1"
          items={[
            {
              value: "1",
              name: "Маленькая",
            },
            {
              value: "2",
              name: "M",
            },
          ]}
        />

        <Button className="h-[55px] w-full rounded-[18px] px-10 text-base">
          Добавить в корзину за {totalPrice} ₽
        </Button>
      </div>
    </div>
  );
}
