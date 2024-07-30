import { Text, View, StyleSheet } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { BG_ORANGE_200, BG_ORANGE_500, BG_RED_500 } from "@/constants/colors";

const ProductMall = () => {
  return (
    <View style={styleMall.container}>
      <View style={styleMall.mall}>
        <Text style={styleMall.mallText}>Mall</Text>
      </View>
      <View style={styleMall.textView}>
        <Text>Áo sexy guy</Text>
      </View>
    </View>
  );
};

const styleMall = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    height: 10,
    gap: 5,
  },
  mall: {
    backgroundColor: BG_RED_500,
    height: 20,
    padding: 2,
  },
  mallText: {
    color: "white",
  },
  textView: {
    flex: 1,
    justifyContent: "center",
  },
});

export default ProductMall;
