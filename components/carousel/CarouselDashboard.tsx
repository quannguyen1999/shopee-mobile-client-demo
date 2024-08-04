import { IMAGES_CAROUSEL } from "@/constants/datas";
import { FlatList, View, StyleSheet, Animated } from "react-native";
import CarouselItem from "./CarouselItem";
import { useEffect, useRef, useState } from "react";
import Paginator from "./Paginator";

const CarouselDashboard = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slideRef = useRef<any>(null);
  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex: number) => {
          let result = (IMAGES_CAROUSEL.length - 1 ) === prevIndex ? 0 : prevIndex+=1;
          slideRef.current.scrollToIndex({
            index: result,
            animated: true,
          });
          return result;
      })
    
    }, 4000);

    return () => clearInterval(intervalId);
  }, []);
  
  return (
    <View style={styles.container}>
      <FlatList
        data={IMAGES_CAROUSEL}
        renderItem={(item) => {
          return <CarouselItem item={item.item} />;
        }}
        horizontal
        showsVerticalScrollIndicator
        pagingEnabled
        bounces={false}
        keyExtractor={(item) => item.image}
        onScroll={Animated.event([{nativeEvent: {contentOffset: {x: scrollX}}}], {
          useNativeDriver: false
        })}
        scrollEventThrottle={32}
        onViewableItemsChanged={(val) => {
          setCurrentIndex(val.viewableItems[0].index!)
        }}
        viewabilityConfig={viewConfig}
        ref={slideRef}
      />

      <Paginator data={IMAGES_CAROUSEL} scrollX={scrollX}/>
    </View>
  );
};

export default CarouselDashboard;

const styles = StyleSheet.create({
  container: {
    height: 200,
    width: "100%",
    // backgroundColor: "red",
  },
});
