import { LIVE_CAROUSEL } from "@/constants/datas";
import { Image } from "expo-image";
import { StyleSheet, Animated, View, Text, FlatList } from "react-native";
import { useRef, useState } from "react";
import LiveItem from "./LiveItem";
interface LiveBodyProps {}

const LiveBody = () => {
//   const [currentIndex, setCurrentIndex] = useState<number>(0);

  const scrollX = useRef(new Animated.Value(0)).current;

  const slideRef = useRef(null);
  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  return (
    <View style={styles.container}>
      <FlatList
        data={LIVE_CAROUSEL}
        renderItem={(item) => {
          return <LiveItem item={item.item} />;
        }}
        horizontal
        showsVerticalScrollIndicator
        pagingEnabled
        bounces={false}
        // keyExtractor={(item) => item.data}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          {
            useNativeDriver: false,
          }
        )}
        scrollEventThrottle={32}
        // onViewableItemsChanged={(val) => {
        //   setCurrentIndex(val.viewableItems[0].index!);
        // }}
        viewabilityConfig={viewConfig}
        ref={slideRef}
      />
    </View>
  );
};

export default LiveBody;

const styles = StyleSheet.create({
  container: {
    
  },
});
