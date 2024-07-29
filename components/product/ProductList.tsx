import {
  FLASH_CAROUSEL,
  LIVE_CAROUSEL,
  PRODUCT_CAROUSEL,
} from "@/constants/datas";
import { Image } from "expo-image";
import { StyleSheet, Animated, View, Text, FlatList } from "react-native";
import { useRef, useState } from "react";
import ProductItem from "./ProductItem";

interface ProductListProps {}

const ProductList = () => {
  //   const scrollX = useRef(new Animated.Value(0)).current;
  const slideRef = useRef(null);
  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;
  return (
    <View style={styles.container}>
      {PRODUCT_CAROUSEL.map((item, index) => {
        return (
          <View key={index}>
            <ProductItem item={item} />
          </View>
        );
      })}
    </View>
  );
};

export default ProductList;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: "row",
    flexWrap: "wrap",

  },
});
