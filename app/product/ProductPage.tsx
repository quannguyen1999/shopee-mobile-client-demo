import HomeImageSale from "@/components/HomeImageSale";
import { Image } from "expo-image";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  StatusBar,
} from "react-native";

import AntDesign from "@expo/vector-icons/AntDesign";
import { IStackScreenProps } from "@/modal/StackScreenProps";
import CarouselProduct from "@/components/carousel/CarouselProduct";
import ProductInfo from "@/components/product/ProductInfo";
import ProductList from "@/components/product/ProductList";
const ProductPage: React.FunctionComponent<IStackScreenProps> = (
  props?: any
) => {
  const goBackHomePage = () => {
    props.navigation.goBack();
  };
  return (
    <ScrollView bounces={false}>
    <View style={styles.container}>
      <View>
        <View style={styles.carousel}>
          <CarouselProduct />
        </View>
        <View
          style={{
            height: 120,
          }}
        >
          <ProductInfo />
        </View>
        <View style={{
          padding: 5,
        }}>
            <Text style={{
              fontSize: 15,
              fontWeight: 'bold',
              color: 'gray'
            }}>Sản phẩm liên quan</Text>
        </View>
        <ProductList props={props}/>
       
      </View>
    </View>
    </ScrollView>
  );
};

export default ProductPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight!,
  },
  carousel: {
    height: 400,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    height: 50,
  },
});
