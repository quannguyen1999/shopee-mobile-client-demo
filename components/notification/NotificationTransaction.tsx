import { BG_GRAY_400, BG_ORANGE_600 } from "@/constants/colors";
import { Entypo } from "@expo/vector-icons";
import { StyleSheet, View, Text } from "react-native";
interface NotificationItemProps {
  title: string;
  content: React.ReactNode;
  iconLeft: React.ReactNode;
  isTransaction?: boolean;
  status?: number;
  isShowIcon?: boolean;
}
const Transaction = ({
  iconLeft,
  content,
  title,
  status,
  isShowIcon = true
}: NotificationItemProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainerTransaction}>
        <View
          style={{
            width: "70%",
            height: "70%",
          }}>
          {iconLeft}
        </View>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>
          {status == 1
            ? "Đơn hàng đã hoàn thành"
            : status == 2
            ? "Hoàn tiền thành công"
            : "Thất bại"}
        </Text>
        <View style={styles.content}>{content}</View>
      </View>
      <View style={styles.iconRightContiner}>
        {isShowIcon && <Entypo name="chevron-down" size={20} color={BG_GRAY_400} />}
      </View>
    </View>
  );
};

export default Transaction;

const styles = StyleSheet.create({
  container: {
    height: 80,
    width: "100%",
    flexDirection: "row",
  },
  iconContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "20%",
    borderWidth: 2,
    borderColor: BG_GRAY_400,
    borderRadius: 9999,
    margin: 15,
  },
  iconContainerTransaction: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "20%",
    margin: 15,
  },
  contentContainer: {
    flexDirection: "column",
    height: "100%",
    width: "60%",
    padding: 15,
    justifyContent: "center",
  },
  content: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  iconRightContiner: {
    flexDirection: "row",
    height: "100%",
    width: "20%",
    gap: 5,
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  iconRightContinerNumber: {
    backgroundColor: BG_ORANGE_600,
    borderRadius: 9999,
    padding: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
