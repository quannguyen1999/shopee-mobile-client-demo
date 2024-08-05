import { StyleSheet, Text, View, Animated, Easing } from "react-native";
import { useRef, useEffect, useCallback } from "react";
import { AntDesign, Entypo, Ionicons } from "@expo/vector-icons";
import { Image, ImageSource } from "expo-image";
import { BG_GRAY_400, BG_SKY_400, BG_SLATE_200 } from "@/constants/colors";
interface CharacterProps {
  imageSource: ImageSource;
}
const CatHug = ({ imageSource }: CharacterProps) => {
  const cryValue1 = useRef(new Animated.Value(0)).current;

  const cryAnimLoopRef1 = useRef<any>();

  useEffect(() => {
    cryAnimLoopRef1.current = Animated.loop(
      Animated.timing(cryValue1, {
        toValue: 1,
        duration: 15000,
        easing: Easing.linear,
        useNativeDriver: false,
      })
    );
    cryAnimLoopRef1.current.start();
  }, []);

  const turnToBottom = (animate: any, toOutPutRange: number) => {
    return {
      translateY: animate.interpolate({
        inputRange: [0, 1],
        outputRange: [0, toOutPutRange],
      }),
    };
  };

  const turnToRight = (animate: any) => {
    return {
      translateX: animate.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 180],
      }),
    };
  };

  const turnOpacity = (animate: any) => {
    return animate.interpolate({
      inputRange: [0, 0.8, 1],
      outputRange: [0, 1, 0],
    });
  };

  
  const turnPadding = (animate: any) => {
    return animate.interpolate({
      inputRange: [0, 0.8],
      outputRange: [0, 10],
    });
  };

  const cryAnimation1 = {
    // transform: [turnToBottom(cryValue1, 50), turnToRight(cryValue1)],
    opacity: turnOpacity(cryValue1),
    padding: turnPadding(cryValue1)
  };

  return (
    <>
      <Image style={styles.image1} source={imageSource} contentFit="fill" />
      <Animated.View style={[styles.text, cryAnimation1]}>
      
      <Animated.Text>Don't Worry Bro,</Animated.Text>
        <Animated.Text> I Will kiss your ash</Animated.Text>
      </Animated.View>
    </>
  );
};

export default CatHug;

const styles = StyleSheet.create({
  image1: {
    height: "100%",
    width: "100%",
    borderRadius: 9999,
    zIndex: 0,
  },
  text: {
    position: "absolute",
    right: -100,
    top: 70,
    zIndex: -1,
    borderWidth: 2,
    borderColor: BG_GRAY_400,
    borderRadius: 9999,
    fontWeight: '800'
  },
});
