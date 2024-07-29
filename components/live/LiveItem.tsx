import { StyleSheet, View, Text, useWindowDimensions } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Image } from "expo-image";
import { BG_ORANGE_500, BG_ORANGE_600 } from "@/constants/colors";
import LiveHeader from "./LiveHeader";

interface LiveItemProps {
  item: any;
}

const LiveItem = ({ item }: LiveItemProps) => {
  return (
    <View style={[styles.container]}>
      <View style={styles.childContainerImage}>
        <Image
          source={item.image}
          style={{
            width: 130,
            height: 170,
          }}
        />
      </View>
      <View style={styles.childContainerHeader}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <LiveHeader live={item.live} />
        </View>
      </View>
      <View style={styles.childContainerFooter}>
        <Text
          style={{
            color: "white",
            fontSize: 18,
            fontWeight: "bold",
          }}
        >
          {item.value}
        </Text>
      </View>
    </View>
  );
};

export default LiveItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    height: 165,
    margin: 4,
  },
  childContainerImage: {
    alignItems: "center",
    gap: 3,
    flexDirection: "column",
  },
  childContainerHeader: {
    position: "absolute",
  },
  childContainerFooter: {
    position: "absolute",
    bottom: 0,
    right: 0,
    flex: 4,
    width: "100%",
    height: 20,
    flexGrow: 1,
    paddingLeft: 5,
  },
  titleText: {
    color: BG_ORANGE_600,
  },
});
