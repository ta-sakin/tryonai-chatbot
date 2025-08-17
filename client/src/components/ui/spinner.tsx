import { cn } from "@/lib/utils"; // ShadCN utility for className merging
import { Loader2 } from "lucide-react";

type SpinnerProps = {
  size?: "sm" | "md" | "lg";
  className?: string;
};

const sizeMap = {
  sm: 12,
  md: 24,
  lg: 36,
};

export function Spinner({ size = "md", className }: SpinnerProps) {
  return (
    <Loader2 className={cn("animate-spin", className)} size={sizeMap[size]} />
  );
}
