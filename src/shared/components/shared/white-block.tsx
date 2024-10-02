import { Title } from "@/shared/components/shared/title";
import { cn } from "@/shared/lib";
import React from "react";

type Props = {
  children: React.ReactNode;
  title?: string;
  endAdornment?: React.ReactNode;
  className?: string;
  contentClassName?: string;
};

export function WhiteBlock({
  title,
  className,
  contentClassName,
  endAdornment,
  children,
}: Props) {
  return (
    <div className={cn("rounded-3xl bg-white", className)}>
      {title && (
        <div className="flex items-center justify-between border-b border-gray-100 p-5 px-7">
          <Title text={title} size="sm" className="font-bold" />
          {endAdornment}
        </div>
      )}

      <div className={cn("px-5 py-4", contentClassName)}>{children}</div>
    </div>
  );
}
