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
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Image
            style={[
              {
                width: "70%",
                height: "70%",
                borderRadius: 10
              },
            ]}
            contentFit="cover"
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
