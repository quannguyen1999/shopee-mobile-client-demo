import { CATEGORY_ITEMS } from "@/constants/datas";
import { FlatList, View, StyleSheet, Animated } from "react-native";
import { useRef, useState } from "react";
import CategoryItem from "./CategoryItem";
import Paginator from "../carousel/Paginator";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const scrollX = useRef(new Animated.Value(0)).current;

  const slideRef = useRef(null);
  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;
  return (
    <View style={styles.container}>
      <FlatList
        data={CATEGORY_ITEMS}
        renderItem={(item) => {
          return <CategoryItem item={item.item.data} />;
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
        onViewableItemsChanged={(val) => {
          setCurrentIndex(val.viewableItems[0].index!);
        }}
        viewabilityConfig={viewConfig}
        ref={slideRef}
      />

      <Paginator
        data={CATEGORY_ITEMS}
        scrollX={scrollX}
        backgroundColor="red"
        bottom={-20}
        left={42}
      />
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: 105,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "orange",
  },
});
