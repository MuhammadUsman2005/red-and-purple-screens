import { ArrowLeft, Plus, ChevronDown, Check } from "lucide-react";
import StatusBar from "@/components/shared/StatusBar";
import BottomTabBar from "@/components/shared/BottomTabBar";

interface HopeCardProps {
  title: string;
  isExpanded?: boolean;
  children?: React.ReactNode;
}

const HopeCard = ({ title, isExpanded, children }: HopeCardProps) => {
  return (
    <div className="bg-purple-surface/50 rounded-2xl overflow-hidden mb-4 border border-white/10">
      <div className="px-4 py-3 flex items-center justify-center">
        <span className="text-purple-accent font-semibold text-lg">{title}</span>
      </div>
      {isExpanded && children}
    </div>
  );
};

interface PurpleGiftOfHopeScreenProps {
  onTabChange?: (tab: string) => void;
  onAddNew?: () => void;
}

const PurpleGiftOfHopeScreen = ({ onTabChange, onAddNew }: PurpleGiftOfHopeScreenProps) => {
  return (
    <div className="mobile-container gradient-purple min-h-screen flex flex-col">
      <StatusBar theme="purple" />
      
      <div className="flex-1 px-4 pb-24">
        <h1 className="text-white text-2xl font-bold tracking-wide mt-4 mb-4">GIFT OF HOPE</h1>
        
        {/* Add New Hope Button */}
        <button 
          onClick={onAddNew}
          className="w-full flex items-center justify-center gap-3 py-4 rounded-full bg-purple-surface/60 border border-white/20 mb-6"
        >
          <span className="text-white font-bold tracking-widest text-lg">ADD NEW HOPE</span>
          <div className="w-8 h-8 rounded-full bg-purple-accent flex items-center justify-center">
            <Plus className="w-5 h-5 text-white" />
          </div>
        </button>
        
        {/* Benazir Support Card - Expanded */}
        <HopeCard title="Benazir Support" isExpanded>
          <div className="px-4 pb-4">
            {/* Amount Row */}
            <div className="flex justify-between text-white/80 text-sm mb-2">
              <span>Amount</span>
              <span>100 M/ 39 M</span>
            </div>
            
            {/* Name */}
            <p className="text-white font-semibold mb-2">Ehsan Bhutto</p>
            
            {/* Course Row */}
            <div className="flex justify-between text-white/70 text-sm mb-4">
              <span>Marketing Course</span>
              <span>50%</span>
              <span>15000</span>
            </div>
            
            {/* Table */}
            <div className="bg-purple-dark/50 rounded-lg overflow-hidden border border-white/10">
              <div className="grid grid-cols-5 text-white/60 text-xs py-2 border-b border-white/10">
                <span className="text-center">MONTH</span>
                <span className="text-center">A</span>
                <span className="text-center">A</span>
                <span className="text-center">A</span>
                <span className="text-center">T</span>
              </div>
              <div className="grid grid-cols-5 text-white text-sm py-2 border-b border-white/10">
                <span className="text-center">1</span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="grid grid-cols-5 text-white text-sm py-2">
                <span className="text-center">2</span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="text-right pr-4 py-2 text-white font-semibold">
                <span className="text-xs mr-2">TOTAL</span>
                80%
              </div>
            </div>
            
            {/* Grade and Job */}
            <div className="flex justify-between items-center mt-4 text-white/80 text-sm">
              <span>Grade: A</span>
              <div className="flex items-center gap-2">
                <span>Job</span>
                <Check className="w-4 h-4" />
              </div>
            </div>
            
            {/* Names with toggles */}
            <div className="mt-3 space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-white font-medium">Ali Raza</span>
                <div className="w-10 h-5 bg-purple-accent rounded-full relative">
                  <div className="absolute right-0.5 top-0.5 w-4 h-4 bg-white rounded-full" />
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white font-medium">Mohammad Zia</span>
                <div className="w-10 h-5 bg-white/30 rounded-full relative">
                  <div className="absolute left-0.5 top-0.5 w-4 h-4 bg-white rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </HopeCard>
        
        {/* Other Cards */}
        <HopeCard title="Bilawal Youth" />
        <HopeCard title="PPP Support" />
      </div>
      
      <BottomTabBar theme="purple" activeTab="Hope" onTabChange={onTabChange} />
    </div>
  );
};

export default PurpleGiftOfHopeScreen;
