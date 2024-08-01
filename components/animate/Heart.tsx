import { StyleSheet, Text, View, Animated, Easing } from "react-native";
import { useRef, useEffect, useCallback } from "react";
import { AntDesign } from "@expo/vector-icons";
interface HeartProps {
  sizeIcon: number;
  colorIcon: string;
  isActive: boolean
}
const Heart = ({ sizeIcon, colorIcon, isActive = false }: HeartProps) => {
  const hahaAnimatedValue = useRef(new Animated.Value(0)).current;

  const hahaAnimLoopRef = useRef<any>();

  const triggerAnimation = useCallback(() => {
    hahaAnimLoopRef.current = Animated.loop(
      Animated.timing(hahaAnimatedValue, {
        toValue: 1,
        duration: 3000,
        easing: Easing.linear,
        useNativeDriver: false,
      })
    );
    hahaAnimLoopRef.current.start();
  }, [hahaAnimatedValue]);

  useEffect(() => {
    if(isActive){
      triggerAnimation();
    }else{
      hahaAnimLoopRef.current?.stop();
      hahaAnimatedValue.setValue(0);
    }
    
  }, [isActive, triggerAnimation, hahaAnimatedValue]);

  const turnToLeft = (animate: any, toOutputRange: number) => {
    return {
      translateX: animate.interpolate({
        inputRange: [0, 1],
        outputRange: [8, toOutputRange],
      }),
    };
  };

  const turnToTop = (animate: any, toOutRange: number) => {
    return {
      translateY: animate.interpolate({
        inputRange: [0, 1],
        outputRange: [0, toOutRange],
      }),
    };
  };

  const turnToSize = (animate: any) => {
    return {
      translateY: animate.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 20],
      }),
    };
  };

  const turnOpacity = (animate: any) => {
    return animate.interpolate({
      inputRange: [0, 0.8, 1],
      outputRange: [0, 1, 0],
    });
  };

  const hahaAnimation = {
    transform: [turnToTop(hahaAnimatedValue, -92)],
    opacity: turnOpacity(hahaAnimatedValue),
    with: turnToSize(hahaAnimatedValue),
  };

  const hahaAnimation2 = {
    transform: [turnToTop(hahaAnimatedValue, -62), turnToLeft(hahaAnimatedValue, -16)],
    opacity: turnOpacity(hahaAnimatedValue),
    with: turnToSize(hahaAnimatedValue),
  };

  const hahaAnimation3 = {
    transform: [turnToTop(hahaAnimatedValue, -62),turnToLeft(hahaAnimatedValue, 16)],
    opacity: turnOpacity(hahaAnimatedValue),
    with: turnToSize(hahaAnimatedValue),
  };

  

  return (
    <>
      <AntDesign name="heart" size={sizeIcon} color={colorIcon} />
      <View
        style={{
          position: "absolute",
          top: 0,
          left: 0,
        }}
      ></View>
      <Animated.Image
        source={require("../../assets/images/face/haha.png")}
        style={[
          {
            position: "absolute",
            backgroundColor: "transparent",
            right: 0,
            zIndex: -1,
            top: 0,
            width: 40,
            height: 40,
          },
          hahaAnimation
        ]}
      />

<Animated.Image
        source={require("../../assets/images/face/haha.png")}
        style={[
          {
            position: "absolute",
            backgroundColor: "transparent",
            right: 0,
            zIndex: -1,
            top: 0,
            width: 40,
            height: 40,
          },
          hahaAnimation2
        ]}
      />

<Animated.Image
        source={require("../../assets/images/face/haha.png")}
        style={[
          {
            position: "absolute",
            backgroundColor: "transparent",
            right: 0,
            zIndex: -1,
            top: 0,
            width: 40,
            height: 40,
          },
          hahaAnimation3
        ]}
      />
    </>
  );
};

export default Heart;

const styles = StyleSheet.create({
  container: {},
});
