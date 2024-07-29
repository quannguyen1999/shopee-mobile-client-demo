import { View, StyleSheet, Text } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { BG_ORANGE_500, BG_ORANGE_600 } from "@/constants/colors";
const ScanBar = () => {
  return (
    <View style={styles.wrap}>
      <View style={styles.container}>
        <View
          style={{
            width: "20%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <AntDesign name="scan1" size={30} color="gray" />
        </View>
        <View style={styles.childAContainer}>
          <View style={styles.childBContainer}>
            <AntDesign name="wallet" size={24} color={BG_ORANGE_600} />
            <Text style={styles.childTitle}>Ví ShopeePay</Text>
          </View>
          <Text style={styles.childText}>Vouncer mua sắm giảm đến 40,000Đ</Text>
        </View>
        <View style={styles.childAContainer}>
          <View style={styles.childBContainer}>
            <AntDesign name="smileo" size={24} color={BG_ORANGE_600} />
            <Text style={styles.childTitle}>600</Text>
          </View>
          <Text style={styles.childText}>Nhấn để nhận xu mỗi ngày</Text>
        </View>
      </View>
    </View>
  );
};

export default ScanBar;

const styles = StyleSheet.create({
  wrap: {
    marginTop: -29,
    height: 70,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  container: {
    padding: 5,
    height: 60,
    width: "90%",
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 10,
  },
  childAContainer: {
    width: "40%",
  },
  childBContainer: {
    flex: 1,
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
  },
  childTitle: {
    fontSize: 12,
    fontWeight: "bold",
  },
  childText: {
    fontSize: 10,
  },
});
