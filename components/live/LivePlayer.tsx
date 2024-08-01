import { StyleSheet, Text, View } from "react-native";
import { useVideoPlayer, VideoView } from "expo-video";

import { Dimensions } from "react-native";
import { ResizeMode, Video } from "expo-av";
import React, { useEffect, useState } from "react";
import { AntDesign, Entypo, FontAwesome } from "@expo/vector-icons";
import { StackActions } from "@react-navigation/native";
import { SafeAreaView, ScrollView, StatusBar, TextInput } from "react-native";
import { BG_GRAY_400 } from "@/constants/colors";
import LiveInput from "@/components/live/LiveInput";
import LiveNotification from "@/components/live/LiveNotification";
export const { width: WINDOW_WIDTH, height: WINDOW_HEIGHT } =
  Dimensions.get("window");

interface LivePlayerProps {
  uri: string;
  isActive: boolean;
}
export const LivePlayer = ({ uri, isActive}: LivePlayerProps) => {
  const video = React.useRef(null);
//   useEffect(()=>{
//     console.log(isActive)
//   }, [isActive])
  return (
    <View style={styles.container}>
      <Video
        ref={video}
        source={{
          uri: uri,
        }}
        style={styles.backgroundVideo}
        useNativeControls={false}
        isLooping
        shouldPlay={false}
        resizeMode={ResizeMode.COVER}
      />
      <View style={styles.childContainer}>
        <LiveNotification />
        <View style={styles.subChildContainer}>
          <LiveInput />
        </View>
      </View>
    </View>
  );
};

export default LivePlayer;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "red",
    height: WINDOW_HEIGHT,
    width: "75%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  backgroundVideo: {
    width: "100%",
    height: "100%",
  },
  childContainer: {
    position: "absolute",
    bottom: "12%",
  },
  subChildContainer: {
    left: 0,
    // backgroundColor: 'red',
    width: "100%",
    height: 80,
    flex: 1,
    zIndex: 14,
    flexDirection: "row",
    gap: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
