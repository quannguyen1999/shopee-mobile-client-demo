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
import { useCallback, useEffect, useRef } from "react";

const MenuHeader = () => {
  const router = useRouter();
  const animatedValue1 = useRef(new Animated.Value(0)).current;

  const animLoopRef1 = useRef<any>();

  const triggerAnimation = useCallback(() => {
    animLoopRef1.current = Animated.loop(
      Animated.timing(animatedValue1, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: false,
      })
    );
    animLoopRef1.current.start();
  }, [animatedValue1]);

  useEffect(() => {
    triggerAnimation();
  }, []);

  const turnToTop = (animate: any) => {
    return {
      translateY: animate.interpolate({
        inputRange: [0, 1],
        outputRange: [0, -30],
      }),
    };
  };

  const turnOpacity = (animate: any) => {
    return animate.interpolate({
      inputRange: [0, 0.7],
      outputRange: [1, 0],
    });
  };

  const animation1 = {
    transform: [
      turnToTop(animatedValue1),
    ],
    opacity: turnOpacity(animatedValue1),
  };

  const navigateToChatPage = () => {
    router.push("/conversation");
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <EvilIcons name="search" size={24} color="black" />
        <View style={styles.input} />
        <Animated.Text style={[styles.animateValue1,animation1]}>
          Quần xịp lọt khe
        </Animated.Text>
        <EvilIcons name="camera" size={24} color="black" />
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
      <View>
        <Pressable
          android_ripple={{ color: "white" }}
          onPress={navigateToChatPage}
        >
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
    zIndex: 1
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
    right: -6,
    fontSize: 10,
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
    fontSize: 15,
    fontWeight: "600",
  },
});
