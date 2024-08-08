import { cn } from "@/shared/lib/utils";
import Image from "next/image";
import React from "react";

type Props = {
  className?: string;
  src: string;
  alt: string;
};

export function ProductImage({ src, className, alt }: Props) {
  return (
    <div
      className={cn(
        "relative flex w-full flex-1 items-center justify-center",
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        // TODO: remove hardcoded size. Right now it wont work without it
        priority={true}
        width={350}
        height={350}
        className={cn("relative left-2 top-2 z-10 transition-all duration-300")}
      />
    </div>
  );
}
