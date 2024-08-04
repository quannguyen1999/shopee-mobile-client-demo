import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Text, View } from "react-native";

import MenuHeader from "@/components/header/dashboard/MenuHeader";
import Info from "./info";

const Stack = createNativeStackNavigator();

export default function InfoLayout() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Info"
        component={Info}
        options={{
          headerShown: false,
          headerTransparent: true
        }}
      />
      
    </Stack.Navigator>
  );
}
