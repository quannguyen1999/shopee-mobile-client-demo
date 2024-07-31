import HomeImageSale from "@/components/HomeImageSale";
import TitleCategory from "@/components/TitleCategory";
import ScanBar from "@/components/bar/ScanBar";
import CarouselDashboard from "@/components/carousel/CarouselDashboard";
import CategoryBody from "@/components/category/CategoryBody";
import FlashBody from "@/components/flash/FlashBody";
import LiveBody from "@/components/live/LiveBody";
import ProductList from "@/components/product/ProductList";
import { IStackScreenProps } from "@/modal/StackScreenProps";

import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  StatusBar,
} from "react-native";

const HomePage: React.FunctionComponent<IStackScreenProps> = (props?: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView bounces={false}>
        <CarouselDashboard />
        <ScanBar />
        <CategoryBody />
        <HomeImageSale image={require("../../assets/images/sale/sale1.png")} />
        <HomeImageSale image={require("../../assets/images/sale/sale2.png")} />
        <TitleCategory text="ECOMMER LIVE SIÊU RẺ" />
        <LiveBody />
        <TitleCategory text="FLASH SALE" />
        <FlashBody />
        <TitleCategory text="Gợi Ý Hôm Nay" />
        <ProductList props={props}/>
      </ScrollView>
     </SafeAreaView>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  text: {
    fontSize: 42,
  },
});
