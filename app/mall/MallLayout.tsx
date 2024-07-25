import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Text, View } from "react-native";

import MenuHeader from "@/components/header/dashboard/MenuHeader";
import MallPage from "./MallPage";

const Stack = createNativeStackNavigator();

export default function MallLayout() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MallPage"
        component={MallPage}
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
