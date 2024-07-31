import ProductHeader from "@/components/header/product/ProductHeader";
import { Stack, Tabs } from "expo-router";
import { View, Text } from "react-native";
export default function ProductDetail() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          // Hide the header for all other routes.
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="modal"
        options={{
          presentation: "modal",
          headerStyle: {
            backgroundColor: "oranges",
          },
        }}
      />
    </Stack>
  );
}
