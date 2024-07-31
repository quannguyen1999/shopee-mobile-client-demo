import { BG_GRAY_400, BG_ORANGE_200, BG_ORANGE_600 } from "@/constants/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { StyleSheet, View, Text } from "react-native";

export const LiveNotification = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          width: "100%",
          backgroundColor: BG_GRAY_400,
          opacity: 0.5,
          height: "100%",
          position: "absolute",
          top: 0,
          right: 0,
          borderRadius: 10
        }}
      ></View>
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5
      }}>
        <Text
          style={{
            color: "white",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              backgroundColor: BG_ORANGE_600,
              padding: 1,
              marginRight: 2,
              borderRadius: 9999
            }}
          >
            <MaterialIcons
              name="notifications-active"
              size={15}
              color="white"
            />
          </View>
          Chào mừng bạn đến với ụt ụt,Chào mừng bạn đến với ụt ụtChào mừng bạn
          đến với ụt ụt
        </Text>
        <View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
          }}
        ></View>
      </View>
    </View>
  );
};

export default LiveNotification;

const styles = StyleSheet.create({
  container: {
    width: "60%",
    height: 80,
    // backgroundColor: BG_GRAY_400,
    // opacity: 0.8,
    // padding: 10,
    borderRadius: 10,
  },
});
