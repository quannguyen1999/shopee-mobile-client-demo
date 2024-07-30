import { Text, View, StyleSheet } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { BG_ORANGE_200, BG_ORANGE_500, BG_RED_500 } from "@/constants/colors";

const ProductPrice = () => {
  return (
    <View style={stylePrice.containerPrice}>
      <View style={stylePrice.flexOne}>
        <View style={stylePrice.childContainerPrice}>
          <Text style={stylePrice.titlePrice}>39800 - 49800</Text>
          <View style={stylePrice.saleContainerPrice}>
            <Text style={stylePrice.saleContainerPriceTitle}>-47%</Text>
          </View>
        </View>
      </View>
      <View style={stylePrice.containerRight}>
        <Text>Đã bán 7.4k</Text>
        <AntDesign name="infocirlceo" size={14} color="gray" />
        <AntDesign name="hearto" size={14} color="gray" />
      </View>
    </View>
  );
};

const stylePrice = StyleSheet.create({
  flexOne: {
    width: "50%",
  },
  containerPrice: {
    flex: 1,
    flexDirection: "row",
    padding: 3,
  },
  titlePrice: {
    color: BG_RED_500,
    fontWeight: "bold",
    fontSize: 20,
  },
  saleContainerPrice: {
    paddingTop: 3,
    flex: 1,
    alignItems: "flex-start",
  },
  saleContainerPriceTitle: {
    color: "red",
    backgroundColor: BG_ORANGE_200,
    padding: 2,
    fontSize: 11,
  },
  childContainerPrice: {
    flex: 1,
    flexDirection: "row",
  },
  containerRight: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: 5,
  },
});

export default ProductPrice;