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
        <View key={index} style={styles.childContainer}>
          <View
            style={{
              borderWidth: 2,
              borderColor: "gray",
              padding: 6,
              borderRadius: 10,
            }}
          >
            <Image
              style={[
                {
                  width: 50,
                  height: 30,
                  justifyContent: "center",
                },
              ]}
              source={value.icon}
              transition={1000}
            />
          </View>
          <View
            style={{
              justifyContent: "center",
              width: '90%'
            }}
          >
            <Text
              style={{
                fontSize: 11,
                fontWeight: "bold",
                textAlignVertical: "center",
                textAlign: "center",
              }}
            >
              {value.title}
            </Text>
          </View>
        </View>
      ))}
    </View>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    height: 290,
  },
  childContainer: {
    width: "25%",
    height: "25%",
    // justifyContent: "center",
    alignItems: "center",
    gap: 3,
    flexDirection: "column",
  },
});
