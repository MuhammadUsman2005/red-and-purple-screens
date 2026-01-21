import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface VerifiedBadgeProps {
  variant?: "blue" | "green" | "red";
  size?: "sm" | "md";
}

const VerifiedBadge = ({ variant = "blue", size = "sm" }: VerifiedBadgeProps) => {
  const sizeClasses = size === "sm" ? "w-4 h-4" : "w-5 h-5";
  const iconSize = size === "sm" ? "w-2.5 h-2.5" : "w-3 h-3";
  
  const bgColor = {
    blue: "bg-verified",
    green: "bg-online",
    red: "bg-red-accent",
  }[variant];
  
  return (
    <span className={cn(
      "inline-flex items-center justify-center rounded-full",
      sizeClasses,
      bgColor
    )}>
      <Check className={cn("text-white", iconSize)} strokeWidth={3} />
    </span>
  );
};

export default VerifiedBadge;
