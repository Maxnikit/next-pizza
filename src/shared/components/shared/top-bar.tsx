import { cn } from "@/shared/lib/utils";
import React from "react";
import { Categories, Container, SortPopup } from "@/shared/components/shared";
import { Category } from "@prisma/client";
// import { Category } from "@prisma/client";

interface Props {
  categories: Category[];
  className?: string;
}

export const TopBar: React.FC<Props> = ({ categories, className }) => {
  return (
    <div
      className={cn(
        "sticky top-0 z-10 bg-white py-5 shadow-lg shadow-black/5",
        className,
      )}
    >
      <Container className="flex items-center justify-between">
        {/* <Categories items={categories} /> */}
        <Categories cats={categories} />
        <SortPopup />
      </Container>
    </div>
  );
};
