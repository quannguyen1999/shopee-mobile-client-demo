import { View, StyleSheet, useWindowDimensions, Text } from "react-native";
import { Image } from "expo-image";
interface CarouselItemProps {
  item: any;
}

const CarouselItem = ({ item }: CarouselItemProps) => {
  const { width } = useWindowDimensions();
  return (
    <View style={[styles.container, { width }]}>
      <Image
        style={[
          styles.image,
          {
            width: "100%",
          },
        ]}
        source={item.image}
        contentFit="cover"
        transition={1000}
      />
    </View>
  );
};

export default CarouselItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: 400,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
});
