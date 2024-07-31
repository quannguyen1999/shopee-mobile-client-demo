import { Text, View, StyleSheet, ScrollView, StatusBar, SafeAreaView } from "react-native";

import { IStackScreenProps } from "@/modal/StackScreenProps";
import CarouselProduct from "@/components/carousel/CarouselProduct";
import ProductInfo from "@/components/product/detail/ProductInfo";
import ProductList from "@/components/product/ProductList";
import ProductButton from "@/components/product/detail/ProductButton";

const Product: React.FunctionComponent<IStackScreenProps> = (props?: any) => {
  return (
    <>
    <ScrollView bounces={false}>
      <View style={styles.container}>
        <View>
          <View style={styles.carousel}>
            <CarouselProduct />
          </View>
          <View style={styles.productInfo}>
            <ProductInfo />
          </View>
          <View
            style={{
              padding: 5,
            }}
          >
            <Text style={styles.titleCategory}>Sản phẩm liên quan</Text>
          </View>
          <ProductList props={props} />
        </View>
      </View>
    </ScrollView>
    <View style={{
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '100%',
      height: 70,
      backgroundColor: 'white'
    }}>
       <ProductButton />
    </View>
   
    </>
    
  );
};

export default Product;

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
  productInfo: {
    height: "auto",
  },
  titleCategory: {
    fontSize: 15,
    fontWeight: "bold",
    color: "gray",
  },
});
