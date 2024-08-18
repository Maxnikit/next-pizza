import { cn } from "@/shared/lib/utils";
import Image from "next/image";

interface Props {
  src: string;
  alt: string;
  className?: string;
}

export const CartItemDetailsImage: React.FC<Props> = ({
  src,
  alt,
  className,
}) => {
  return (
    <Image
      alt={alt}
      width={60}
      height={60}
      className={cn("", className)}
      src={src}
    />
  );
};
