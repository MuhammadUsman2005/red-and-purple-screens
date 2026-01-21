import { useState } from "react";
import StatusBar from "@/components/shared/StatusBar";
import BottomTabBar from "@/components/shared/BottomTabBar";
import { ChevronUp, ChevronDown, DollarSign, Star } from "lucide-react";
import VerifiedBadge from "@/components/shared/VerifiedBadge";
import menteeAvatar from "@/assets/mentee-avatar.jpg";

interface RedMenteesScreenProps {
  onTabChange?: (tab: string) => void;
}

interface Mentee {
  name: string;
  hasStars?: boolean;
  verified?: "blue" | "red" | "green";
}

interface ClassSection {
  className: string;
  code: string;
  mentees: Mentee[];
  isExpanded?: boolean;
}

const classesData: ClassSection[] = [
  {
    className: "Class 10",
    code: "abcs10",
    isExpanded: true,
    mentees: [
      { name: "Ali", verified: "green", hasStars: true },
      { name: "Ali", verified: "green" },
      { name: "Ali", verified: "green", hasStars: true },
      { name: "Ali", verified: "green", hasStars: true },
      { name: "Ali", verified: "blue" },
      { name: "Ali", verified: "blue" },
      { name: "Ali", verified: "blue" },
      { name: "Ali", verified: "blue" },
      { name: "Ali" },
    ],
  },
  {
    className: "Class 9",
    code: "abcs09",
    isExpanded: false,
    mentees: [],
  },
  {
    className: "Class 8",
    code: "abcs08",
    isExpanded: false,
    mentees: [],
  },
  {
    className: "Class 6",
    code: "abcs06",
    isExpanded: false,
    mentees: [],
  },
];

const RedMenteesScreen = ({ onTabChange }: RedMenteesScreenProps) => {
  const [classes, setClasses] = useState(classesData);

  const toggleClass = (index: number) => {
    setClasses(prev => 
      prev.map((cls, i) => 
        i === index ? { ...cls, isExpanded: !cls.isExpanded } : cls
      )
    );
  };

  return (
    <div className="mobile-container gradient-red min-h-screen flex flex-col">
      <StatusBar theme="red" />
      
      <div className="flex-1 px-4 pb-24 overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between mt-4 mb-6">
          <h1 className="text-white text-3xl font-bold">MENTEES</h1>
          <div className="w-10 h-10 rounded-full bg-red-accent flex items-center justify-center">
            <DollarSign className="w-5 h-5 text-white" />
          </div>
        </div>

        {/* Classes List */}
        <div className="space-y-2">
          {classes.map((classSection, index) => (
            <div key={index}>
              {/* Class Header */}
              <button 
                onClick={() => toggleClass(index)}
                className="w-full flex items-center justify-between bg-black/30 px-4 py-3 rounded-lg"
              >
                <span className="text-white font-semibold">{classSection.className}</span>
                <div className="flex items-center gap-2">
                  <span className="text-white/70 text-sm">{classSection.code}</span>
                  {classSection.isExpanded ? (
                    <ChevronUp className="w-5 h-5 text-white" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-white" />
                  )}
                </div>
              </button>

              {/* Mentees */}
              {classSection.isExpanded && classSection.mentees.length > 0 && (
                <div className="bg-black/20 rounded-b-lg overflow-hidden -mt-1">
                  {classSection.mentees.map((mentee, menteeIndex) => (
                    <div 
                      key={menteeIndex}
                      className="flex items-center justify-between px-4 py-3 border-t border-white/10"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full overflow-hidden">
                          <img 
                            src={menteeAvatar} 
                            alt={mentee.name} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="text-white font-medium">{mentee.name}</span>
                          {mentee.verified && (
                            <VerifiedBadge variant={mentee.verified} size="sm" />
                          )}
                        </div>
                      </div>
                      {mentee.hasStars && (
                        <Star className="w-5 h-5 text-red-accent fill-red-accent" />
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      
      <BottomTabBar theme="red" activeTab="Mentees" onTabChange={onTabChange} />
    </div>
  );
};

export default RedMenteesScreen;
