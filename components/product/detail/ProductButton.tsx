import { View, StyleSheet, Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import AntDesign from "@expo/vector-icons/AntDesign";
import { BG_RED_500 } from "@/constants/colors";
import { Link } from "expo-router";

const ProductButton = () => {
  const size = 25;

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.iconContainer,
          { borderRightWidth: 1, borderColor: "gray" },
        ]}
      >
        <Ionicons
          style={styles.icon}
          name="logo-wechat"
          size={size}
          color={BG_RED_500}
        />
      </View>
      <View style={styles.iconContainer}>
        <AntDesign
          style={styles.icon}
          name="shoppingcart"
          size={size}
          color={BG_RED_500}
        />
      </View>
      <Link href="/product/modal" style={styles.childContainer}>
        Mua Ngay      
      </Link>
    </View>
  );
};
export default ProductButton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
  iconContainer: {
    width: "20%",
    padding: 5,
    // flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {},
  childContainer: {
    width: "100%",
    flex: 1,
    margin: 'auto',
    padding: 10,
    color: 'white',
    justifyContent: "center",
    alignItems: "center",
    textAlign: 'center',
    backgroundColor: BG_RED_500,
  },
});
