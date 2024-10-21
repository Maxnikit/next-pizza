import { Title } from "@/shared/components/shared/title";
import { Button } from "@/shared/components/ui";
import { SheetClose } from "@/shared/components/ui/sheet";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

export function CheckoutCartEmpty({}: Props) {
  return (
    <div className="mx-auto flex w-72 flex-col items-center justify-center">
      <Image
        src="/assets/empty-box.png"
        alt="Empty cart"
        width={120}
        height={120}
      />
      <Title
        size="sm"
        text="Корзина пуста"
        className="my-2 text-center font-bold"
      />
      <p className="mb-5 text-center text-neutral-500">
        Добавьте что-нибудь в корзину чтобы совершить заказ
      </p>
      <Link href="/">
        <Button>
          <ArrowLeft />
          Вернуться
        </Button>
      </Link>
    </div>
  );
}
