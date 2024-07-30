import { Text, View, StyleSheet } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { BG_ORANGE_200, BG_ORANGE_500, BG_RED_500 } from "@/constants/colors";

const ProductDate = () => {
  return (
    <View style={styleDate.container}>
      <AntDesign name="car" size={24} color="black" />
      <View style={styleDate.containerChild}>
        <Text style={{ fontWeight: "bold" }}>
          Nhận vào 3 tháng 8, phí giao đ0
        </Text>
        <Text>Tặng Vouncher d915000 nếu đơn giao thời gian trên</Text>
      </View>
    </View>
  );
};

const styleDate = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    height: 10,
    gap: 5,
  },
  containerChild: {
    flex: 1,
    flexDirection: "column",
    gap: 5,
  },
});

export default ProductDate;
