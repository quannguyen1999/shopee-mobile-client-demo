import MenuHeader from "@/components/header/dashboard/MenuHeader";
import { Stack } from "expo-router";

export default function layout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: (props: any) => <MenuHeader />,
          headerStyle: {
            backgroundColor: "rgb(249 115 22)",
          },
        }}
      />
      
    </Stack>
  );
}
