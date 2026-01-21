import { Home, MessageCircle, Building2, Users, User } from "lucide-react";
import { cn } from "@/lib/utils";

interface TabItem {
  icon: React.ReactNode;
  label: string;
  isActive?: boolean;
}

interface BottomTabBarProps {
  theme?: "red" | "purple";
  activeTab?: string;
  onTabChange?: (tab: string) => void;
  tabs?: TabItem[];
}

const BottomTabBar = ({ theme = "red", activeTab = "Messages", onTabChange }: BottomTabBarProps) => {
  const isRed = theme === "red";
  
  const redTabs = [
    { id: "Home", icon: Home, label: "Home" },
    { id: "Messages", icon: MessageCircle, label: "Messages" },
    { id: "Institutes", icon: Building2, label: "Institutes" },
    { id: "Mentees", icon: Users, label: "Mentees" },
    { id: "Profile", icon: User, label: "Profile" },
  ];
  
  const purpleTabs = [
    { id: "Home", icon: Home, label: "Home" },
    { id: "Messages", icon: MessageCircle, label: "Messages" },
    { id: "Post", icon: Building2, label: "Post" },
    { id: "Hope", icon: Users, label: "Hope" },
    { id: "Profile", icon: User, label: "Profile" },
  ];
  
  const tabs = isRed ? redTabs : purpleTabs;
  
  return (
    <div 
      className={cn(
        "fixed bottom-0 left-0 right-0 z-50",
        isRed ? "gradient-red" : "gradient-purple"
      )}
      style={{ maxWidth: "430px", margin: "0 auto" }}
    >
      <div className="flex items-center justify-around py-2 pb-4 safe-area-bottom">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange?.(tab.id)}
              className={cn(
                "flex flex-col items-center gap-1 px-3 py-1 rounded-lg transition-all",
                isActive && isRed && "bg-white/10",
                isActive && !isRed && "bg-white/10"
              )}
            >
              <div className={cn(
                "p-1.5 rounded-lg",
                isActive && isRed && "bg-red-accent",
                isActive && !isRed && "bg-purple-accent"
              )}>
                <Icon 
                  className={cn(
                    "w-5 h-5",
                    isActive ? "text-white" : "text-white/70"
                  )} 
                />
              </div>
              <span className={cn(
                "text-[10px] font-medium",
                isActive ? "text-white" : "text-white/70"
              )}>
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default BottomTabBar;
