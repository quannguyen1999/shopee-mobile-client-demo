import { Text, View, StyleSheet } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { BG_ORANGE_200, BG_ORANGE_500, BG_RED_500 } from "@/constants/colors";

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
    gap: 5
  },
  childContainer: {
    height: 25,
  },
});

const ProductDate = () => {
  return (
    <View style={styleDate.container}>
      <AntDesign name="car" size={24} color="black" />
      <View
        style={styleDate.containerChild}
      >
        <Text style={{fontWeight: 'bold'}}>Nhận vào 3 tháng 8, phí giao đ0</Text>
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
    gap: 5
  }
});

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

export default ProductInfo;

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
