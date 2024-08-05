import {
  turnOpacity,
  turnToLeft,
  turnToSize,
  turnToTop,
} from "@/util/animateUtil";
import { WINDOW_WIDTH } from "@/util/utils";
import { useCallback, useEffect, useRef } from "react";
import { StyleSheet, View, Animated } from "react-native";
import { Easing } from "react-native-reanimated";
interface Haha {}
const getRandomSignedNum = () => (Math.random() < 0.5 ? -1 : 1);

const getRandomRotateOutput = () => {
  return [getRandomSignedNum() < 0 ? "-50deg" : "50deg", "0deg"];
};

const getRandomXOutput = () => {
  return getRandomSignedNum() < 0
    ? -Math.random() * WINDOW_WIDTH * 0.1
    : Math.random() * WINDOW_WIDTH * 0.1;
};
// Define an array with the desired numbers
const numbers = [10, 30, 50, 70, 90, 120];

export const randomIntFromInterval = () => {
  const randomIndex = Math.floor(Math.random() * numbers.length);
  const result = numbers[randomIndex];

  return result;
};

const Haha = () => {
  const hahaAnimatedValue = useRef(new Animated.Value(0)).current;

  const hahaAnimLoopRef = useRef<any>();

  const randomRotateOutput = useRef(getRandomRotateOutput()).current;
  const randomXOutput = useRef(getRandomXOutput()).current;
  const randomTopOutput = useRef(randomIntFromInterval()).current;

  const triggerAnimation = useCallback(() => {
    hahaAnimLoopRef.current = Animated.loop(
      Animated.timing(hahaAnimatedValue, {
        toValue: 1,
        duration: 2000,
        easing: Easing.linear,
        useNativeDriver: false,
      })
    );
    hahaAnimLoopRef.current.start();
  }, [hahaAnimatedValue]);

  useEffect(() => {
    triggerAnimation();
  }, []);

  const hahaAnimation = {
    transform: [
      turnToTop(hahaAnimatedValue, -randomTopOutput),
      //   {
      //     rotate: hahaAnimatedValue.interpolate({
      //       inputRange: [0, 1],
      //       outputRange: randomRotateOutput,
      //     }),
      //   },
      turnToLeft(hahaAnimatedValue, randomXOutput),
    ],
    opacity: turnOpacity(hahaAnimatedValue),
    with: turnToSize(hahaAnimatedValue),
  };
  return (
    <>
      <View
        style={{
          position: "absolute",
          top: 10,
          left: 0,
        }}></View>
      <Animated.Image
        source={require("../../assets/images/face/haha.png")}
        style={[
          {
            position: "absolute",
            backgroundColor: "transparent",
            right: -5,
            zIndex: -1,
            top: -15,
            width: 40,
            height: 40,
          },
          hahaAnimation,
        ]}
      />
    </>
  );
};

export default Haha;

const styles = StyleSheet.create({});
