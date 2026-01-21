import { ChevronLeft, ChevronDown } from "lucide-react";

interface RedAddInstituteModalProps {
  onClose: () => void;
}

const RedAddInstituteModal = ({ onClose }: RedAddInstituteModalProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      
      <div 
        className="relative w-full max-w-[430px] bg-gradient-to-b from-[#1a1a2e] to-[#0f0f1a] rounded-t-3xl p-6"
        style={{ maxHeight: "80vh" }}
      >
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <button onClick={onClose} className="text-white">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <h2 className="text-white text-xl font-bold">Add Institute</h2>
        </div>

        {/* Form */}
        <div className="space-y-4">
          {/* Type of Institute */}
          <div className="bg-white/10 rounded-full px-5 py-3 flex items-center justify-between">
            <span className="text-white/70">Type of Institute</span>
            <ChevronDown className="w-5 h-5 text-white" />
          </div>

          {/* Name of Institute */}
          <div className="bg-white/10 rounded-full px-5 py-3">
            <input 
              type="text"
              placeholder="Name of Institute"
              className="w-full bg-transparent text-white placeholder:text-white/70 outline-none"
            />
          </div>

          {/* Location */}
          <div className="mt-6">
            <h3 className="text-white font-semibold mb-3">Location</h3>
            <div className="w-full h-40 rounded-xl overflow-hidden bg-gray-700">
              {/* Map placeholder */}
              <div className="w-full h-full bg-gradient-to-b from-gray-600 to-gray-800 flex items-center justify-center">
                <span className="text-white/50 text-sm">Map View</span>
              </div>
            </div>
          </div>

          {/* Add Institute Button */}
          <button className="w-full mt-6 bg-red-accent hover:bg-red-600 text-white font-semibold py-4 rounded-full transition-colors">
            Add Institute
          </button>
        </div>
      </div>
    </div>
  );
};

export default RedAddInstituteModal;
