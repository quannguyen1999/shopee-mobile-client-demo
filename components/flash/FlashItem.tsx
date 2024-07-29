import { BG_ORANGE_600 } from "@/constants/colors";
import { Image } from "expo-image";
import { View, StyleSheet , Text} from "react-native";

interface CategoryItemProps {
  item: any;
}
const FlashItem = ({ item }: CategoryItemProps) => {
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={[
            {
              width: 120,
              height: 150,
              justifyContent: "center",
            },
          ]}
          source={item.image}
          transition={1000}
        />
      </View>
      <Text style={styles.nameProduct}>{item.price}</Text>

    </View>
  );
};

export default FlashItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    gap: 5,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  nameProduct: {
    fontWeight: 'bold',
    color: BG_ORANGE_600,
    fontSize: 18
  }
});
