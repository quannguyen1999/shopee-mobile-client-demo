import {
  Animated,
  Easing,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import { useRouter } from "expo-router";
import { BG_ORANGE_600 } from "@/constants/colors";
import { useCallback, useEffect, useRef, useState } from "react";
import { turnOpacity, turnToTop } from "@/util/animateUtil";

const MenuHeader = () => {
  const router = useRouter();
  const animatedValue1 = useRef(new Animated.Value(0)).current;
  const animatedValue2 = useRef(new Animated.Value(0)).current;
  const animatedValue3 = useRef(new Animated.Value(0)).current;

  const [opacity2, setOpacity2] = useState(0);

  const animLoopRef1 = useRef<any>();
  const animLoopRef2 = useRef<any>();
  const animLoopRef3 = useRef<any>();

  //TODO test animate
  const reset = () => {
    animatedValue1.setValue(0);
    animatedValue2.setValue(0);

    triggerAnimation();
  };



  const triggerAnimation = useCallback(() => {
    setOpacity2(0);
    animLoopRef1.current = Animated.loop(Animated.sequence([
      Animated.timing(animatedValue1, {
        toValue: 1,
        duration: 500,
        useNativeDriver: false,
        delay: 3000,
      }),
    ]));

    animLoopRef2.current = Animated.sequence([
      Animated.timing(animatedValue2, {
        toValue: 1,
        duration: 500,
        useNativeDriver: false,
        delay: 1000,
      }),
    ]);

    animLoopRef1.current.start(() => {
      setOpacity2(1);
      animLoopRef2.current.start();
    });
  }, [animatedValue1, animatedValue2]);

  const animation1 = {
    transform: [turnToTop(animatedValue1, -30)],
    opacity: animatedValue1.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 1],
    }),
  };

  const animation2 = {
    transform: [turnToTop(animatedValue2, -30)],
    opacity: animatedValue2.interpolate({
      inputRange: [0, 1],
      outputRange: [opacity2, 1],
    }),
  };

  const animation3 = {
    transform: [turnToTop(animatedValue3, -30)],
    opacity: animatedValue3.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, 1, 0],
    }),
  };

  const navigateToChatPage = () => {
    router.push("/conversation");
  };

  const navigateToOrderPage = () => {
    router.push("/order");
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <EvilIcons name="search" size={24} color="black" />
        <View style={styles.input} />
        <Animated.Text style={[styles.animateValue1, animation1]}>
          Mèo cởi chuồng
        </Animated.Text>
        <Animated.Text style={[styles.animateValue1, animation2]}>
          Quần xịp lột khe
        </Animated.Text>
        {/* <Animated.Text style={[styles.animateValue1, animation3]}>
          Chó Shiba múa quạt
        </Animated.Text> */}
        <EvilIcons name="camera" size={24} color="black" />
      </View>

      <Pressable onPress={navigateToOrderPage}>
        <MaterialCommunityIcons
          style={styles.iconItem}
          name="cart-outline"
          size={26}
          color="black"
        />
        <Text style={styles.iconNumberOfItem}>99+</Text>
      </Pressable>
      <View>
        <Pressable
          android_ripple={{ color: "white" }}
          onPress={navigateToChatPage}>
          <AntDesign
            style={styles.iconItem}
            name="wechat"
            size={26}
            color="black"
          />
          <Text style={styles.iconNumberOfItem}>99+</Text>
        </Pressable>
      </View>
    </SafeAreaView>
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
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: "white",
    width: "70%",
    zIndex: 1,
  },
  input: {
    width: "75%",
    height: 40,
    borderWidth: 1,
    padding: 1,
    borderColor: "white",
    backgroundColor: "white",
    color: "red",
    fontSize: 16,
  },
  iconItem: {
    position: "relative",
    color: "white",
  },
  iconNumberOfItem: {
    position: "absolute",
    top: -6,
    right: -8,
    fontSize: 8,
    backgroundColor: "rgb(234 88 12)",
    color: "white",
    padding: 2,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "white",
  },
  animateValue1: {
    position: "absolute",
    top: 10,
    left: "16%",
    zIndex: 1,
    color: BG_ORANGE_600,
    fontSize: 16,
    opacity: 0,
    fontWeight: "600",
  },
});
