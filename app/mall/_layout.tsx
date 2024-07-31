import { createNativeStackNavigator } from "@react-navigation/native-stack";


import MenuHeader from "@/components/header/dashboard/MenuHeader";
import Mall from "./mall";

const Stack = createNativeStackNavigator();

export default function MallLayout() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Mall"
        component={Mall}
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
