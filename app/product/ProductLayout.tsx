import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ROUTES_PRODUCT } from "@/constants/routes";
import ProductHeader from "@/components/header/product/ProductHeader";

const Stack = createNativeStackNavigator();

export default function ProductLayout() {
  return (
    <Stack.Navigator>
      {ROUTES_PRODUCT.map((r: any, i) => (
        <Stack.Screen  key={i} name={r.name} component={r.component}  options={{
          headerTitle: (props: any) => <ProductHeader />,
          headerStyle: {
            backgroundColor: "transparent",
          },
          headerShown: true,
          headerTransparent: true
        }}/>
      ))}
    </Stack.Navigator>
  );
}
