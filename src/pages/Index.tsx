import { useState } from "react";

// Red Theme Screens
import RedChatsScreen from "@/screens/red/RedChatsScreen";
import RedChatConversationScreen from "@/screens/red/RedChatConversationScreen";

// Purple Theme Screens
import PurpleChatsScreen from "@/screens/purple/PurpleChatsScreen";
import PurpleChatConversationScreen from "@/screens/purple/PurpleChatConversationScreen";
import PurpleGiftOfHopeScreen from "@/screens/purple/PurpleGiftOfHopeScreen";
import PurpleNewHopeScreen from "@/screens/purple/PurpleNewHopeScreen";

type Screen = 
  | "red-chats" 
  | "red-conversation" 
  | "purple-chats" 
  | "purple-conversation" 
  | "purple-hope" 
  | "purple-new-hope";

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

  const handleTabChange = (tab: string) => {
    if (tab === "Messages") {
      setCurrentScreen(currentTheme === "red" ? "red-chats" : "purple-chats");
    } else if (tab === "Hope") {
      setCurrentScreen("purple-hope");
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
            ? "bg-red-600 text-white" 
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
            ? "bg-purple-600 text-white" 
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
      
      {/* PURPLE Theme Screens */}
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
    </div>
  );
};

export default Index;
