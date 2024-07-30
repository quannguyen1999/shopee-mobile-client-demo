import * as React from "react";
import { useEffect } from "react";
import {
  DefaultTheme,
  ThemeProvider,
  useRoute,
} from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, View } from "react-native";
import { BG_ORANGE_500, BG_ORANGE_600, BG_SLAY_500 } from "@/constants/colors";
import { ROUTES_ROOT } from "@/constants/routes";
import { useNavigation, usePathname, useRouter } from "expo-router";
import { Provider, useSelector } from "react-redux";
import { store } from "@/hooks/navigation-slice";

const Tab = createBottomTabNavigator();

const MainLayout = () => {
  return (
    <Provider store={store}>
      <RootLayout />
    </Provider>
  );
};

const RootLayout = () => {
  const router = usePathname();
  useEffect(() => {
    console.log(router);
  }, [router]);
  //Define common
  const tabBarBadge = 13;
  const inActiveColor = "gray";
  const activeColor = BG_ORANGE_500;
  const navigationCustom = useSelector(
    (state: any) => state.navigationCustom.currentUrl
  );
  useEffect(() => {
    console.log(navigationCustom);
  }, [navigationCustom]);
  return (
    <ThemeProvider value={DefaultTheme}>
      <Tab.Navigator>
        {ROUTES_ROOT.map((r: any, i) => (
          <Tab.Screen
            key={i}
            name={r.name}
            component={r.component}
            options={(navigation) => ({
              title: r.title,
              tabBarIcon: ({ color, focused }) => r.icon(color, focused),
              headerShown: false,
              tabBarBadge: tabBarBadge,
              tabBarActiveTintColor: activeColor,
              tabBarInactiveTintColor: inActiveColor,
              tabBarBadgeStyle: styles.tabBarBadgeStyle,
              tabBarStyle: {
                display: navigationCustom == "ProductDetail" ? "none" : "flex",
              },
              // headerLeft: () => {
              //   console.log(navigation.route.name);
              //   // <DrawerButton onPress={() => navigation.toggleDrawer()} />
              //   return <View></View>;
              // },
            })}

            // listeners={({ navigation }) => ({
            //   tabPress: (e) => {
            //     console.log(navigation)
            //     navigation.reset({
            //       index: 0,
            //       routes: [{ name: r.pageReset }],
            //     });
            //   },
            // })}
          />
        ))}
      </Tab.Navigator>
    </ThemeProvider>
  );
};

const styles = StyleSheet.create({
  iconHeader: {
    backgroundColor: BG_ORANGE_500,
  },
  headerTitleStyle: {
    fontSize: 50,
    color: "red",
  },
  tabBarLabelStyle: {},
  tabBarBadgeStyle: {
    borderColor: "white",
    borderWidth: 1,
    backgroundColor: BG_ORANGE_600,
  },
});

export default MainLayout;
