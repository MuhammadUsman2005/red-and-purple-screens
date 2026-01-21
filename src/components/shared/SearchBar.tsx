import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

interface SearchBarProps {
  theme?: "red" | "purple";
  placeholder?: string;
}

const SearchBar = ({ theme = "red", placeholder = "Search" }: SearchBarProps) => {
  const isRed = theme === "red";
  
  return (
    <div className={cn(
      "flex items-center gap-2 px-4 py-2.5 rounded-full",
      isRed ? "bg-white/20" : "bg-white/15"
    )}>
      <Search className="w-4 h-4 text-white/60" />
      <input
        type="text"
        placeholder={placeholder}
        className="bg-transparent text-white placeholder-white/60 text-sm outline-none flex-1"
      />
    </div>
  );
};

export default SearchBar;
