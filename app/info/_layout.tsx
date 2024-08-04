import { Stack } from "expo-router";

export default function InfoLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
          headerTransparent: true
        }}
      />
      
    </Stack>
  );
}
