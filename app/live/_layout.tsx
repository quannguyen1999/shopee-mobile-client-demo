import VideoHeader from "@/components/header/VideoHeader";
import { Stack } from "expo-router";

export default function LiveLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTransparent: true,
          headerTitle: (props: any) => <VideoHeader />,
        }}
      />
      
    </Stack>
  );
}
