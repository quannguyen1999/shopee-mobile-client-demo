import { StyleSheet, Text, View, Animated, Easing } from "react-native";
import { useRef, useEffect, useCallback } from "react";
import { AntDesign } from "@expo/vector-icons";
interface HeartProps {
  sizeIcon: number;
  colorIcon: string;
}
const Heart = ({ sizeIcon, colorIcon }: HeartProps) => {
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
        //   musicNoteAnimation1,
        ]}
      />
    </>
  );
};

export default Heart;

const styles = StyleSheet.create({
  container: {},
});
