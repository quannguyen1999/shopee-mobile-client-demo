import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Text, View } from "react-native";

import MenuHeader from "@/components/header/dashboard/MenuHeader";
import VideoPage from "./VideoPage";

const Stack = createNativeStackNavigator();

export default function VideoLayout() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="VideoPage"
        component={VideoPage}
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
