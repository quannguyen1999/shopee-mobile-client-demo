import { StyleSheet, View, Text, useWindowDimensions } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Image } from "expo-image";
interface CategoryItemProps {
  item: any;
}
const CategoryItem = ({ item }: CategoryItemProps) => {
  const { width } = useWindowDimensions();
  return (
    <View style={[styles.container, { width }]}>
      {item.map((value: any, index: number) => (
        <View
          key={index}
          style={{
            width: "25%",
            height: "50%",
            padding: 5,
          }}
        >
          <Image
            style={[
              {
                width: "100%",
                height: "60%",
              },
            ]}
            contentFit="fill"
            source={value.icon}
            transition={1000}
          />
          <Text style={styles.text}>{value.title}</Text>
        </View>
      ))}
    </View>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  text: {
    fontSize: 11,
    textAlignVertical: "center",
    textAlign: "center",
    paddingTop: 10
  },
});
