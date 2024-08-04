import { View, StyleSheet, Text, Pressable, Button } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import AntDesign from "@expo/vector-icons/AntDesign";
import { BG_ORANGE_600, BG_RED_500 } from "@/constants/colors";
import { Link } from "expo-router";
import ActionSheet from "@/components/ActionSheet";
import ProductPopUp from "../popup/ProductPopup";

const ProductButton = () => {
  const size = 25;
  const navigateToOrderPage = () => {
    // console.log(" ok order");
  };
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
        <ActionSheet
          button={
            <AntDesign
              style={styles.icon}
              name="shoppingcart"
              size={size}
              color={BG_RED_500}
            />
          }
          body={[
            <ProductPopUp />,
            <View
              style={{
                width: "100%",
                height: 50,
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: BG_ORANGE_600,
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  color: "white",
                }}
              >
                Add Order
              </Text>
            </View>,
          ]}
        />
      </View>
      <View style={styles.childContainer}>
        <Pressable
          android_ripple={{ color: "white" }}
          onPress={navigateToOrderPage}
        >
          <Text
            style={{
              color: "white",
              fontSize: 15,
            }}
          >
            Mua Ngay
          </Text>
        </Pressable>
      </View>
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
    margin: "auto",
    height: "100%",
    padding: 10,
    color: "white",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    backgroundColor: BG_RED_500,
  },
});
