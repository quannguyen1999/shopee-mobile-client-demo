import { BG_GRAY_400, BG_ORANGE_500 } from "@/constants/colors";
import { AntDesign } from "@expo/vector-icons";
import { Image } from "expo-image";
import { ScrollView, StyleSheet, View, Text } from "react-native";

const ProductPopUp = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          source={require("../../../assets/images/product/product1.png")}
          style={styles.image}
        />
        <View style={styles.childContainer}>
          <Text style={styles.money}>21000 - 65000</Text>
          <Text style={styles.package}>Kho: 1000</Text>
        </View>
      </View>
      <View style={styles.noiContainer}>
        <View style={styles.noiContainerLeft}>
          <Text style={{ fontSize: 17 }}>Number of item</Text>
        </View>

        <View style={styles.noiContainerRight}>
          <View style={styles.box}>
            <AntDesign name="minus" size={15} color="black" />
          </View>
          <View style={{
            width: 30,
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <Text
              style={{
                fontSize: 20,
              }}
            >
              1
            </Text>
          </View>
          <View style={styles.box}>
            <AntDesign name="plus" size={15} color="black" />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default ProductPopUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 300,
    flexDirection: "row",
    gap: 15,
  },
  image: {
    width: 140,
    height: 140,
  },
  childContainer: {
    justifyContent: "flex-end",
    gap: 10,
    padding: 10,
    // alignItems: 'center'
  },
  money: {
    fontSize: 20,
    color: BG_ORANGE_500,
  },
  package: {
    fontSize: 16,
  },
  noiContainer: {
    flex: 1,
    width: 300,
    flexDirection: "row",
  },
  noiContainerLeft: {
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  noiContainerRight: {
    flex: 1,
    flexDirection: "row",
    gap: 10,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    width: "50%",
  },
  box: {
    borderWidth: 1,
    borderColor: BG_GRAY_400,
    padding: 1
  }
});
