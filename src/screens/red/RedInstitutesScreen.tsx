import { useState } from "react";
import StatusBar from "@/components/shared/StatusBar";
import BottomTabBar from "@/components/shared/BottomTabBar";
import { Plus, ChevronUp, ChevronDown, DollarSign } from "lucide-react";
import RedAddInstituteModal from "@/components/red/RedAddInstituteModal";

interface RedInstitutesScreenProps {
  onTabChange?: (tab: string) => void;
}

interface Institute {
  name: string;
  code: string;
  classes?: { name: string; code: string }[];
  isExpanded?: boolean;
}

const institutesData: Institute[] = [
  {
    name: "ABC School",
    code: "abcs",
    classes: [
      { name: "Class 10", code: "abcs10" },
      { name: "Class 9", code: "abcs09" },
      { name: "Class 8", code: "abcs08" },
    ],
    isExpanded: true,
  },
  {
    name: "ABC College",
    code: "abcc",
    classes: [
      { name: "Pre Engineering 12", code: "abcceng2" },
      { name: "Pre Medical 12", code: "abccmed2" },
      { name: "Commerce 12", code: "abcccom2" },
    ],
    isExpanded: true,
  },
];

const RedInstitutesScreen = ({ onTabChange }: RedInstitutesScreenProps) => {
  const [institutes, setInstitutes] = useState(institutesData);
  const [showAddModal, setShowAddModal] = useState(false);

  const toggleInstitute = (index: number) => {
    setInstitutes(prev => 
      prev.map((inst, i) => 
        i === index ? { ...inst, isExpanded: !inst.isExpanded } : inst
      )
    );
  };

  return (
    <div className="mobile-container gradient-red min-h-screen flex flex-col">
      <StatusBar theme="red" />
      
      <div className="flex-1 px-4 pb-24 overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between mt-4 mb-6">
          <h1 className="text-white text-3xl font-bold">INSTITUTES</h1>
          <div className="w-10 h-10 rounded-full bg-red-accent flex items-center justify-center">
            <DollarSign className="w-5 h-5 text-white" />
          </div>
        </div>
        
        {/* School/Colleges Header */}
        <div className="flex items-center justify-between bg-white/10 rounded-full px-5 py-3 mb-4">
          <span className="text-white font-bold text-lg">SCHOOL/COLLEGES</span>
          <button 
            onClick={() => setShowAddModal(true)}
            className="w-8 h-8 rounded-full bg-red-accent flex items-center justify-center"
          >
            <Plus className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Institutes List */}
        <div className="space-y-2">
          {institutes.map((institute, index) => (
            <div key={index}>
              {/* Institute Header */}
              <button 
                onClick={() => toggleInstitute(index)}
                className="w-full flex items-center justify-between bg-black/30 px-4 py-3 rounded-t-lg"
              >
                <span className="text-white font-semibold">{institute.name}</span>
                <div className="flex items-center gap-2">
                  <span className="text-white/70 text-sm">{institute.code}</span>
                  {institute.isExpanded ? (
                    <ChevronUp className="w-5 h-5 text-white" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-white" />
                  )}
                </div>
              </button>

              {/* Classes */}
              {institute.isExpanded && institute.classes && (
                <div className="bg-black/20 rounded-b-lg overflow-hidden">
                  {institute.classes.map((cls, clsIndex) => (
                    <div 
                      key={clsIndex}
                      className="flex items-center justify-between px-4 py-3 border-t border-white/10"
                    >
                      <span className="text-white font-medium">{cls.name}</span>
                      <span className="text-white/70 text-sm">{cls.code}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      
      <BottomTabBar theme="red" activeTab="Institutes" onTabChange={onTabChange} />
      
      {showAddModal && (
        <RedAddInstituteModal onClose={() => setShowAddModal(false)} />
      )}
    </div>
  );
};

export default RedInstitutesScreen;
