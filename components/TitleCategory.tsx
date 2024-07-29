import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { BG_ORANGE_500, BG_ORANGE_600 } from "@/constants/colors";
import { View, StyleSheet, Text } from "react-native";
interface TitleCategoryProps {
  text: string;
}
const TitleCategory = ({ text = "Empty title" }: TitleCategoryProps) => {
  return (
    <View style={styles.container}>
      <View style={{
         justifyContent: 'center',
         alignItems: 'center'
      }}>
        <Text style={styles.titleLeft}>{text}</Text>
      </View>

      <View style={styles.containerChild}>
        <Text style={styles.titleRight}>xem thêm</Text>
        <MaterialIcons name="navigate-next" size={24} color="gray" />
      </View>
    </View>
  );
};

export default TitleCategory;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    gap: 5,
    padding: 5

  },
  containerChild: {
    flex: 1,
    flexDirection: "row",
    gap: 5,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  titleLeft: {
    color: BG_ORANGE_600,
    fontWeight: 'bold',
    fontSize: 20
  },
  titleRight: {
    color: 'gray'
  }
});
