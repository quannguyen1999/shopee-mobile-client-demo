import {
  FLASH_CAROUSEL,
  LIVE_CAROUSEL,
  PRODUCT_CAROUSEL,
} from "@/constants/datas";
import { Image } from "expo-image";
import {
  StyleSheet,
  Animated,
  View,
  Text,
  FlatList,
  Pressable,
} from "react-native";
import { useRef, useState } from "react";
import ProductItem from "./ProductItem";
import { useNavigation } from "expo-router";

interface ProductListProps {}

const ProductList = () => {
  const navigation = useNavigation();
  const navigatteToDetailPage = (id: number) => {
    // navigation.navigate("");
  };

  return (
    <View style={styles.container}>
      {PRODUCT_CAROUSEL.map((item, index) => {
        return (
          <Pressable
            key={index}
            style={({ pressed }) => pressed && styles.pressedItem}
            android_ripple={{ color: "black" }}
            onPress={() => navigatteToDetailPage(index)}
          >
            <ProductItem item={item} />
          </Pressable>
        );
      })}
    </View>
  );
};

export default ProductList;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  pressedItem: {
    opacity: 0.5,
  },
});
