import { Image } from "expo-image";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  StatusBar,
} from "react-native";

interface HomeImageSale {
  image: any;
}
const HomeImageSale = ({ image }: HomeImageSale) => {
  return (
    <View>
      <Image
        style={[
          styles.image,
          {
            marginTop: 18,
            width: "100%",
            height: 150,
          },
        ]}
        source={image}
        contentFit="fill"
      />
    </View>
  );
};

export default HomeImageSale;

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "center",
    height: 50,
  },
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {},
  text: {
    fontSize: 42,
  },
});
