import BackHeader from "@/components/header/BackHeader";
import ChatHeader from "@/components/header/ChatHeader";
import MenuHeader from "@/components/header/dashboard/MenuHeader";
import { Stack } from "expo-router";

export default function InfoLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: (props: any) =>  <ChatHeader />,
          headerStyle: {
            backgroundColor: "white",
          }, 
          headerShown: true,
        }}
      />
    </Stack>
  );
}
