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
    <div className="relative flex h-[60px] w-[60px]">
      <Image
        alt={alt}
        sizes="auto"
        fill
        className={cn("", className)}
        src={src}
      />
    </div>
  );
};
