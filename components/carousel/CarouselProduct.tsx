import { IMAGES_CAROUSEL } from "@/constants/datas";
import { FlatList, View, StyleSheet, Animated } from "react-native";
import CarouselItem from "./CarouselItem";
import { useRef, useState } from "react";
import Paginator from "./Paginator";
import { Image } from "expo-image";

const CarouselProduct = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slideRef = useRef(null);
  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;
  return (
    <View style={styles.container}>
      <FlatList
        data={IMAGES_CAROUSEL}
        renderItem={(item) => {
          return <CarouselItem item={item.item}/>;
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
       <View style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          height: 40,
          width: '60%'
        }}>
          <Image
            style={{
              height: '100%',
              width: "100%",
            }}
            source={require("../../assets/images/sale/sale3.png")}
            contentFit="fill"
            transition={1000}
          />
        </View>
    </View>
  );
};

export default CarouselProduct;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: "100%",
    // backgroundColor: "red",
  },
});
