import { useState } from "react";

// Red Theme Screens
import RedHomeScreen from "@/screens/red/RedHomeScreen";
import RedChatsScreen from "@/screens/red/RedChatsScreen";
import RedChatConversationScreen from "@/screens/red/RedChatConversationScreen";
import RedInstitutesScreen from "@/screens/red/RedInstitutesScreen";
import RedMenteesScreen from "@/screens/red/RedMenteesScreen";
import RedProfileScreen from "@/screens/red/RedProfileScreen";

// Purple Theme Screens
import PurpleHomeScreen from "@/screens/purple/PurpleHomeScreen";
import PurpleChatsScreen from "@/screens/purple/PurpleChatsScreen";
import PurpleChatConversationScreen from "@/screens/purple/PurpleChatConversationScreen";
import PurplePostScreen from "@/screens/purple/PurplePostScreen";
import PurpleGiftOfHopeScreen from "@/screens/purple/PurpleGiftOfHopeScreen";
import PurpleNewHopeScreen from "@/screens/purple/PurpleNewHopeScreen";
import PurpleProfileScreen from "@/screens/purple/PurpleProfileScreen";

type Screen = 
  // Red theme screens
  | "red-home"
  | "red-chats" 
  | "red-conversation" 
  | "red-institutes"
  | "red-mentees"
  | "red-profile"
  // Purple theme screens
  | "purple-home"
  | "purple-chats" 
  | "purple-conversation" 
  | "purple-post"
  | "purple-hope" 
  | "purple-new-hope"
  | "purple-profile";

const Index = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>("red-chats");
  const [selectedContact, setSelectedContact] = useState("Ali Akbar");
  const [currentTheme, setCurrentTheme] = useState<"red" | "purple">("red");

  const handleChatSelect = (name: string) => {
    setSelectedContact(name);
    if (currentTheme === "red") {
      setCurrentScreen("red-conversation");
    } else {
      setCurrentScreen("purple-conversation");
    }
  };

  const handleBack = () => {
    if (currentScreen === "red-conversation") {
      setCurrentScreen("red-chats");
    } else if (currentScreen === "purple-conversation") {
      setCurrentScreen("purple-chats");
    } else if (currentScreen === "purple-new-hope") {
      setCurrentScreen("purple-hope");
    }
  };

  const handleRedTabChange = (tab: string) => {
    switch (tab) {
      case "Home":
        setCurrentScreen("red-home");
        break;
      case "Messages":
        setCurrentScreen("red-chats");
        break;
      case "Institutes":
        setCurrentScreen("red-institutes");
        break;
      case "Mentees":
        setCurrentScreen("red-mentees");
        break;
      case "Profile":
        setCurrentScreen("red-profile");
        break;
    }
  };

  const handlePurpleTabChange = (tab: string) => {
    switch (tab) {
      case "Home":
        setCurrentScreen("purple-home");
        break;
      case "Messages":
        setCurrentScreen("purple-chats");
        break;
      case "Post":
        setCurrentScreen("purple-post");
        break;
      case "Hope":
        setCurrentScreen("purple-hope");
        break;
      case "Profile":
        setCurrentScreen("purple-profile");
        break;
    }
  };

  const handleTabChange = (tab: string) => {
    if (currentTheme === "red") {
      handleRedTabChange(tab);
    } else {
      handlePurpleTabChange(tab);
    }
  };

  const handleAddNewHope = () => {
    setCurrentScreen("purple-new-hope");
  };

  // Theme switcher component
  const ThemeSwitcher = () => (
    <div className="fixed top-4 right-4 z-[100] flex gap-2">
      <button
        onClick={() => {
          setCurrentTheme("red");
          setCurrentScreen("red-chats");
        }}
        className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
          currentTheme === "red" 
            ? "bg-red-accent text-white" 
            : "bg-white/20 text-white/70 hover:bg-white/30"
        }`}
      >
        RED
      </button>
      <button
        onClick={() => {
          setCurrentTheme("purple");
          setCurrentScreen("purple-chats");
        }}
        className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
          currentTheme === "purple" 
            ? "bg-purple-accent text-white" 
            : "bg-white/20 text-white/70 hover:bg-white/30"
        }`}
      >
        PURPLE
      </button>
    </div>
  );

  return (
    <div className="min-h-screen bg-black flex justify-center">
      <ThemeSwitcher />
      
      {/* RED Theme Screens */}
      {currentScreen === "red-home" && (
        <RedHomeScreen 
          onTabChange={handleTabChange}
        />
      )}
      
      {currentScreen === "red-chats" && (
        <RedChatsScreen 
          onChatSelect={handleChatSelect}
          onTabChange={handleTabChange}
        />
      )}
      
      {currentScreen === "red-conversation" && (
        <RedChatConversationScreen 
          contactName={selectedContact}
          onBack={handleBack}
        />
      )}
      
      {currentScreen === "red-institutes" && (
        <RedInstitutesScreen 
          onTabChange={handleTabChange}
        />
      )}
      
      {currentScreen === "red-mentees" && (
        <RedMenteesScreen 
          onTabChange={handleTabChange}
        />
      )}
      
      {currentScreen === "red-profile" && (
        <RedProfileScreen 
          onTabChange={handleTabChange}
        />
      )}
      
      {/* PURPLE Theme Screens */}
      {currentScreen === "purple-home" && (
        <PurpleHomeScreen 
          onTabChange={handleTabChange}
        />
      )}
      
      {currentScreen === "purple-chats" && (
        <PurpleChatsScreen 
          onChatSelect={handleChatSelect}
          onTabChange={handleTabChange}
        />
      )}
      
      {currentScreen === "purple-conversation" && (
        <PurpleChatConversationScreen 
          contactName={selectedContact}
          onBack={handleBack}
        />
      )}
      
      {currentScreen === "purple-post" && (
        <PurplePostScreen 
          onTabChange={handleTabChange}
        />
      )}
      
      {currentScreen === "purple-hope" && (
        <PurpleGiftOfHopeScreen 
          onTabChange={handleTabChange}
          onAddNew={handleAddNewHope}
        />
      )}
      
      {currentScreen === "purple-new-hope" && (
        <PurpleNewHopeScreen 
          onBack={handleBack}
        />
      )}
      
      {currentScreen === "purple-profile" && (
        <PurpleProfileScreen 
          onTabChange={handleTabChange}
        />
      )}
    </div>
  );
};

export default Index;
