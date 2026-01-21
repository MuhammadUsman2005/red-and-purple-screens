import { ArrowLeft, MoreHorizontal, Camera, Paperclip, Send } from "lucide-react";
import StatusBar from "@/components/shared/StatusBar";
import Avatar from "@/components/shared/Avatar";
import VerifiedBadge from "@/components/shared/VerifiedBadge";

interface PurpleChatConversationScreenProps {
  contactName?: string;
  onBack?: () => void;
}

const PurpleChatConversationScreen = ({ 
  contactName = "Ali Akbar", 
  onBack 
}: PurpleChatConversationScreenProps) => {
  return (
    <div className="mobile-container gradient-purple min-h-screen flex flex-col">
      <StatusBar theme="purple" />
      
      {/* Header */}
      <div className="flex items-center gap-3 px-4 py-3">
        <button 
          onClick={onBack}
          className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center"
        >
          <ArrowLeft className="w-4 h-4 text-white" />
        </button>
        
        <Avatar size="md" />
        
        <div className="flex-1">
          <div className="flex items-center gap-1.5">
            <span className="text-white font-semibold">{contactName}</span>
            <VerifiedBadge variant="blue" />
          </div>
          <p className="text-white/60 text-xs">Online</p>
        </div>
        
        <button className="text-white/70">
          <MoreHorizontal className="w-6 h-6" />
        </button>
      </div>
      
      {/* Messages */}
      <div className="flex-1 px-4 py-4 overflow-y-auto">
        <p className="text-center text-white/50 text-xs mb-4">Today</p>
        
        {/* Received message */}
        <div className="flex justify-start mb-3">
          <div className="bg-white/95 rounded-2xl rounded-tl-sm px-4 py-2 max-w-[70%]">
            <p className="text-purple-dark text-sm">Hello world</p>
          </div>
        </div>
        
        {/* Sent message */}
        <div className="flex justify-end mb-3">
          <div className="bg-white/20 rounded-2xl rounded-tr-sm px-4 py-2 max-w-[70%]">
            <p className="text-white text-sm">Hello world</p>
          </div>
        </div>
      </div>
      
      {/* Input */}
      <div className="px-4 py-3 bg-black/20">
        <div className="flex items-center gap-3">
          <button className="text-white/60">
            <Camera className="w-6 h-6" />
          </button>
          
          <div className="flex-1 flex items-center gap-2 bg-white/10 rounded-full px-4 py-2.5">
            <input
              type="text"
              placeholder="Type a message..."
              className="bg-transparent text-white placeholder-white/50 text-sm outline-none flex-1"
            />
            <button className="text-white/60">
              <Paperclip className="w-5 h-5" />
            </button>
          </div>
          
          <button className="text-purple-accent">
            <Send className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PurpleChatConversationScreen;
