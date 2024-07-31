import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Text, View } from "react-native";

import MenuHeader from "@/components/header/dashboard/MenuHeader";
import Info from "./order";
import Order from "./order";

const Stack = createNativeStackNavigator();

export default function layout() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="order"
        component={Order}
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
