import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Text, View } from "react-native";

import MenuHeader from "@/components/header/dashboard/MenuHeader";
import Info from "./info";
import BackHeader from "@/components/header/BackHeader";
import { Stack, Tabs } from "expo-router";

export default function InfoLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="info"
        options={{
          headerShown: false,
          headerTransparent: true
        }}
      />
    </Stack>
  );
}
