import * as React from "react";
import { DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";
import { BG_ORANGE_500, BG_ORANGE_600 } from "@/constants/colors";
import { ROUTES_ROOT, ROUTES_ROUTE_HIDE } from "@/constants/routes";
import { Provider, useDispatch, useSelector } from "react-redux";
import { store, updateCurrentUrl } from "@/hooks/navigation-slice";
import { Tabs, useNavigation, usePathname, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import ProductHeader from "@/components/header/product/ProductHeader";
import { MaterialIcons } from "@expo/vector-icons";
import { GluestackUIProvider, Text, Box } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config"; // Optional if you want to use default theme

const MainLayout = () => {
  return (
    <GluestackUIProvider config={config}>
      <Provider store={store}>
        <RootLayout />
      </Provider>
    </GluestackUIProvider>
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
              tabBarBadge: tabBarBadge,
              tabBarActiveTintColor: activeColor,
              tabBarInactiveTintColor: inActiveColor,
              tabBarBadgeStyle: styles.tabBarBadgeStyle,
            }}
          />
        ))}

        <Tabs.Screen
          name="live"
          options={{
            title: "live",
            tabBarIcon: ({ color, focused }) => (
              <MaterialIcons name="live-tv" size={25} color={color} />
            ),
            headerShown: false,
            tabBarBadge: tabBarBadge,
            tabBarActiveTintColor: activeColor,
            tabBarInactiveTintColor: "white",
            tabBarBadgeStyle: styles.tabBarBadgeStyle,
            tabBarStyle: {
              backgroundColor: "transparent",
              borderTopWidth: 0,
              position: "absolute",
              zIndex: 10,
            },
          }}
        />

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
            headerShown: false,
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
