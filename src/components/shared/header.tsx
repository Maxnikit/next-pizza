import { Container } from "@/components/shared";
import { Button } from "@/components/ui";

import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

interface Props {
  className?: string;
}

export function Header({ className }: Props) {
  return (
    <header className={cn("border border-b", className)}>
      <Container className="flex items-center justify-between py-8">
        {/* Левая часть */}
        <div className="flex items-center gap-4">
          <Image src="/logo.png" alt="Logo" width={35} height={35} />
          <div>
            <h1 className="text-2xl uppercase font-black">Next Pizza</h1>
            <p className="text-sm text-gray-400 leading-3">
              вкусней уже некуда
            </p>
          </div>
        </div>

        {/* Правая часть */}
        <div className="flex items-center gap-4">
          <Button variant="outline">Войти</Button>
          <Button>Регистрация</Button>
        </div>
      </Container>
    </header>
  );
}
