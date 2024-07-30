import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MenuHeader from "@/components/header/dashboard/MenuHeader";
import IRouteProps from "@/modal/IRouteProps";
import HomePage from "./HomePage";
import ProductLayout from "../product/ProductLayout";

export const ROUTES_HOME: IRouteProps[] = [
  {
    name: "HomePage",
    component: HomePage,
  },
  {
    name: "ProductLayout",
    component: ProductLayout,
  },
];


const Stack = createNativeStackNavigator();
export default function HomeLayout() {
  return (
    <Stack.Navigator>
      {ROUTES_HOME.map((r: any, i) => (
        <Stack.Screen  key={i} name={r.name} component={r.component}  options={{
        headerTitle: (props: any) => r.name == 'HomePage' && <MenuHeader />,
        headerStyle: {
        backgroundColor: "rgb(249 115 22)",
        },
        headerShown: r.name == 'HomePage' && true
        }}/>
      ))}
    </Stack.Navigator>
  );
}
