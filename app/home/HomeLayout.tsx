import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Text, View } from "react-native";

import MenuHeader from "@/components/header/dashboard/MenuHeader";
import HomePage from "./HomePage";
import ProductPage from "../product/ProductPage";
import ProductLayout from "../product/ProductLayout";

const Stack = createNativeStackNavigator();

export default function HomeLayout() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomePage"
        component={HomePage}
        options={{
          headerTitle: (props: any) => <MenuHeader />,
          headerStyle: {
            backgroundColor: "rgb(249 115 22)",
          },
        }}
      />

      {/* <Stack.Screen
        name="ProductLayout"
        component={ProductLayout}
        options={{
          headerTitle: (props: any) => <MenuHeader />,
          headerStyle: {
            backgroundColor: "rgb(249 115 22)",
          },
        }}
      /> */}
    </Stack.Navigator>
  );
}
