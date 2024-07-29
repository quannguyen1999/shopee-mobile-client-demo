import { StyleSheet, View, Text, useWindowDimensions } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
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
            // backgroundColor: "orange",
            width: '25%',
            height: '20%',
            // borderWidth: 1,
            // borderColor: 'black',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 5
          }}
        >
          {value.icon}
          <Text style={{
            fontSize: 15,
            fontWeight: 'bold'
          }}>{value.title}</Text>
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
    height: 260,
  },
});
