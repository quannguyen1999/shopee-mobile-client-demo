import * as React from "react";

import {
  DefaultTheme,
  NavigationContainer,
  StackActions,
  ThemeProvider,
} from "@react-navigation/native";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { StyleSheet } from "react-native";
import { BG_ORANGE_500, BG_ORANGE_600, BG_SLAY_500 } from "@/constants/colors";
import Feather from "@expo/vector-icons/Feather";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ROUTES_HOME, ROUTES_ROOT } from "@/constants/routes";
import IRouteProps from "@/modal/IRouteProps";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const RootLayout = () => {
  //Define common
  const size = 28;
  const tabBarBadge = 13;
  const inActiveColor = "gray";
  const activeColor = BG_ORANGE_500;
  return (
    <ThemeProvider value={DefaultTheme}>
      <Tab.Navigator>
        {ROUTES_ROOT.map((r: any, i) => (
          <Tab.Screen
            key={i}
            name={r.name}
            component={r.component}
            options={() => ({
              title: r.title,
              tabBarIcon: ({ color, focused }) => r.icon(color, focused),
              headerShown: false,
              tabBarBadge: tabBarBadge,
              tabBarActiveTintColor: activeColor,
              tabBarInactiveTintColor: inActiveColor,
              tabBarBadgeStyle: styles.tabBarBadgeStyle,
            })}
            listeners={({ navigation }) => ({
              tabPress: (e) => {
                navigation.reset({
                  index: 0,
                  routes: [{ name: r.pageReset }],
                });
              },
            })}
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

export default RootLayout;
