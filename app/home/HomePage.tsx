import ScanBar from "@/components/bar/ScanBar";
import Carousel from "@/components/carousel/CarouselParalex";
import CategoryBody from "@/components/category/CategoryBody";
import { Image } from "expo-image";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  StatusBar,
} from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const HomePage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} bounces={false}>
        <Carousel />
        <ScanBar />
        <CategoryBody />
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
            source={require("../../assets/images/sale/sale1.png")}
            contentFit="fill"
          />
        </View>

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
            source={require("../../assets/images/sale/sale2.png")}
            contentFit="fill"
          />
        </View>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </ScrollView>
    </SafeAreaView>
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
  scrollView: {
    // backgroundColor: "pink",
    // marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },
});
