import IRouteProps from "@/modal/IRouteProps";
import Feather from "@expo/vector-icons/Feather";
import AntDesign from "@expo/vector-icons/AntDesign";
import {
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";

const size = 28;
export const ROUTES_ROUTE_HIDE: IRouteProps[] = [
  {
    name: "conversation",
  },
  {
    name: "order",
  },
  {
    name: "+not-found",
  },
];

export const ROUTES_ROOT: IRouteProps[] = [
  {
    name: "home",
    title: "home",
    icon: (color: string, focused: boolean) => {
      return focused ? (
        <AntDesign name="like2" size={size} color={color} />
      ) : (
        <Feather name="home" size={size} color={color} />
      );
    },
  },
  {
    name: "notification",
    title: "notification",
    icon: (color: string, focused: boolean) => {
      return (
        <Ionicons name="notifications-outline" size={size} color={color} />
      );
    },
  },
  // {
  //   name: "live",
  //   title: "live",
  //   icon: (color: string, focused: boolean) => {
  //     return <MaterialIcons name="live-tv" size={size} color={color} />;
  //   },
  //   isTransparent: true
  // },

  {
    name: "info",
    title: "info",
    icon: (color: string, focused: boolean) => {
      return (
        <MaterialCommunityIcons
          name="account-circle-outline"
          size={size}
          color={color}
        />
      );
    },
  },
];
