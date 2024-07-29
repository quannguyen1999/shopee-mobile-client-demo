import { StyleSheet, Text, View } from "react-native";
interface ProgressBarProps {
  percent: number;
}
const ProgressBar = ({ percent = 100 }: ProgressBarProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerChildOne}>
        <Text
          style={{
            color: "white",
            fontSize: 10,
            zIndex: 2,
          }}
        >
          Đang bán chạy
        </Text>
        <View
          style={[
            {
              width: percent,
            },
            styles.containerChildTwo,
          ]}
        >
          <Text
            style={{
              opacity: 0,
            }}
          >
            s
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ProgressBar;

const styles = StyleSheet.create({
  container: {
    padding: 5,
    height: 30,
  },
  containerChildOne: {
    width: 100,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 20,
    borderRadius: 9999,
    backgroundColor: "rgb(252 165 165)",
  },
  containerChildTwo: {
    position: "absolute",
    top: 1,
    left: 1,
    height: 20,
    backgroundColor: "red",
    borderRadius: 9999,
    flex: 1,
  },
});
