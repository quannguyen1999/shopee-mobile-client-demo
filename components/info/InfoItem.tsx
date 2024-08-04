import { BG_SLATE_200 } from "@/constants/colors";
import { Entypo, MaterialIcons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";

interface IconItemProps {
  iconLeft: React.ReactNode;
  valueLeft: String;
  iconRight: React.ReactNode;
  valueRight: String;
}

const InfoItem = ({
  iconLeft,
  valueLeft,
  iconRight,
  valueRight,
}: IconItemProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        {/* <Entypo name="open-book" size={24} color="black" />
        <Text>List Order</Text> */}
        {iconLeft}
        <Text>{valueLeft}</Text>
      </View>

      <View style={styles.rightContainer}>
        {/* <Text>Watch List History</Text>
        <MaterialIcons name="navigate-next" size={24} color="black" /> */}

        <Text>{valueRight}</Text>
        {iconRight}
      </View>
    </View>
  );
};

export default InfoItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    padding: 20,
    gap: 15,
    width: "100%",
  },
  leftContainer: {
    width: "50%",
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  rightContainer: {
    width: "50%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
});
