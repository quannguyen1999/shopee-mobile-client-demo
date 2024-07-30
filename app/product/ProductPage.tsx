import HomeImageSale from "@/components/HomeImageSale";
import { Image } from "expo-image";
import {
  Text,
  View,
  StyleSheet,
  Pressable,
  StatusBar,
  SafeAreaView,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { IStackScreenProps } from "@/modal/StackScreenProps";
import CarouselProduct from "@/components/carousel/CarouselProduct";
const ProductPage: React.FunctionComponent<IStackScreenProps> = (
  props?: any
) => {
  const goBackHomePage = () => {
    props.navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <View>
        <View
          style={{
            height: 400,
          }}
        >
         <CarouselProduct />
        </View>

        <Text>hehe</Text>
      </View>
    </View>
  );
};

export default ProductPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: 10,
    paddingTop: StatusBar.currentHeight!,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    height: 50,
  },
});
