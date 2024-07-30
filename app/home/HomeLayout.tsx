import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MenuHeader from "@/components/header/dashboard/MenuHeader";
import IRouteProps from "@/modal/IRouteProps";
import HomePage from "./HomePage";
import ProductLayout from "../product/ProductLayout";
import ProductDetailPage from "../product/detail/ProductDetailPage";
import ProductDetailLayout from "../product/detail/ProductDetailLayout";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCurrentUrl } from "@/hooks/navigation-slice";
export const ROUTES_HOME: IRouteProps[] = [
  {
    name: "HomePage",
    component: HomePage,
  },
  {
    name: "ProductDetailLayout",
    component: ProductDetailLayout,
  },
];

const Stack = createNativeStackNavigator();
export default function HomeLayout() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateCurrentUrl("HomePage"));
  }, []);
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
