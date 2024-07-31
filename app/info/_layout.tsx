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
          headerTitle: (props: any) => <MenuHeader />,
          headerStyle: {
            backgroundColor: "rgb(249 115 22)",
          },
        }}
      />
      
    </Stack.Navigator>
  );
}
