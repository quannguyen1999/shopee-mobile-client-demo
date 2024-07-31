import * as React from "react";
import { DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";
import { BG_ORANGE_500, BG_ORANGE_600 } from "@/constants/colors";
import { ROUTES_ROOT, ROUTES_ROUTE_HIDE } from "@/constants/routes";
import { Provider, useDispatch, useSelector } from "react-redux";
import { store, updateCurrentUrl } from "@/hooks/navigation-slice";
import { Tabs, useNavigation, usePathname, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import MenuHeader from "@/components/header/dashboard/MenuHeader";
import ProductHeader from "@/components/header/product/ProductHeader";

const MainLayout = () => {
  return (
    <Provider store={store}>
      <RootLayout />
    </Provider>
  );
};

const RootLayout = () => {
  const tabBarBadge = 13;
  const inActiveColor = "gray";
  const activeColor = BG_ORANGE_500;

  const pathName = usePathname();

  const dispatch = useDispatch();
  const [isTabBarVisible, setIsTabBarVisible] = useState(false);

  const navigationCustom = useSelector(
    (state: any) => state.navigationCustom.currentUrl
  );

  useEffect(() => {
    dispatch(updateCurrentUrl(pathName));
    // setIsTabBarVisible(isShowMenu(navigationCustom))
  }, [pathName]);

  return (
    <ThemeProvider value={DefaultTheme}>
      <Tabs
      // initialRouteName="home"
      >
        {ROUTES_ROOT.map((r: any, i) => (
          <Tabs.Screen
            key={r.name}
            name={r.name}
            options={{
              title: r.title,

              tabBarIcon: ({ color, focused }) => r.icon(color, focused),

              headerShown: false,
              headerTransparent: true,
              tabBarBadge: tabBarBadge,
              tabBarActiveTintColor: activeColor,
              tabBarInactiveTintColor: inActiveColor,
              tabBarBadgeStyle: styles.tabBarBadgeStyle,
              // tabBarStyle: {
              //   display: /product/i.test(navigationCustom) ? "none" : "flex",
              // },
              // href: null,

              // headerLeft: () => {
              //   console.log(navigation.route.name);
              //   // <DrawerButton onPress={() => navigation.toggleDrawer()} />
              //   return <View></View>;
              // },
            }}

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

        {ROUTES_ROUTE_HIDE.map((r: any, i) => (
          <Tabs.Screen
            key={r.name}
            name={r.name}
            options={{
              title: r.title,
              headerTitle: (props: any) => <ProductHeader />,
              headerTransparent: true,
              tabBarStyle: {
                display: "none",
              },
              href: null,
            }}
          />
        ))}


        <Tabs.Screen
          name="product"
          options={{
            // headerShown: false,
            // headerTitle: (props: any) => <ProductHeader />,
            headerTransparent: true,
            tabBarStyle: {
              display: "none",
            },
            href: null,
          }}
        />
      </Tabs>
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
