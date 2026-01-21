import StatusBar from "@/components/shared/StatusBar";
import BottomTabBar from "@/components/shared/BottomTabBar";
import { Settings, Edit3, Grid, Bookmark, Users } from "lucide-react";
import VerifiedBadge from "@/components/shared/VerifiedBadge";

interface PurpleProfileScreenProps {
  onTabChange?: (tab: string) => void;
}

const PurpleProfileScreen = ({ onTabChange }: PurpleProfileScreenProps) => {
  return (
    <div className="mobile-container gradient-purple min-h-screen flex flex-col">
      <StatusBar theme="purple" />
      
      <div className="flex-1 px-4 pb-24 overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between mt-4 mb-6">
          <h1 className="text-white text-2xl font-bold">@supporter_ali</h1>
          <div className="flex items-center gap-3">
            <Edit3 className="w-5 h-5 text-white" />
            <Settings className="w-5 h-5 text-white" />
          </div>
        </div>

        {/* Profile Info */}
        <div className="flex items-center gap-6 mb-6">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
            <span className="text-white font-bold text-2xl">A</span>
          </div>
          <div className="flex-1 flex justify-around">
            <div className="text-center">
              <p className="text-white font-bold text-xl">18</p>
              <p className="text-white/60 text-xs">Posts</p>
            </div>
            <div className="text-center">
              <p className="text-white font-bold text-xl">856</p>
              <p className="text-white/60 text-xs">Followers</p>
            </div>
            <div className="text-center">
              <p className="text-white font-bold text-xl">234</p>
              <p className="text-white/60 text-xs">Following</p>
            </div>
          </div>
        </div>

        {/* Bio */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-white font-semibold">Ali Supporter</span>
            <VerifiedBadge variant="blue" size="sm" />
          </div>
          <p className="text-white/70 text-sm">
            PPP Supporter | Community Builder | Making a difference 🌟
          </p>
          <p className="text-white/70 text-sm">Karachi, Pakistan 📍</p>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 mb-6">
          <button className="flex-1 bg-purple-accent text-white font-semibold py-2.5 rounded-lg">
            Edit Profile
          </button>
          <button className="flex-1 bg-white/10 text-white font-semibold py-2.5 rounded-lg">
            Share Profile
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-white/20 mb-4">
          <button className="flex-1 py-3 border-b-2 border-white">
            <Grid className="w-5 h-5 text-white mx-auto" />
          </button>
          <button className="flex-1 py-3 border-b-2 border-transparent">
            <Bookmark className="w-5 h-5 text-white/50 mx-auto" />
          </button>
          <button className="flex-1 py-3 border-b-2 border-transparent">
            <Users className="w-5 h-5 text-white/50 mx-auto" />
          </button>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-3 gap-1">
          {[...Array(9)].map((_, i) => (
            <div 
              key={i} 
              className="aspect-square bg-gradient-to-br from-purple-900/50 to-purple-800/30 rounded-sm"
            />
          ))}
        </div>
      </div>
      
      <BottomTabBar theme="purple" activeTab="Profile" onTabChange={onTabChange} />
    </div>
  );
};

export default PurpleProfileScreen;
