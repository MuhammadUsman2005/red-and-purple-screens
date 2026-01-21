import { cn } from "@/lib/utils";

interface AvatarProps {
  src?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const Avatar = ({ src, size = "md", className }: AvatarProps) => {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-11 h-11",
    lg: "w-14 h-14",
  }[size];
  
  return (
    <div 
      className={cn(
        "rounded-full overflow-hidden flex-shrink-0 bg-muted",
        sizeClasses,
        className
      )}
    >
      {src ? (
        <img src={src} alt="Avatar" className="w-full h-full object-cover" />
      ) : (
        <div className="w-full h-full bg-muted-foreground/30" />
      )}
    </div>
  );
};

export default Avatar;
