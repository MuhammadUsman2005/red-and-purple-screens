import { Signal, Wifi, BatteryFull } from "lucide-react";

interface StatusBarProps {
  theme?: "red" | "purple";
}

const StatusBar = ({ theme = "red" }: StatusBarProps) => {
  return (
    <div className="flex items-center justify-between px-6 py-2 text-white text-sm font-medium">
      <span>11:39 am</span>
      <div className="flex items-center gap-1">
        <Signal className="w-4 h-4" />
        <Wifi className="w-4 h-4" />
        <BatteryFull className="w-5 h-5" />
      </div>
    </div>
  );
};

export default StatusBar;
