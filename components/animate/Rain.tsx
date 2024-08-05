import { StyleSheet, Text, View, Animated, Easing } from "react-native";
import { useRef, useEffect, useCallback } from "react";
import {
  AntDesign,
  Entypo,
  Feather,
  Fontisto,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { Image, ImageSource } from "expo-image";
import {
  BG_GRAY_400,
  BG_SKY_400,
  BG_SLATE_200,
  BG_YELLOW_300,
  BG_YELLOW_800,
} from "@/constants/colors";
interface RainProps {
  hideSun: boolean;
}
const Rain = ({ hideSun = false }: RainProps) => {
  const skyValue1 = useRef(new Animated.Value(0)).current;
  const skyValue2 = useRef(new Animated.Value(0)).current;
  const skyValue3 = useRef(new Animated.Value(0)).current;
  const skyValue4 = useRef(new Animated.Value(0)).current;
  const electricValue1 = useRef(new Animated.Value(0)).current;
  const sunValue1 = useRef(new Animated.Value(0)).current;

  const skyAnimLoopRef1 = useRef<any>();
  const skyAnimLoopRef2 = useRef<any>();
  const skyAnimLoopRef3 = useRef<any>();
  const skyAnimLoopRef4 = useRef<any>();
  const electricAnimLoopRef1 = useRef<any>();
  const sunAnimLoopRef1 = useRef<any>();

  useEffect(() => {
    sunAnimLoopRef1.current = Animated.loop(
      Animated.timing(sunValue1, {
        toValue: 1,
        duration: 7000,
        easing: Easing.linear,
        useNativeDriver: false,
      })
    );

    sunAnimLoopRef1.current.start();

    electricAnimLoopRef1.current = Animated.loop(
      Animated.timing(electricValue1, {
        toValue: 1,
        duration: 500,
        easing: Easing.linear,
        useNativeDriver: false,
      })
    );

    electricAnimLoopRef1.current.start();

    skyAnimLoopRef1.current = Animated.timing(skyValue1, {
      toValue: 1,
      duration: 4000,
      easing: Easing.linear,
      useNativeDriver: false,
    });

    skyAnimLoopRef1.current.start();

    skyAnimLoopRef2.current = Animated.loop(
      Animated.timing(skyValue2, {
        toValue: 1,
        duration: 3000,
        easing: Easing.linear,
        useNativeDriver: false,
      })
    );

    skyAnimLoopRef2.current.start();

    skyAnimLoopRef3.current = Animated.loop(
      Animated.timing(skyValue3, {
        toValue: 1,
        duration: 4000,
        easing: Easing.linear,
        useNativeDriver: false,
      })
    );

    skyAnimLoopRef3.current.start();

    skyAnimLoopRef4.current = Animated.loop(
      Animated.timing(skyValue4, {
        toValue: 1,
        duration: 6000,
        easing: Easing.linear,
        useNativeDriver: false,
      })
    );

    skyAnimLoopRef4.current.start();
  }, []);

  const rotateAnimation = {
    transform: [
      {
        rotate: sunValue1.interpolate({
          inputRange: [0, 1],
          outputRange: ["30deg", "360deg"],
        }),
      },
    ],
  };

  const turnToBottom = (animate: any, toOutPutRange: number) => {
    return {
      translateY: animate.interpolate({
        inputRange: [0, 1],
        outputRange: [0, toOutPutRange],
      }),
    };
  };

  const turnToLeft = (animate: any) => {
    return {
      translateX: animate.interpolate({
        inputRange: [0, 1],
        outputRange: [0, -90],
      }),
    };
  };

  const turnOpacity = (animate: any, toOutPutRange: number = 1) => {
    return animate.interpolate({
      inputRange: [0, 0.8, 1],
      outputRange: [0, 1, toOutPutRange],
    });
  };

  const skyAnimation1 = {
    opacity: turnOpacity(skyValue1),
    transform: [turnToLeft(skyValue1)],
  };

  const skyAnimation2 = {
    opacity: turnOpacity(skyValue2, 0),
    transform: [turnToBottom(skyValue2, 120)],
  };

  const skyAnimation3 = {
    opacity: turnOpacity(skyValue3, 0),
    transform: [turnToBottom(skyValue3, 140)],
  };

  const skyAnimation4 = {
    opacity: turnOpacity(skyValue4, 0),
    transform: [turnToBottom(skyValue4, 170)],
  };

  const skyAnimation5 = {
    opacity: turnOpacity(skyValue3, 0),
    transform: [turnToBottom(skyValue4, 190)],
  };

  const skyAnimation6 = {
    opacity: turnOpacity(skyValue2, 0),
    transform: [turnToBottom(skyValue2, 100)],
  };

  const electricAnimation1 = {
    opacity: turnOpacity(electricValue1, 0),
  };

  const sunAnimation1 = {
    transform: [
      {
        rotate: sunValue1.interpolate({
          inputRange: [0, 1],
          outputRange: ["30deg", "360deg"],
        }),
      },
    ],
  };

  return (
    <>
      <Animated.View style={[styles.sky, skyAnimation1]}>
        <Image
          style={styles.imageSky}
          source={require("../../assets/images/sky/sky1.png")}
        />
      </Animated.View>
      {!hideSun && (
        <>
          <Animated.View style={[styles.sky1, skyAnimation1]}>
            <Image
              style={styles.imageSky}
              source={require("../../assets/images/sky/sky1.png")}
            />
          </Animated.View>
          <Animated.View style={[styles.sun, sunAnimation1]}>
            <Feather name="sun" size={35} color={BG_YELLOW_800} />
          </Animated.View>
          <Animated.View style={[styles.electric, electricAnimation1]}>
            <Image
              style={styles.imageElectric}
              source={require("../../assets/images/sky/electric.png")}
            />
          </Animated.View>
        </>
      )}

      <Animated.View style={[styles.sky2, skyAnimation2]}>
        <Entypo name="water" size={24} color={BG_SKY_400} />
      </Animated.View>
      <Animated.View style={[styles.sky3, skyAnimation3]}>
        <Entypo name="water" size={24} color={BG_SKY_400} />
      </Animated.View>
      <Animated.View style={[styles.sky4, skyAnimation4]}>
        <Entypo name="water" size={24} color={BG_SKY_400} />
      </Animated.View>
      <Animated.View style={[styles.sky5, skyAnimation5]}>
        <Ionicons name="water-sharp" size={24} color={BG_SKY_400} />
      </Animated.View>
      <Animated.View style={[styles.sky6, skyAnimation6]}>
        <Ionicons name="water-sharp" size={24} color={BG_SKY_400} />
      </Animated.View>
    </>
  );
};

export default Rain;

const styles = StyleSheet.create({
  sky: {
    height: "100%",
    width: "100%",
    borderRadius: 9999,
    zIndex: 0,
    position: "absolute",
    top: 15,
    right: -60,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    tintColor: BG_SKY_400,
  },
  sky1: {
    height: "100%",
    width: "100%",
    borderRadius: 9999,
    zIndex: 1,
    position: "absolute",
    top: -10,
    right: -105,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    tintColor: BG_SKY_400,
  },
  sun: {
    height: "100%",
    width: "100%",
    borderRadius: 9999,
    zIndex: -20,
    position: "absolute",
    top: -30,
    right: -35,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    tintColor: BG_SKY_400,
  },
  electric: {
    height: "100%",
    width: "100%",
    borderRadius: 9999,
    zIndex: -10,
    position: "absolute",
    top: 33,
    right: -23,

    // opacity: 0,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    tintColor: BG_SKY_400,
  },
  imageElectric: {
    width: 35,
    height: 35,
  },
  imageSky: {
    width: 50,
    height: 50,
  },
  imageSun: {
    width: 70,
    height: 65,
    backgroundColor: "transparent",
  },
  sky2: {
    position: "absolute",
    top: 50,
    right: 100,
  },
  sky3: {
    position: "absolute",
    top: 50,
    right: 50,
  },
  sky4: {
    position: "absolute",
    top: 70,
    right: 10,
  },
  sky5: {
    position: "absolute",
    top: 50,
    right: 80,
  },
  sky6: {
    position: "absolute",
    top: 50,
    right: 40,
  },
});
