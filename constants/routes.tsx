import HomePage from "@/app/home/HomePage";
import ProductLayout from "@/app/product/ProductLayout";
import IRouteProps from "@/modal/IRouteProps";
import Feather from "@expo/vector-icons/Feather";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import HomeLayout from "@/app/home/HomeLayout";
import MallLayout from "@/app/mall/MallLayout";
import LiveLayout from "@/app/live/LiveLayout";
import VideoLayout from "@/app/video/VideoLayout";
import NotificationLayout from "@/app/notification/NotificationLayout";
import InfoLayout from "@/app/info/InfoLayout";
import ProductPage from "@/app/product/ProductPage";

const size = 28;

export const ROUTES_ROOT: IRouteProps[] = [
  {
    name: "home/HomeLayout",
    component: HomeLayout,
    title: "Home",
    icon: (color: string, focused: boolean) => {
      return focused ? (
        <AntDesign name="like2" size={size} color={color} />
      ) : (
        <Feather name="home" size={size} color={color} />
      );
    },
    pageReset: "HomePage",
  },
  {
    name: "mall/MallLayout",
    component: MallLayout,
    title: "Mall",
    icon: (color: string, focused: boolean) => {
      return <MaterialIcons name="local-mall" size={size} color={color} />;
    },
    pageReset: "MallPage",
  },
  {
    name: "live/LiveLayout",
    component: LiveLayout,
    title: "Live",
    icon: (color: string, focused: boolean) => {
      return <MaterialIcons name="live-tv" size={size} color={color} />;
    },
    pageReset: "LivePage",
  },
  {
    name: "video/VideoLayout",
    component: VideoLayout,
    title: "Video",
    icon: (color: string, focused: boolean) => {
      return <AntDesign name="videocamera" size={size} color={color} />;
    },
    pageReset: "VideoPage",
  },
  {
    name: "notification/NotificationLayout",
    component: NotificationLayout,
    title: "Notification",
    icon: (color: string, focused: boolean) => {
      return (
        <Ionicons name="notifications-outline" size={size} color={color} />
      );
    },
    pageReset: "NotificationPage",
  },
  {
    name: "info/InfoLayout",
    component: InfoLayout,
    title: "Info",
    icon: (color: string, focused: boolean) => {
      return (
        <MaterialCommunityIcons
          name="account-circle-outline"
          size={size}
          color={color}
        />
      );
    },
    pageReset: "InfoPage",
  },
];

export const ROUTES_HOME: IRouteProps[] = [
  {
    name: "HomePage",
    component: HomePage,
  },
  {
    name: "ProductLayout",
    component: ProductLayout,
  },
];

export const ROUTES_PRODUCT: IRouteProps[] = [
  {
    name: "ProductPage",
    component: ProductPage,
  },
];
