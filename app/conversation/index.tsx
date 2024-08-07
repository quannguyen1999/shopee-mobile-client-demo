import ChatInput from "@/components/chat/ChatInput";
import ChatItem from "@/components/chat/ChatItem";
import { LIST_CHAT_FAKE } from "@/constants/datas";
import { Image } from "expo-image";
import { SafeAreaView, ScrollView, Text, View } from "react-native";


const Info = () => {
  return (
    <SafeAreaView>
      <ChatInput />
      <ScrollView
        style={{
          width: "100%",
          height: "auto",
        }}>
        {LIST_CHAT_FAKE.map((t, index) => (
          <ChatItem
            date={t.date}
            image={t.image}
            message={t.message}
            title={t.title}
            type={t.type}
            key={index}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Info;
