import { StyleSheet, Text, View, Animated, Easing } from "react-native";
import { useRef, useEffect, useCallback } from "react";
interface DiscProps {
  isActive: boolean;
}
const Disc = ({ isActive }: DiscProps) => {
  const discAnimatedValue = useRef(new Animated.Value(0)).current;
  const musicNoteAnimatedValue1 = useRef(new Animated.Value(0)).current;
  const musicNoteAnimatedValue2 = useRef(new Animated.Value(0)).current;
  const musicNoteAnimatedValue3 = useRef(new Animated.Value(0)).current;

  const discAnimLoopRef = useRef<any>();
  const musicAnimLoopRef1 = useRef<any>();
  const musicAnimLoopRef2 = useRef<any>();
  const musicAnimLoopRef3 = useRef<any>();

  const triggerAnimation = useCallback(() => {
    discAnimLoopRef.current = Animated.loop(
      Animated.timing(discAnimatedValue, {
        toValue: 1,
        duration: 3000,
        easing: Easing.linear,
        useNativeDriver: false,
      })
    );
    discAnimLoopRef.current.start();

    musicAnimLoopRef1.current = Animated.loop(
      Animated.sequence([
        Animated.timing(musicNoteAnimatedValue1, {
          toValue: 1,
          duration: 2000,
          easing: Easing.linear,
          useNativeDriver: false,
        }),
      ])
    );
    musicAnimLoopRef1.current.start();

    musicAnimLoopRef2.current = Animated.loop(
      Animated.sequence([
        Animated.timing(musicNoteAnimatedValue2, {
          toValue: 1,
          duration: 2000,
          easing: Easing.linear,
          useNativeDriver: false,
        }),
      ])
    );
    musicAnimLoopRef2.current.start();

    musicAnimLoopRef3.current = Animated.loop(
      Animated.sequence([
        Animated.timing(musicNoteAnimatedValue3, {
          toValue: 1,
          duration: 2000,
          easing: Easing.linear,
          useNativeDriver: false,
        }),
      ])
    );
    musicAnimLoopRef3.current.start();
  }, [discAnimatedValue]);

  useEffect(() => {
    if (isActive) {
      triggerAnimation();
    } else {
      discAnimLoopRef.current?.stop();
      musicAnimLoopRef1.current?.stop();
      musicAnimLoopRef2.current?.stop();
      musicAnimLoopRef3.current?.stop();
      discAnimatedValue.setValue(0);
      musicNoteAnimatedValue1.setValue(0);
      musicNoteAnimatedValue2.setValue(0);
      musicNoteAnimatedValue3.setValue(0);
    }
  }, [isActive, triggerAnimation, discAnimatedValue]);

  const discAnimation = {
    transform: [
      {
        rotate: discAnimatedValue.interpolate({
          inputRange: [0, 1],
          outputRange: ["30deg", "360deg"],
        }),
      },
    ],
  };

  const turnToTop = (animate: any) => {
    return {
      translateY: animate.interpolate({
        inputRange: [0, 1],
        outputRange: [0, -42],
      }),
    };
  };

  const turnToTopChild = (animate: any) => {
    return {
      translateY: animate.interpolate({
        inputRange: [0, 1],
        outputRange: [0, -32],
      }),
    };
  };

  const turnToLeft = (animate: any) => {
    return {
      translateX: animate.interpolate({
        inputRange: [0, 1],
        outputRange: [8, -16],
      }),
    };
  };

  const turnOpacity = (animate: any) => {
    return animate.interpolate({
      inputRange: [0, 0.8, 1],
      outputRange: [0, 1, 0],
    });
  };

  const musicNoteAnimation1 = {
    transform: [
      turnToTop(musicNoteAnimatedValue1),
      turnToLeft(musicNoteAnimatedValue1),
    ],
    opacity: turnOpacity(musicNoteAnimatedValue1),
  };

  const musicNoteAnimation2 = {
    transform: [turnToTop(musicNoteAnimatedValue2)],
    opacity: turnOpacity(musicNoteAnimatedValue2),
  };

  const musicNoteAnimation3 = {
    transform: [turnToTopChild(musicNoteAnimatedValue3)],
    opacity: turnOpacity(musicNoteAnimatedValue3),
  };

  return (
    <>
      <View
        style={{
          backgroundColor: "transparent",
        }}
      >
        <Animated.Image
          source={require("../../assets/images/music/disc.png")}
          style={[{ width: 30, height: 30, zIndex: 10 }, discAnimation]}
        />
      </View>
      <Animated.Image
        source={require("../../assets/images/music/floating-music-note.png")}
        style={[
          {
            position: "absolute",
            tintColor: "white",
            right: 20,
            zIndex: -1,
            top: 30,
            width: 15,
            height: 15,
          },
          musicNoteAnimation1,
        ]}
      />
      <Animated.Image
        source={require("../../assets/images/music/floating-music-note.png")}
        style={[
          {
            position: "absolute",
            tintColor: "white",
            right: 10,
            zIndex: -1,
            top: 30,
            width: 15,
            height: 15,
          },
          musicNoteAnimation2,
        ]}
      />

      <Animated.Image
        source={require("../../assets/images/music/floating-music-note.png")}
        style={[
          {
            position: "absolute",
            tintColor: "white",
            right: 18,
            zIndex: -1,
            top: 35,
            width: 15,
            height: 15,
          },
          musicNoteAnimation3,
        ]}
      />
    </>
  );
};

export default Disc;

const styles = StyleSheet.create({
  container: {},
});
