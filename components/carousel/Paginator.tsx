import {
  View,
  StyleSheet,
  Text,
  Animated,
  useWindowDimensions,
} from "react-native";
interface PaginatorProps {
  data: any;
  scrollX: any;
}
const Paginator = ({ data, scrollX }: PaginatorProps) => {
  const { width } = useWindowDimensions();
  return (
    <View style={{ position: 'absolute', bottom: 20, left: '33%',flexDirection: "row", height: 14 }}>
      {data.map((data: any, i: number) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [10, 20, 10],
          extrapolate: "clamp",
        });
        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.3, 1, 0.3],
          extrapolate: "clamp",
        });
        return (
          <Animated.View
            key={data.image.toString()}
            style={[styles.dot, { width: dotWidth, opacity }]}
          />
        );
      })}
    </View>
  );
};

export default Paginator;

const styles = StyleSheet.create({
  dot: {
    height: 4,
    borderRadius: 5,
    backgroundColor: "white",
    marginHorizontal: 8,
  },
});
