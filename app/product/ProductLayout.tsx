import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductHeader from "@/components/header/product/ProductHeader";
import IRouteProps from "@/modal/IRouteProps";
import ProductPage from "./ProductPage";

export const ROUTES_PRODUCT: IRouteProps[] = [
  {
    name: "ProductPage",
    component: ProductPage,
  },
];

const Stack = createNativeStackNavigator();

export default function ProductLayout() {
  return (
    <Stack.Navigator>
      {ROUTES_PRODUCT.map((r: any, i) => (
        <Stack.Screen
          key={i}
          name={r.name}
          component={r.component}
          options={{
            headerTitle: (props: any) => <ProductHeader />,
            headerStyle: {
              backgroundColor: "transparent",
            },
            headerShown: true,
            headerTransparent: true,
          }}
        />
      ))}
    </Stack.Navigator>
  );
}
