import { KeyboardAvoidingView, StyleSheet, Text, View } from "react-native";
import { ResizeMode, Video } from "expo-av";
import React from "react";
import { FlatList, Animated } from "react-native";
import { VIDEO } from "@/constants/datas";
import LivePlayer from "@/components/live/LivePlayer";
import { BG_ORANGE_200 } from "@/constants/colors";
import { useState } from "react";
import { Dimensions } from "react-native";
import Constants from "expo-constants";
export const { width: WINDOW_WIDTH, height: WINDOW_HEIGHT } =
  Dimensions.get("window");
const Live = () => {
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);

  return (
    <View style={styles.container}>
      
        <FlatList
          data={VIDEO}
          renderItem={(item) => {
            return (
              <LivePlayer
                uri={item.item.uri}
                isActive={activeVideoIndex === item.index}
              />
            );
          }}
          showsVerticalScrollIndicator
          pagingEnabled
          bounces={false}
          onScroll={(e) => {
            const index = Math.round(
              e.nativeEvent.contentOffset.y /
                (WINDOW_HEIGHT - Constants.statusBarHeight)
            );
            setActiveVideoIndex(index);
          }}
          scrollEventThrottle={32}
        />
      
    </View>
  );
};

export default Live;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    flex: 1,
    // backgroundColor: BG_ORANGE_200
  },
});
