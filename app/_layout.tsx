import * as React from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { DefaultTheme, ThemeProvider } from "@react-navigation/native";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeLayout from "./home/HomeLayout";
import InfoLayout from "./info/InfoLayout";
import { TabBarIcon } from "@/components/icon/TabBarIcon";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import MallLayout from "./mall/MallLayout";
import LiveLayout from "./live/LiveLayout";
import VideoLayout from "./video/VideoLayout";
import AntDesign from "@expo/vector-icons/AntDesign";
import NotificationLayout from "./notification/NotificationLayout";
import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet } from "react-native";
import { BG_ORANGE_500, BG_ORANGE_600 } from "@/constants/colors";
import Feather from "@expo/vector-icons/Feather";

const Tab = createBottomTabNavigator();



export default function RootLayout() {
  //Define common
  const size = 28;

  return (
    <ThemeProvider value={DefaultTheme}>
      <Tab.Navigator>
        <Tab.Screen
          name="home/HomeLayout"
          component={HomeLayout}
          options={{
            title: "Home",

            tabBarIcon: ({ color, focused }) => (
              <Feather name="home" size={24} color="black" />
            ),
            headerShown: false,
            headerTitleStyle: {
              fontSize: 50,
              color: "red",
            },
          }}
        />

        <Tab.Screen
          name="mall/MallLayout"
          component={MallLayout}
          options={{
            title: "Mall",
            tabBarIcon: ({ color, focused }) => (
              <MaterialIcons name="local-mall" size={size} color="black" />
            ),
            headerShown: false,
          }}
        />

        <Tab.Screen
          name="live/LiveLayout"
          component={LiveLayout}
          options={{
            title: "Live",
            tabBarIcon: ({ color, focused }) => (
              <MaterialIcons name="live-tv" size={size} color="black" />
            ),
            headerShown: false,
          }}
        />

        <Tab.Screen
          name="video/VideoLayout"
          component={VideoLayout}
          options={{
            title: "Video",
            tabBarIcon: ({ color, focused }) => (
              <AntDesign name="videocamera" size={size} color="black" />
            ),
            headerShown: false,
          }}
        />

        <Tab.Screen
          name="notification/NotificationLayout"
          component={NotificationLayout}
          options={{
            title: "Thông Báo",
            tabBarIcon: ({ color, focused }) => (
              <Ionicons
                name="notifications"
                size={size}
                color={BG_ORANGE_600}
              />
            ),
            headerShown: false,
            tabBarBadge: 13,
            tabBarLabelStyle: {
              color: BG_ORANGE_600,
              fontSize: 10,
              fontWeight: "bold",
            },
            tabBarBadgeStyle: {
              borderColor: "white",
              borderWidth: 1,
              backgroundColor: BG_ORANGE_600,
            },
          }}
        />

        <Tab.Screen
          name="info/InfoLayout"
          component={InfoLayout}
          options={{
            title: "Tôi",
            tabBarIcon: ({ color, focused }) => (
              <MaterialCommunityIcons
                name="account-circle-outline"
                size={size}
                color="black"
              />
            ),
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  iconHeader: {
    backgroundColor: BG_ORANGE_500,
  },
});
