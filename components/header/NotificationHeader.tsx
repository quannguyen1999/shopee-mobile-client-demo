import { SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import { BG_ORANGE_600 } from "@/constants/colors";

const NotificationHeader = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.textInputContainer}>Thông báo</Text>
      </View>

      <View>
        <MaterialCommunityIcons
          style={styles.iconItem}
          name="cart-outline"
          size={26}
          color={BG_ORANGE_600}
        />
        <Text style={styles.iconNumberOfItem}>99+</Text>
      </View>
      <View>
        <AntDesign
          style={styles.iconItem}
          name="wechat"
          size={26}
          color={BG_ORANGE_600}
        />
        <Text style={styles.iconNumberOfItem}>99+</Text>
      </View>
    </SafeAreaView>
  );
};

export default NotificationHeader;

const styles = StyleSheet.create({
  container: {
    marginTop: -12,
    marginLeft: -30,
    flex: 1,
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  inputContainer: {
    gap: 5,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: "white",
    width: "70%",
  },
  textInputContainer: {
    fontSize: 20,
    fontWeight: "bold",
    paddingLeft: "20%",
  },
  iconItem: {
    position: "relative",
  },
  iconNumberOfItem: {
    position: "absolute",
    top: -6,
    right: -6,
    fontSize: 10,
    backgroundColor: "rgb(234 88 12)",
    color: "white",
    padding: 2,
    borderRadius: 9999,
    borderWidth: 1,
    borderColor: "white",
  },
});
