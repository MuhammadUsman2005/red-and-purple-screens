import StatusBar from "@/components/shared/StatusBar";
import SearchBar from "@/components/shared/SearchBar";
import BottomTabBar from "@/components/shared/BottomTabBar";
import PurpleChatListItem from "@/components/purple/PurpleChatListItem";

interface PurpleChatsScreenProps {
  onChatSelect?: (name: string) => void;
  onTabChange?: (tab: string) => void;
}

const chatData = [
  { name: "Ali Akbar", message: "Hello world", time: "3:15 pm", verified: "blue" as const, hasUnread: true },
  { name: "Talha Nawaz", message: "Hello world", time: "3:15 pm", verified: "red" as const, hasUnread: true },
  { name: "Ayaan Hassan", message: "Hello world", time: "3:15 pm", verified: "blue" as const },
  { name: "Danish Aslam", message: "Hello world", time: "3:15 pm", verified: "blue" as const },
  { name: "Rayyan Hussain", message: "Hello world", time: "3:15 pm", verified: "green" as const },
  { name: "Ibrahim Khan", message: "Hello world", time: "3:15 pm", verified: "red" as const },
  { name: "Maryam Nawaz", message: "Hello world", time: "3:15 pm", verified: "blue" as const },
  { name: "Umer Haider", message: "Hello world", time: "3:15 pm", verified: "green" as const },
  { name: "Rohail Niazi", message: "Hello world", time: "3:15 pm", verified: "green" as const },
];

const PurpleChatsScreen = ({ onChatSelect, onTabChange }: PurpleChatsScreenProps) => {
  return (
    <div className="mobile-container gradient-purple min-h-screen flex flex-col">
      <StatusBar theme="purple" />
      
      <div className="flex-1 px-4 pb-24">
        <h1 className="text-white text-3xl font-bold mt-4 mb-4">Chats</h1>
        
        <SearchBar theme="purple" />
        
        <div className="mt-4 -mx-4">
          {chatData.map((chat, index) => (
            <PurpleChatListItem
              key={index}
              {...chat}
              onClick={() => onChatSelect?.(chat.name)}
            />
          ))}
        </div>
      </div>
      
      <BottomTabBar theme="purple" activeTab="Messages" onTabChange={onTabChange} />
    </div>
  );
};

export default PurpleChatsScreen;
