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
import { useNavigation } from "@react-navigation/native";
import { useRouter } from "expo-router";

interface ProductListProps {}

const ProductList = (props: any) => {
  const router = useRouter();
  const navigatteToDetailPage = (id: number) => {
    router.push("product");
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
            {/* <View style={{ width: "50%" }}> */}
              <ProductItem item={item} />
            {/* </View> */}
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
