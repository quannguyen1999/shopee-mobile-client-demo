import NotificationHeader from "@/components/header/NotificationHeader";
import { Stack } from "expo-router";

export default function NotificationLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: (props: any) => <NotificationHeader />,
        }}
      />
    </Stack>
  );
}
