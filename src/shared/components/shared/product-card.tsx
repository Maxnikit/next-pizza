import { Title } from "@/shared/components/shared";
import { Button } from "@/shared/components/ui";
import { Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  className?: string;
};

export function ProductCard({ id, name, price, imageUrl, className }: Props) {
  return (
    <article className={className}>
      <Link href={`/product/${id}`}>
        <div className="flex h-[260px] justify-center rounded-lg bg-secondary p-6">
          <Image src={imageUrl} alt={name} width={200} height={200} />
        </div>

        <Title text={name} size="sm" className="mb-1 mt-3 font-bold" />
        {/* TODO get all data from API */}
        <p className="text-sm text-gray-400">
          Ципленок, моцарелла, маслины, томаты и орегано
        </p>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-[20px]">
            от <b>{price} ₽</b>
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
