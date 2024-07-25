import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Text, View } from "react-native";

import MenuHeader from "@/components/header/dashboard/MenuHeader";
import NotificationPage from "./NotificationPage";

const Stack = createNativeStackNavigator();

export default function NotificationLayout() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="NotificationPage"
        component={NotificationPage}
        options={{
          headerTitle: (props: any) => <MenuHeader />,
          headerStyle: {
            backgroundColor: "rgb(249 115 22)",
          },
        }}
      />
    </Stack.Navigator>
  );
}
