import StatusBar from "@/components/shared/StatusBar";
import BottomTabBar from "@/components/shared/BottomTabBar";
import { Image, Video, MapPin, Users, AtSign } from "lucide-react";

interface PurplePostScreenProps {
  onTabChange?: (tab: string) => void;
}

const PurplePostScreen = ({ onTabChange }: PurplePostScreenProps) => {
  return (
    <div className="mobile-container gradient-purple min-h-screen flex flex-col">
      <StatusBar theme="purple" />
      
      <div className="flex-1 px-4 pb-24 overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between mt-4 mb-6">
          <h1 className="text-white text-3xl font-bold">Create Post</h1>
          <button className="bg-purple-accent text-white font-semibold px-6 py-2 rounded-full">
            Post
          </button>
        </div>

        {/* User Info */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
            <span className="text-white font-semibold">A</span>
          </div>
          <div>
            <p className="text-white font-semibold">Ali Khan</p>
            <p className="text-white/60 text-sm">Sharing with Everyone</p>
          </div>
        </div>

        {/* Post Input */}
        <div className="bg-white/5 rounded-2xl p-4 mb-4">
          <textarea 
            placeholder="What's on your mind?"
            className="w-full bg-transparent text-white placeholder:text-white/50 outline-none resize-none min-h-[120px]"
          />
        </div>

        {/* Add to Post */}
        <div className="bg-white/5 rounded-2xl p-4">
          <p className="text-white font-semibold mb-4">Add to your post</p>
          <div className="flex items-center gap-6">
            <button className="flex flex-col items-center gap-1">
              <div className="w-10 h-10 rounded-full bg-online/20 flex items-center justify-center">
                <Image className="w-5 h-5 text-online" />
              </div>
              <span className="text-white/60 text-xs">Photo</span>
            </button>
            <button className="flex flex-col items-center gap-1">
              <div className="w-10 h-10 rounded-full bg-red-accent/20 flex items-center justify-center">
                <Video className="w-5 h-5 text-red-accent" />
              </div>
              <span className="text-white/60 text-xs">Video</span>
            </button>
            <button className="flex flex-col items-center gap-1">
              <div className="w-10 h-10 rounded-full bg-purple-accent/20 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-purple-accent" />
              </div>
              <span className="text-white/60 text-xs">Location</span>
            </button>
            <button className="flex flex-col items-center gap-1">
              <div className="w-10 h-10 rounded-full bg-verified/20 flex items-center justify-center">
                <Users className="w-5 h-5 text-verified" />
              </div>
              <span className="text-white/60 text-xs">Tag</span>
            </button>
            <button className="flex flex-col items-center gap-1">
              <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center">
                <AtSign className="w-5 h-5 text-amber-500" />
              </div>
              <span className="text-white/60 text-xs">Mention</span>
            </button>
          </div>
        </div>
      </div>
      
      <BottomTabBar theme="purple" activeTab="Post" onTabChange={onTabChange} />
    </div>
  );
};

export default PurplePostScreen;
