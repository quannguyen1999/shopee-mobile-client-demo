import { BG_ORANGE_600 } from "@/constants/colors";
import { StyleSheet, View, Text, useWindowDimensions } from "react-native";
import Fontisto from "@expo/vector-icons/Fontisto";
import Entypo from "@expo/vector-icons/Entypo";
interface LiveHeaderProps {
    live: number
}
const LiveHeader = ({live}: LiveHeaderProps) => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        margin: 4,
        width: '100%'
      }}
    >
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          marginRight: 2,
          padding: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: BG_ORANGE_600,
        }}
      >
        <Entypo name="dot-single" size={20} color="white" />
        <Text
          style={{
            fontWeight: "bold",
            color: "white",
            fontSize: 12,
          }}
        >
          LIVE
        </Text>
      </View>

      <View
        style={{
          flex: 1,
          flexDirection: "row",
          backgroundColor: "rgb(107 114 128)",
          width: 30,
          padding: 1,
          justifyContent: "center",
          alignItems: "center",
          gap: 4,
        }}
      >
        <Fontisto name="heart-eyes" size={10} color="white" />
        <Text
          style={{
            fontSize: 10,
            color: "white",
          }}
        >
          {live}
        </Text>
      </View>
    </View>
  );
};

export default LiveHeader;

