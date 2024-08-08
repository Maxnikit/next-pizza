import {
  Container,
  ProductImage,
  Title,
  VariantSelector,
} from "@/shared/components/shared";
import { prisma } from "@/prisma/prisma-client";
import { notFound } from "next/navigation";
import React from "react";

type Props = {
  params: { id: string };
};

export default async function ProductPage({ params: { id } }: Props) {
  const product = await prisma.product.findFirst({
    where: {
      id: Number(id),
    },
  });

  if (!product) {
    return notFound();
  }
  return (
    <Container className="my-10 flex flex-col">
      <div className="flex flex-1">
        <ProductImage src={product.imageUrl} alt={product.name} size={40} />
        <div className="w-[490px] bg-[#f7f6f5] p-7">
          <Title
            text={product.name}
            size="md"
            className="mb-1 font-extrabold"
          />
          <p className="text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Dignissimos nisi, libero deserunt labore facere esse! Eligendi quas
            a voluptates suscipit exercitationem. Quos ea totam laborum quaerat
            dolorem fugit temporibus animi.
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
        </div>
      </div>
    </Container>
  );
}
