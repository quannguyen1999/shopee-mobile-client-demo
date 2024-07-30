import { StyleSheet, Text, TextInput, View } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import EvilIcons from "@expo/vector-icons/EvilIcons";

const MenuHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer} >
        <EvilIcons name="search" size={24} color="black" />
        <TextInput style={styles.input} placeholder="Sex toy xxx" />
        <EvilIcons name="camera" size={24} color="black" />
      </View>

      <View >
        <MaterialCommunityIcons
          style={styles.iconItem}
          name="cart-outline"
          size={26}
          color="black"
        />
        <Text style={styles.iconNumberOfItem}>99+</Text>
      </View>
      <View >
        <AntDesign
          style={styles.iconItem}
          name="wechat"
          size={26}
          color="black"
        />
        <Text style={styles.iconNumberOfItem}>99+</Text>
      </View>
    </View>
  );
};

export default MenuHeader;

const styles = StyleSheet.create({
  container: {
    marginTop: -12,
    marginLeft: -30,
    flex: 1,
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: 'transparent'
  },
  inputContainer: {
    gap: 5,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: 'white',
    width: '70%'
  },
  input: {
    width: "75%",
    height: 40,
    borderWidth: 1,
    padding: 1,
    borderColor: "white",
    backgroundColor: "white",
    color: 'red'
  },
  iconItem: {
    position: "relative",
    color: "white",
  },
  iconNumberOfItem: {
    position: "absolute",
    top: -6,
    right: -6,
    fontSize: 10,
    backgroundColor: "rgb(234 88 12)",
    color: "white",
    padding: 2,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "white",
  },
});
