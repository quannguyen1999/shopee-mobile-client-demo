import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Text, View } from "react-native";

import MenuHeader from "@/components/header/dashboard/MenuHeader";
import ProductPage from "./ProductPage";

const Stack = createNativeStackNavigator();

export default function ProductLayout() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProductPage"
        component={ProductPage}
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
