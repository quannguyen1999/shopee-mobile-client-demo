import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Text, View } from "react-native";

import MenuHeader from "@/components/header/dashboard/MenuHeader";
import Live from "./live";

const Stack = createNativeStackNavigator();

export default function LiveLayout() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Live"
        component={Live}
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
