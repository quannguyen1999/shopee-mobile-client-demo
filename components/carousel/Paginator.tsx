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
  backgroundColor?: string;
  bottom?: number;
  left?: number
}
const Paginator = ({ data, scrollX, backgroundColor = 'white', bottom = 20, left = 33 }: PaginatorProps) => {
  const { width } = useWindowDimensions();
  return (
    <View style={{ position: 'absolute', bottom: bottom, left: `${left}%`,flexDirection: "row", height: 14 }}>
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
            key={i}
            style={[styles.dot, { width: dotWidth, opacity, backgroundColor: backgroundColor }]}
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
    marginHorizontal: 8,
  },
});
