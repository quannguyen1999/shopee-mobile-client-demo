import { StyleSheet, Text, View } from "react-native";
import { AntDesign, Entypo, FontAwesome } from "@expo/vector-icons";
import { SafeAreaView, ScrollView, StatusBar, TextInput } from "react-native";
import { BG_GRAY_400 } from "@/constants/colors";

const LiveInput = () => {
  const sizeIcon = 25;
  const colorIcon = BG_GRAY_400;
  return (
    <>
      <View style={styles.icon}>
        <AntDesign name="shoppingcart" size={sizeIcon} color={colorIcon} />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Đồ ngủ cho chó"
          placeholderTextColor="white"
        />
      </View>

      <View style={styles.icon}>
        <Entypo
          name="dots-three-horizontal"
          size={sizeIcon}
          color={colorIcon}
        />
      </View>
      <View style={styles.icon}>
        <FontAwesome name="share" size={sizeIcon} color={colorIcon} />
      </View>
      <View style={styles.icon}>
        <AntDesign name="heart" size={sizeIcon} color={colorIcon} />
      </View>
    </>
  );
};

export default LiveInput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  backgroundVideo: {
    width: "100%",
    height: "100%",
  },
  childContainer: {
    position: "absolute",
    bottom: "12%",
    left: 0,
    width: "100%",
    height: 50,
    flex: 1,
    zIndex: 14,
    // backgroundColor: "red",
    flexDirection: "row",
    gap: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    width: "45%",
    // flex: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    paddingLeft: 10,
    borderRadius: 9999,
    borderColor: "white",
    backgroundColor: BG_GRAY_400,
    opacity: 0.5,
    color: "white",
    fontSize: 16,
  },
  icon: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
