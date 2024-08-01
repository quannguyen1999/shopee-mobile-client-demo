import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  StatusBar,
  SafeAreaView,
} from "react-native";

import { IStackScreenProps } from "@/modal/StackScreenProps";
import CarouselProduct from "@/components/carousel/CarouselProduct";
import ProductInfo from "@/components/product/detail/ProductInfo";
import ProductList from "@/components/product/ProductList";
import ProductButton from "@/components/product/detail/ProductButton";
import ProductHeader from "@/components/header/product/ProductHeader";
import { BG_GRAY_400 } from "@/constants/colors";
import { useRef, useState, useEffect } from "react";
import { Animated } from "react-native";
import { opacity } from "react-native-reanimated/lib/typescript/reanimated2/Colors";
const Product: React.FunctionComponent<IStackScreenProps> = (props?: any) => {
  const animatedValue = useRef(new Animated.Value(1)).current;
  const [scroll, setScroll] = useState(0);
  useEffect(() => {
    console.log(animatedValue);
  }, [animatedValue]);
  useEffect(() => {
    animatedValue.setValue(scroll);
  }, [scroll]);
  return (
    <>
      <SafeAreaView style={styles.menuContainer}>
        <Animated.View
          style={[
            styles.menuContainerChild,
            {
              opacity: animatedValue.interpolate({
                inputRange: [0, 100],
                outputRange: [0, 1],
              }),
            },
          ]}
        ></Animated.View>
        <ProductHeader scroll={scroll}/>
      </SafeAreaView>

      <ScrollView
        bounces={false}
        onScroll={(e) => {
          setScroll(e.nativeEvent.contentOffset.y);
        }}
        scrollEventThrottle={16}
      >
        <View style={styles.container}>
          <View>
            <View style={styles.carousel}>
              <CarouselProduct />
            </View>
            <View style={styles.productInfo}>
              <ProductInfo />
            </View>
            <View
              style={{
                padding: 5,
              }}
            >
              <Text style={styles.titleCategory}>Sản phẩm liên quan</Text>
            </View>
            <ProductList props={props} />
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: 70,
          backgroundColor: "white",
        }}
      >
        <ProductButton />
      </View>
    </>
  );
};

export default Product;

const styles = StyleSheet.create({
  menuContainer: {
    position: "absolute",
    width: "100%",
    height: 100,
    top: 0,
    left: 0,
    zIndex: 30,
    // opacity: 0.5,
    // backgroundColor: "white",
  },
  menuContainerChild: {
    width: "100%",
    backgroundColor: "white",
    // opacity: 0.5,
    height: 100,
    position: "absolute",
    top: 0,
    right: 0,
    borderRadius: 10,
  },
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight!,
  },
  carousel: {
    height: 400,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    height: 50,
  },
  productInfo: {
    height: "auto",
  },
  titleCategory: {
    fontSize: 15,
    fontWeight: "bold",
    color: "gray",
  },
});
