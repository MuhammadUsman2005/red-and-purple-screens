import Avatar from "@/components/shared/Avatar";
import VerifiedBadge from "@/components/shared/VerifiedBadge";
import { cn } from "@/lib/utils";

interface ChatListItemProps {
  name: string;
  message: string;
  time: string;
  verified?: "blue" | "green" | "red";
  hasUnread?: boolean;
  onClick?: () => void;
}

const ChatListItem = ({ 
  name, 
  message, 
  time, 
  verified = "blue", 
  hasUnread = false,
  onClick 
}: ChatListItemProps) => {
  return (
    <button 
      onClick={onClick}
      className="w-full flex items-center gap-3 py-3 px-4 hover:bg-white/5 transition-colors"
    >
      <Avatar size="md" />
      
      <div className="flex-1 text-left min-w-0">
        <div className="flex items-center gap-1.5">
          <span className="text-white font-semibold text-sm truncate">{name}</span>
          <VerifiedBadge variant={verified} size="sm" />
        </div>
        <p className="text-white/60 text-xs mt-0.5 truncate">{message}</p>
      </div>
      
      <div className="flex flex-col items-end gap-1">
        <span className="text-white/50 text-xs">{time}</span>
        {hasUnread && (
          <div className="w-2.5 h-2.5 rounded-full bg-white/40" />
        )}
      </div>
    </button>
  );
};

export default ChatListItem;
