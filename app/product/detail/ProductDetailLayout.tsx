import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductHeader from "@/components/header/product/ProductHeader";
import IRouteProps from "@/modal/IRouteProps";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MallLayout from "@/app/mall/MallLayout";
import ProductLayout from "../ProductLayout";
import { usePathname } from "expo-router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCurrentUrl } from "@/hooks/navigation-slice";
const Tab = createBottomTabNavigator();
export default function ProductDetailLayout() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateCurrentUrl("ProductDetail"));
  }, []);

  return (
    <Tab.Navigator>
      <Tab.Screen
        name={"product/ProductLayout"}
        component={ProductLayout}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}
