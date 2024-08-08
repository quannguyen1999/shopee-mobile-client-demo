import { AntDesign } from "@expo/vector-icons";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";
const CheckoutProduct = () => {
  return (
    <View style={styles.container}>
      <View>
        <AntDesign name="checkcircleo" size={24} color="black" />
      </View>
      <Image
        source={require("../../assets/images/face/haha.png")}
        style={styles.image}
      />
    </View>
  );
};

export default CheckoutProduct;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    width: '100%',
    height: '100%'
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
});
