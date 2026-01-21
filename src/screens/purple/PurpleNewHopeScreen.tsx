import { ArrowLeft } from "lucide-react";
import StatusBar from "@/components/shared/StatusBar";

interface PurpleNewHopeScreenProps {
  onBack?: () => void;
}

const PurpleNewHopeScreen = ({ onBack }: PurpleNewHopeScreenProps) => {
  return (
    <div className="mobile-container gradient-purple min-h-screen flex flex-col">
      <StatusBar theme="purple" />
      
      {/* Header */}
      <div className="flex items-center gap-3 px-4 py-3">
        <button 
          onClick={onBack}
          className="text-white"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-white text-xl font-semibold">New Hope</h1>
      </div>
      
      <div className="flex-1 px-4">
        {/* Profile Image */}
        <div className="flex justify-center my-6">
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-purple-accent/30">
            <div className="w-full h-full bg-gradient-to-br from-purple-surface to-purple-dark flex items-center justify-center">
              <span className="text-white/40 text-4xl">👤</span>
            </div>
          </div>
        </div>
        
        {/* Form Fields */}
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <label className="text-white font-medium w-20">Name:</label>
            <input
              type="text"
              placeholder="Enter the name for the support"
              className="flex-1 bg-transparent border-b border-white/30 text-white/60 placeholder-white/40 py-2 outline-none text-sm"
            />
          </div>
          
          <div className="flex items-center gap-4">
            <label className="text-white font-medium w-20">Details:</label>
            <input
              type="text"
              placeholder="Enter the details for this program"
              className="flex-1 bg-transparent border-b border-white/30 text-white/60 placeholder-white/40 py-2 outline-none text-sm"
            />
          </div>
          
          <div className="flex items-center gap-4">
            <label className="text-white font-medium text-sm">Type of Donation:</label>
            <div className="flex-1 border-b border-white/30 py-2" />
          </div>
          
          <div className="flex items-center gap-4">
            <label className="text-white font-medium w-20">Fields:</label>
            <div className="flex-1 border-b border-white/30 py-2" />
          </div>
          
          <div className="flex items-center gap-4">
            <label className="text-white font-medium w-20">Amount:</label>
            <span className="text-white/80">Rs. 100,000</span>
          </div>
        </div>
        
        {/* Pay Now Button */}
        <div className="mt-8">
          <button className="w-full py-4 rounded-full bg-purple-accent text-white font-bold text-xl shadow-lg shadow-purple-accent/30">
            Pay Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default PurpleNewHopeScreen;
