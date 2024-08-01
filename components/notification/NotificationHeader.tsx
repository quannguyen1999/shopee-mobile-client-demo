import { BG_GRAY_400, BG_ORANGE_600, BG_SLATE_200 } from "@/constants/colors";
import { Text, View, StyleSheet } from "react-native";

const NotificationHeader = () => {
    return <View style={styles.containerBottomTitle}>
    <View style={styles.containerBottomTitleLeft}>
      <Text
        style={{
          // color: BG_ORANGE_600,
          // fontWeight: "bold",
          fontSize: 18,
          color: BG_GRAY_400
        }}
      >
        Cập nhập đơn hàng
      </Text>
    </View>
    <View style={styles.containerBottomTitleRight}>
      <Text
        style={{
          color: BG_ORANGE_600,
          fontWeight: "bold",
        }}
      >
        Đọc tất cả (5)
      </Text>
    </View>
  </View>;
}

export default NotificationHeader;

const styles = StyleSheet.create({
    container: {},
    containerBottomTitle: {
      flexDirection: "row",
      padding: 15,
      backgroundColor: BG_SLATE_200
    },
    containerBottomTitleLeft: {
      width: "50%",
    },
    containerBottomTitleRight: {
      justifyContent: "center",
      alignItems: "flex-end",
      width: "50%",
    },
    containerBottomTitleText: {},
  });
  