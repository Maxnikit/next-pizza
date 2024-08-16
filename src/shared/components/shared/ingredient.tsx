import { Title } from "@/shared/components/shared";
import { Button } from "@/shared/components/ui";
import { cn } from "@/shared/lib/utils";
import { CircleCheck, Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  name: string;
  price: number;
  imageUrl: string;
  onClick?: () => void;
  active?: boolean;
  className?: string;
};

export function Ingredient({
  name,
  price,
  imageUrl,
  className,
  active,
  onClick,
}: Props) {
  return (
    <button
      className={cn(
        "relative flex cursor-pointer flex-col items-center rounded-md border border-transparent bg-white p-1 text-center shadow-md",
        { "border-primary": active },
        className,
      )}
      onClick={onClick}
    >
      {active && (
        <CircleCheck className="absolute right-2 top-2 text-primary" />
      )}
      <Image width={110} height={110} alt={name} src={imageUrl} />
      <span className="mb-1 text-xs">{name}</span>
      <span className="font-bold">{price} ₽</span>
    </button>
  );
}
