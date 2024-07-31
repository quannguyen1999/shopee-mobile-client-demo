import { StyleSheet, Text, View } from "react-native";
import { useVideoPlayer, VideoView } from "expo-video";
import { ResizeMode, Video } from "expo-av";
import React, { useState } from "react";
import { AntDesign, Entypo, FontAwesome } from "@expo/vector-icons";
import { StackActions } from "@react-navigation/native";
import { SafeAreaView, ScrollView, StatusBar, TextInput } from "react-native";
import { BG_GRAY_400 } from "@/constants/colors";
import LiveInput from "@/components/live/LiveInput";
import LiveNotification from "@/components/live/LiveNotification";

const videoSource =
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

const Live = () => {
  const video = React.useRef(null);
  return (
    <View style={styles.container}>
      <Video
        ref={video}
        source={{
          uri: "https://videos.pexels.com/video-files/7546907/7546907-hd_1080_1920_30fps.mp4",
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

export default Live;

const styles = StyleSheet.create({
  container: {
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
