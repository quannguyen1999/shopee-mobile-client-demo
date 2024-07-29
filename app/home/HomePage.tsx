import TitleCategory from "@/components/TitleCategory";
import ScanBar from "@/components/bar/ScanBar";
import Carousel from "@/components/carousel/CarouselParalex";
import CategoryBody from "@/components/category/CategoryBody";
import FlashBody from "@/components/flash/FlashBody";
import LiveBody from "@/components/live/LiveBody";
import ProductList from "@/components/product/ProductList";
import { Image } from "expo-image";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  StatusBar,
} from "react-native";

const HomePage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} bounces={false}>
        <Carousel />
        <ScanBar />
        <CategoryBody />
        <HomeImageSale image={require("../../assets/images/sale/sale1.png")} />
        <HomeImageSale image={require("../../assets/images/sale/sale2.png")} />
        <TitleCategory text="ECOMMER LIVE SIÊU RẺ" />
        <LiveBody />
        <TitleCategory text="FLASH SALE" />
        <FlashBody />
        <TitleCategory text="Gợi Ý Hôm Nay" />
        <ProductList />
      </ScrollView>
    </SafeAreaView>
  );
};

interface HomeImageSale {
  image: any;
}
const HomeImageSale = ({ image }: HomeImageSale) => {
  return (
    <View>
      <Image
        style={[
          styles.image,
          {
            marginTop: 18,
            width: "100%",
            height: 150,
          },
        ]}
        source={image}
        contentFit="fill"
      />
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "center",
    height: 50,
  },
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {},
  text: {
    fontSize: 42,
  },
});
