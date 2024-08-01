import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import { BG_ORANGE_600, BG_RED_500, BG_YELLOW_300 } from "@/constants/colors";
interface ProductItemProps {
  item: any;
}
const ProductItem = ({ item }: ProductItemProps) => {
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={[
            {
              width: '100%',
              height: 170,
              justifyContent: "center",
            },
          ]}
          source={item.image}
          transition={1000}
        />
      </View>
      <View style={styles.title}>
        <Text>{item.name}</Text>
      </View>

      <View style={styles.containerStar}>
        <Entypo name="star" size={15} color="rgb(245 158 11)" />
        <Text
          style={{
            fontSize: 10,
          }}
        >
          {item.star == undefined ? 0 : item.star}
        </Text>
      </View>
      <View style={styles.containerPrice}>
        <Text style={styles.containerPriceLeft}>{item.price}</Text>
        <View style={styles.containerPriceRight}>
          <Text style={styles.containerPriceRightText}>Đã bán {item.sold >= 1000 ? item.sold / 1000 + 'k' : item.sold == undefined ? 0 : item.sold}</Text>
        </View>
      </View>
      {item.percentSale > 0 && (
        <View style={styles.containerFlashSale}>
          <Text style={styles.containerFlashSaleText}>
            -${item.percentSale}%
          </Text>
        </View>
      )}
      {item.isMall && (
        <View style={styles.containerMall}>
          <Text style={styles.containerMallText}>Mall</Text>
        </View>
      )}
      {item.isLike && (
        <View style={styles.containerLike}>
          <Text style={styles.containerLikeText}>Yêu Thích</Text>
        </View>
      )}
    </View>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    gap: 2,
    // backgroundColor: 'red'
  },
  title: {
    justifyContent: "center",
    alignItems: "center",
  },
  containerStar: {
    width: '30%',
    borderWidth: 1,
    borderColor: "rgb(245 158 11)",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgb(253 230 138)",
    gap: 1,
  },
  containerPrice: {
    flex: 1,
    flexDirection: "row",
  },
  containerPriceLeft: {
    width: "48%",
    color: BG_ORANGE_600,
    fontWeight: "bold",
  },
  containerPriceRight: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  containerPriceRightText: {
    fontSize: 13,
  },
  containerFlashSale: {
    position: "absolute",
    top: 10,
    right: 10,
    padding: 2,
    backgroundColor: "rgb(254 202 202)",
  },
  containerFlashSaleText: {
    color: "red",
  },
  containerMall: {
    position: "absolute",
    top: 15,
    left: 4,
    backgroundColor: BG_RED_500,
    padding: 2,
  },
  containerMallText: {
    color: "white",
    fontSize: 10
  },
  containerLike: {
    position: "absolute",
    top: 32,
    left: 4,
    backgroundColor: BG_YELLOW_300,
    padding: 2,
  },
  containerLikeText: {
    color: "white",
    fontSize: 10
  },
});
