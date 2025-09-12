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
  xl: 48,
};

export function Spinner({ size = "lg", className }: SpinnerProps) {
  {
    /* <div className="animate-spin rounded-full h-8 w-8 border-t-6 border-r-8 border-l-16 border-b-2  border-primary"></div> */
  }
  return (
    <Loader2
      className={cn("animate-spin text-primary", className)}
      size={sizeMap[size]}
    />
  );
}
