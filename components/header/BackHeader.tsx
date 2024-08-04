import { StyleSheet, Text, TextInput, View, Pressable, SafeAreaView } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import { useNavigation, useRouter } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Dimensions } from "react-native";
import { useRef, useEffect, useState } from "react";
import { Animated } from "react-native";
import { BG_ORANGE_200, BG_ORANGE_600 } from "@/constants/colors";
interface ProductHeaderProps {
  scroll?: number;
}
const BackHeader = ({ scroll = 0 }: ProductHeaderProps) => {
  // const [color, setColor] = useState();
  const animatedValue = useRef(new Animated.Value(1)).current;

  const navigate = useNavigation();

  const goBackHomePage = () => {
    navigate.goBack();
  };

  useEffect(() => {
    // console.log(scroll)
    animatedValue.setValue(scroll);
  }, [scroll]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerLeft}>
        <Pressable android_ripple={{ color: "white" }} onPress={goBackHomePage}>
          <Animated.View
            style={[
              styles.containerLeftView,
              {
                opacity: animatedValue.interpolate({
                  inputRange: [0, 100],
                  outputRange: [1, 0],
                }),
              },
            ]}
          ></Animated.View>
          <Animated.Text
            style={{
              color: animatedValue.interpolate({
                inputRange: [0, 100],
                outputRange: ["white", BG_ORANGE_200],
              }),
              position: "absolute",
              top: "20%",
              left: "25%",
            }}
          >
            <AntDesign name="arrowleft" size={20} />
          </Animated.Text>
        </Pressable>
      </View>
      <View style={styles.containerRight}>
       
      </View>
    </SafeAreaView>
  );
};

export default BackHeader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    width: Dimensions.get("window").width,
  },
  containerLeft: {
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  containerLeftView: {
    width: 40,
    height: 32,
    borderRadius: 9999,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "gray",
  },
  containerRight: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: 10,
    gap: 10,
    // backgroundColor: 'white'
  },
  iconItem: {
    position: "relative",
    // color: "white",
  },
  iconNumberOfItem: {
    position: "absolute",
    top: -6,
    right: -6,

    backgroundColor: "rgb(234 88 12)",

    padding: 2,
    borderRadius: 9999,
    borderWidth: 1,
    borderColor: "white",
  },
  iconTextNumberOfItem: {
    fontSize: 8,
    color: "white",
  },
});
