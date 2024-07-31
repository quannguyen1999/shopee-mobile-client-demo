import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Text, View } from "react-native";

import MenuHeader from "@/components/header/dashboard/MenuHeader";
import Live from "./live";
import VideoHeader from "@/components/header/VideoHeader";

const Stack = createNativeStackNavigator();

export default function LiveLayout() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Live"
        component={Live}
        options={{
          headerTransparent: true,
          headerTitle: (props: any) => <VideoHeader />,
        }}
      />
      
    </Stack.Navigator>
  );
}
