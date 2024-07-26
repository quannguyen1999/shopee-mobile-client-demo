import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons';
import { BG_ORANGE_600, BG_SLAY_500 } from "@/constants/colors";

const Tab = createBottomTabNavigator();

interface TabScreenProps {
  layout: React.ComponentType<any>;
  title: string;
  location: string;
  icon: (props: {
    focused: boolean;
    color: string;
    size: number;
  }) => React.ReactNode;
}

export const Screen = ({ layout, title, location, icon }: TabScreenProps) => {
  return (
    <Tab.Screen
      name={location}
      component={layout}
      options={{
        title: title,
        tabBarIcon: icon,
        headerShown: false,
        tabBarBadge: 13,
        tabBarLabelStyle: {
          color: BG_SLAY_500,
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
  );
};
