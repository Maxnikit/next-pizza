import { CartButton, Container, SearchInput } from "@/shared/components/shared";
import { Button } from "@/shared/components/ui";

import { cn } from "@/shared/lib/utils";
import { ArrowRight, ShoppingCart, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  hasSearch?: boolean;
  hasCartButton?: boolean;
  className?: string;
}

export function Header({
  hasSearch = true,
  hasCartButton = true,
  className,
}: Props) {
  return (
    <header className={cn("border-b", className)}>
      <Container className="flex items-center justify-between py-8">
        {/* Левая часть */}
        <Link href="/">
          <div className="flex items-center gap-4">
            <Image src="/logo.png" alt="Logo" width={35} height={35} />
            <div>
              <h1 className="text-2xl font-black uppercase">Next Pizza</h1>
              <p className="text-sm leading-3 text-gray-400">
                вкусней уже некуда
              </p>
            </div>
          </div>
        </Link>

        {/* Центр - поиск */}
        {hasSearch && (
          <div className="mx-10 flex-1">
            <SearchInput />
          </div>
        )}

        {/* Правая часть */}
        <div className="flex items-center gap-4">
          <Button variant="outline" className="flex items-center gap-1">
            <User size={16} />
            Войти
          </Button>
          {hasCartButton && <CartButton />}
        </div>
      </Container>
    </header>
  );
}
