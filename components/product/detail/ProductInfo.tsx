import { Text, View, StyleSheet } from "react-native";
import ProductDate from "./ProductDate";
import ProductMall from "./ProductMall";
import ProductPrice from "./ProductPrice";
import ProductButton from "./ProductButton";

const ProductInfo = () => {
  return (
    <View style={styleInfo.container}>
      <View style={styleInfo.childContainer}>
        <ProductPrice />
      </View>
      <View style={styleInfo.childContainer}>
        <ProductMall />
      </View>
      <View style={styleInfo.childContainer}>
        <ProductDate />
      </View>
    </View>
  );
};

const styleInfo = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    height: "100%",
    width: "100%",
    padding: 5,
    gap: 5,
  },
  childContainer: {
    height: 40,
  },
});

export default ProductInfo;
