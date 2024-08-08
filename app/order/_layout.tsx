import OrderHeader from "@/components/header/OrderHeader";
import MenuHeader from "@/components/header/dashboard/MenuHeader";
import { Stack } from "expo-router";

export default function layout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: (props: any) => <OrderHeader />,
          headerStyle: {
            backgroundColor: "white",
          },
        }}
      />
      
    </Stack>
  );
}
