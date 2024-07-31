import { StyleSheet, Text, TextInput, View, Pressable } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import { useNavigation, useRouter } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import {  Dimensions } from 'react-native';
const ProductHeader = () => {
  const navigate = useNavigation();
  const goBackHomePage = () => {
    navigate.goBack();
  };
  return (
    <View style={styles.container}>
      <View>
        <Pressable android_ripple={{ color: "white" }} onPress={goBackHomePage}>
          <View style={styles.containerLeft}>
            <AntDesign
              name="arrowleft"
              size={24}
              color="white"
            />
          
          </View>
        </Pressable>
      </View>
      <View style={styles.containerRight}>
        <View>
          <FontAwesome name="share" size={24} color="white" />
        </View>
        <View>
          <MaterialCommunityIcons
            style={styles.iconItem}
            name="cart-outline"
            size={26}
            color="black"
          />
          <Text style={styles.iconNumberOfItem}>99+</Text>
        </View>
      </View>
    </View>
  );
};

export default ProductHeader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    // backgroundColor: 'red',
    width: Dimensions.get('window').width,
  },
  containerLeft: {
    width: 40,
    height: 32,
    borderRadius: 9999,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "gray",
    opacity: 0.7,
  },
  containerRight: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingRight: 40,
    gap: 10,
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
