import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Pressable,
  SafeAreaView,
} from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import { useNavigation, useRouter } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Dimensions } from "react-native";
import { useRef, useEffect, useState } from "react";
import { Animated } from "react-native";
import { BG_ORANGE_200, BG_ORANGE_600 } from "@/constants/colors";
interface ChatHeaderProps {
  scroll?: number;
}
const OrderHeader = ({ scroll = 0 }: ChatHeaderProps) => {
  const router = useRouter();
  const animatedValue = useRef(new Animated.Value(1)).current;

  const navigate = useNavigation();

  const goBackHomePage = () => {
    navigate.goBack();
  };

  const navigateToChatPage = () => {
    router.push("/conversation");
  };

  useEffect(() => {
    // console.log(scroll)
    animatedValue.setValue(scroll);
  }, [scroll]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerLeft}>
        <Pressable
          android_ripple={{ color: BG_ORANGE_600 }}
          onPress={goBackHomePage}>
          <Animated.View
            style={[
              styles.containerLeftView,
              {
                opacity: animatedValue.interpolate({
                  inputRange: [0, 100],
                  outputRange: [1, 0],
                }),
              },
            ]}></Animated.View>
          <Animated.Text
            style={{
              color: animatedValue.interpolate({
                inputRange: [0, 100],
                outputRange: [BG_ORANGE_600, BG_ORANGE_200],
              }),
              position: "absolute",
              top: "20%",
              left: "25%",
            }}>
            <AntDesign name="arrowleft" size={25} />
          </Animated.Text>
        </Pressable>
      </View>
      <View style={styles.containerRight}>
        <Text style={styles.title}>Giỏ Hàng</Text>
      </View>
      <View>
        <Pressable
          android_ripple={{ color: "white" }}
          onPress={navigateToChatPage}>
          <AntDesign
            style={styles.iconItemChat}
            name="wechat"
            size={26}
            color="black"
          />
          <Text style={styles.iconNumberOfItemChat}>99</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default OrderHeader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    width: Dimensions.get("window").width,
  },
  containerLeft: {
    justifyContent: "center",
    alignItems: "center",
  },
  containerLeftView: {
    width: 40,
    height: 32,
    borderRadius: 9999,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "red",
  },
  containerRight: {
    width: "70%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "red",
    // flex: 1,
  },
  iconItem: {
    position: "relative",
  },
  iconNumberOfItem: {
    position: "absolute",
    top: -6,
    right: -5,
    backgroundColor: "rgb(234 88 12)",
    padding: 2,
    borderRadius: 9999,
    borderWidth: 1,
  },
  iconItemChat: {
    position: "relative",
    color: BG_ORANGE_600,
  },
  iconNumberOfItemChat: {
    position: "absolute",
    top: -2,
    right: -5,
    fontSize: 8,
    backgroundColor: "rgb(234 88 12)",
    color: "white",
    padding: 2,
    borderRadius: 5,
  },
  iconTextNumberOfItem: {
    fontSize: 8,
    color: BG_ORANGE_600,
  },
  title: {
    fontSize: 20,
    fontWeight: "500",
  },
});