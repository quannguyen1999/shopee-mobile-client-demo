import {
  Feather,
  Fontisto,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

const data = [
  {
    icon: <Ionicons name="wallet-outline" size={24} color="black" />,
    value: "Confirm",
  },
  {
    icon: <Feather name="package" size={24} color="black" />,
    value: "Waitting package",
  },
  {
    icon: <Fontisto name="motorcycle" size={24} color="black" />,
    value: "Waitting truck",
  },
  {
    icon: (
      <MaterialCommunityIcons
        name="shield-star-outline"
        size={24}
        color="black"
      />
    ),
    value: "Review",
  },
];

const Process = () => {
  return (
    <View style={styles.container}>
      {data.map((t) => (
        <View key={t.value} style={styles.containerItem}>
          <ProcessItem icon={t.icon} value={t.value} />
        </View>
      ))}
    </View>
  );
};

interface ProcessItemProp {
  icon: React.ReactNode;
  value: string;
}

const ProcessItem = ({ icon, value }: ProcessItemProp) => {
  return (
    <View style={stylesItem.container}>
      {icon}
      <Text style={stylesItem.text}>{value}</Text>
    </View>
  );
};

export default Process;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    flexDirection: "row",
    gap: 10,
    height: 60,
    paddingTop: 10,
  },
  containerItem: {
    width: "25%",
    flex: 1,
  },
});

const stylesItem = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    gap: 5
  },
  text: {
    fontSize: 13,
  },
});
