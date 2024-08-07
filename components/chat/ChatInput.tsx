import { BG_GRAY_400, BG_SLATE_200 } from "@/constants/colors";
import { EvilIcons } from "@expo/vector-icons";
import { StyleSheet, View, TextInput } from "react-native";

const ChatInput = () => {
  return (
    <View style={styles.inputContainer}>
      <EvilIcons name="search" size={24} color="black" />
      <TextInput placeholder="Search" placeholderTextColor="gray" style={styles.input} />
    </View>
  );
};

export default ChatInput;

const styles = StyleSheet.create({
  inputContainer: {
    margin: 10,
    gap: 5,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: BG_SLATE_200,
    width: "95%",
    zIndex: 1,
  },
  input: {
    width: "85%",
    height: 40,
    backgroundColor: BG_SLATE_200,
    color: "red",
    fontSize: 16,

  },
  iconItem: {
    position: "relative",
    color: "white",
  },
});
