import { CountIconButton } from "@/shared/components/shared";
import { cn } from "@/shared/lib/utils";

export type CountButtonProps = {
  value?: number;
  size?: "sm" | "lg";
  onClick?: (type: "plus" | "minus") => void;
  className?: string;
};

export function CountButton({
  className,
  onClick,
  value = 1,
  size = "sm",
}: CountButtonProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center justify-between gap-3",
        className,
      )}
    >
      <CountIconButton
        onClick={() => onClick?.("minus")}
        disabled={value === 1}
        size={size}
        type="minus"
      />

      <b className={size === "sm" ? "text-sm" : "text-md"}>{value}</b>

      <CountIconButton
        onClick={() => onClick?.("plus")}
        size={size}
        type="plus"
      />
    </div>
  );
}
