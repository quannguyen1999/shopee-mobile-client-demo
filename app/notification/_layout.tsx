import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Text, View } from "react-native";

import MenuHeader from "@/components/header/dashboard/MenuHeader";
import Notification from "./notification";
import NotificationHeader from "@/components/header/NotificationHeader";

const Stack = createNativeStackNavigator();

export default function NotificationLayout() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Notification"
        component={Notification}
        options={{
          headerTitle: (props: any) => <NotificationHeader />,
        }}
      />
    </Stack.Navigator>
  );
}
