import StatusBar from "@/components/shared/StatusBar";
import BottomTabBar from "@/components/shared/BottomTabBar";
import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal, Search, Video } from "lucide-react";
import mountainLandscape from "@/assets/mountain-landscape.jpg";
import wanderlustAvatar from "@/assets/wanderlust-avatar.jpg";
import ecowearModel from "@/assets/ecowear-model.jpg";

interface RedHomeScreenProps {
  onTabChange?: (tab: string) => void;
}

const RedHomeScreen = ({ onTabChange }: RedHomeScreenProps) => {
  return (
    <div className="mobile-container gradient-red min-h-screen flex flex-col">
      <StatusBar theme="red" />
      
      <div className="flex-1 overflow-y-auto pb-24">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
              <Video className="w-5 h-5 text-white" />
            </div>
            <span className="text-white text-2xl font-bold">ITVE</span>
          </div>
          <div className="flex items-center gap-4">
            <Search className="w-6 h-6 text-white" />
            <div className="relative">
              <Video className="w-6 h-6 text-white" />
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-accent rounded-full" />
            </div>
          </div>
        </div>

        {/* Post */}
        <div className="mt-2">
          {/* Post Header */}
          <div className="flex items-center justify-between px-4 py-2">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <img 
                  src={wanderlustAvatar} 
                  alt="User avatar" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <span className="text-white font-semibold text-sm">wanderlust_anna</span>
                  <div className="w-4 h-4 rounded-full bg-online flex items-center justify-center">
                    <span className="text-white text-[8px]">✓</span>
                  </div>
                </div>
                <span className="text-white/60 text-xs">2h ago</span>
              </div>
            </div>
            <MoreHorizontal className="w-5 h-5 text-white" />
          </div>

          {/* Post Image */}
          <div className="w-full aspect-square bg-muted">
            <img 
              src={mountainLandscape} 
              alt="Mountain landscape" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Post Actions */}
          <div className="px-4 py-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Heart className="w-6 h-6 text-white" />
                <MessageCircle className="w-6 h-6 text-white" />
                <Send className="w-6 h-6 text-white" />
              </div>
              <Bookmark className="w-6 h-6 text-white" />
            </div>
            
            <p className="text-white font-semibold mt-3">1,204 likes</p>
            <p className="text-white text-sm mt-1">
              <span className="font-semibold">wanderlust_anna</span>{" "}
              Woke up to this incredible view. Feeling so grateful for moments like these. ✨
            </p>
            <p className="text-white/60 text-sm mt-1">View all 88 comments</p>
          </div>
        </div>

        {/* Sponsored Post */}
        <div className="mt-2">
          <div className="flex items-center justify-between px-4 py-2">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-amber-600 flex items-center justify-center">
                <span className="text-white font-semibold text-sm">E</span>
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <span className="text-white font-semibold text-sm">EcoWear</span>
                  <div className="w-4 h-4 rounded-full bg-red-accent flex items-center justify-center">
                    <span className="text-white text-[8px]">✓</span>
                  </div>
                </div>
                <span className="text-white/60 text-xs">Sponsored</span>
              </div>
            </div>
            <MoreHorizontal className="w-5 h-5 text-white" />
          </div>
          
          <div className="w-full aspect-square bg-muted">
            <img 
              src={ecowearModel} 
              alt="EcoWear sponsored content" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      
      <BottomTabBar theme="red" activeTab="Home" onTabChange={onTabChange} />
    </div>
  );
};

export default RedHomeScreen;
