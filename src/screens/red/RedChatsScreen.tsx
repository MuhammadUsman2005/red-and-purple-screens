import StatusBar from "@/components/shared/StatusBar";
import SearchBar from "@/components/shared/SearchBar";
import BottomTabBar from "@/components/shared/BottomTabBar";
import ChatListItem from "@/components/red/ChatListItem";

interface RedChatsScreenProps {
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

const RedChatsScreen = ({ onChatSelect, onTabChange }: RedChatsScreenProps) => {
  return (
    <div className="mobile-container gradient-red min-h-screen flex flex-col">
      <StatusBar theme="red" />
      
      <div className="flex-1 px-4 pb-24">
        <h1 className="text-white text-3xl font-bold mt-4 mb-4">Chats</h1>
        
        <SearchBar theme="red" />
        
        <div className="mt-4 -mx-4">
          {chatData.map((chat, index) => (
            <ChatListItem
              key={index}
              {...chat}
              onClick={() => onChatSelect?.(chat.name)}
            />
          ))}
        </div>
      </div>
      
      <BottomTabBar theme="red" activeTab="Messages" onTabChange={onTabChange} />
    </div>
  );
};

export default RedChatsScreen;
