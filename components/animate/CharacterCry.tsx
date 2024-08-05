import { StyleSheet, Text, View, Animated, Easing } from "react-native";
import { useRef, useEffect, useCallback } from "react";
import { AntDesign, Entypo, Ionicons } from "@expo/vector-icons";
import { Image, ImageSource } from "expo-image";
import { BG_SKY_400 } from "@/constants/colors";
interface CharacterProps {
  imageSource: ImageSource;
}
const CharacterCry = ({ imageSource }: CharacterProps) => {
  const cryValue1 = useRef(new Animated.Value(0)).current;
  const cryValue2 = useRef(new Animated.Value(0)).current;

  const cryAnimLoopRef1 = useRef<any>();
  const cryAnimLoopRef2 = useRef<any>();

  useEffect(() => {
    cryAnimLoopRef1.current = Animated.loop(
      Animated.timing(cryValue1, {
        toValue: 1,
        duration: 3000,
        easing: Easing.linear,
        useNativeDriver: false,
      })
    );
    cryAnimLoopRef1.current.start();

    cryAnimLoopRef2.current = Animated.loop(
      Animated.timing(cryValue2, {
        toValue: 1,
        duration: 4000,
        easing: Easing.linear,
        useNativeDriver: false,
      })
    );
    cryAnimLoopRef2.current.start();
  }, []);

  const turnToTop = (animate: any, toOutPutRange: number) => {
    return {
      translateY: animate.interpolate({
        inputRange: [0, 1],
        outputRange: [0, toOutPutRange],
      }),
    };
  };

  const turnOpacity = (animate: any) => {
    return animate.interpolate({
      inputRange: [0, 0.8, 1],
      outputRange: [0, 1, 0],
    });
  };

  const cryAnimation1 = {
    transform: [turnToTop(cryValue1, 120)],
    opacity: turnOpacity(cryValue1),
  };

  const cryAnimation2 = {
    transform: [turnToTop(cryValue2, 120)],
    opacity: turnOpacity(cryValue2),
  };

  return (
    <>
      <Image
        style={styles.image1}
        source={imageSource}
        contentFit="fill"
      />
      <Animated.View style={[styles.cryOne, cryAnimation1]}>
        <Ionicons name="water" size={24} color={BG_SKY_400} />
      </Animated.View>
      <Animated.View style={[styles.cryTwo, cryAnimation2]}>
        <Ionicons name="water" size={24} color={BG_SKY_400} />
      </Animated.View>
    </>
  );
};

export default CharacterCry;

const styles = StyleSheet.create({
  image1: {
    height: 200,
    width: 220,
    borderRadius: 9999,
    zIndex: 0,
  },
  cryOne: {
    position: "absolute",
    zIndex: 1,
    top: 80,
    left: 60,
  },
  cryTwo: {
    position: "absolute",
    zIndex: 1,
    top: 80,
    left: 120,
  },
});
