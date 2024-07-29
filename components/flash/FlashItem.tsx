import {
  BG_ORANGE_500,
  BG_ORANGE_600,
  BG_RED_500,
  BG_YELLOW_300,
} from "@/constants/colors";
import { Image } from "expo-image";
import { View, StyleSheet, Text } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import ProgressBar from "../ProgressBar";
interface CategoryItemProps {
  item: any;
}
const FlashItem = ({ item }: CategoryItemProps) => {
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={[
            {
              width: 120,
              height: 150,
              justifyContent: "center",
            },
          ]}
          source={item.image}
          transition={1000}
        />
      </View>
      <View style={styles.flashHeaderLeft}>
        <Text style={styles.flashHeaderLeftTitle}>Mall</Text>
      </View>
      <View style={styles.flashHeaderRight}>
        <View style={styles.flashHeaderRightContainer}>
          <MaterialIcons name="electric-bolt" size={13} color={BG_ORANGE_600} />
          <Text style={styles.flashHeaderRightText}>-26%</Text>
        </View>
      </View>

      <Text style={styles.nameProduct}>{item.price}</Text>
      <ProgressBar percent={item.percentSale} />
    </View>
  );
};

export default FlashItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    gap: 2,
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  flashHeaderLeft: {
    backgroundColor: BG_RED_500,
    position: "absolute",
    padding: 1,
    top: 10,
    left: -1,
  },
  flashHeaderLeftTitle: {
    color: "white",
  },
  flashHeaderRight: {
    position: "absolute",
    top: 5,
    right: 5,
    backgroundColor: BG_YELLOW_300,
  },
  flashHeaderRightText: {
    color: BG_ORANGE_600,
    fontWeight: "bold",
    fontSize: 15,
  },
  flashHeaderRightContainer: {
    flex: 1,
    flexDirection: "row",
  },
  nameProduct: {
    fontWeight: "bold",
    color: BG_ORANGE_600,
    fontSize: 18,
  },
});
