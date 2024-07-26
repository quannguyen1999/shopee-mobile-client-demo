import ScanBar from "@/components/bar/ScanBar";
import Carousel from "@/components/carousel/CarouselParalex";
import { Text, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const HomePage = () => {
  return (
    <>
      <Carousel />
      <ScanBar />
    </>
  );
};

export default HomePage;
