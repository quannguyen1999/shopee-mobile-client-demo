import { BG_GRAY_400, BG_ORANGE_200, BG_ORANGE_600, BG_SLATE_200 } from "@/constants/colors";
import { EvilIcons } from "@expo/vector-icons";
import { StyleSheet, View, Text } from "react-native";
import { TextInput } from "react-native-gesture-handler";

interface ChatItemProps {
  image: React.ReactNode;
  type: number;
  title: string;
  message: string;
  date: string;
}

const ChatItem = ({ image, type, title, message, date }: ChatItemProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <View style={styles.imageLeft}>{image}</View>
        {type == 1 && (
          <View style={styles.containerLike}>
            <Text style={styles.textLike}>Like</Text>
          </View>
        )}

        {type == 2 && (
          <View style={styles.containerMall}>
            <Text style={styles.textMall}>Mall</Text>
          </View>
        )}
      </View>
      <View style={styles.centerContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.message}>{message}</Text>
      </View>
      <View style={styles.rightContainer}>
        <Text style={styles.date}>{date}</Text>
      </View>
    </View>
  );
};

export default ChatItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
    height: 85,
    paddingLeft: 15,
    paddingRight: 15,
    borderBottomWidth: 2,
    borderColor: BG_SLATE_200,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    // backgroundColor: 'red'
  },
  leftContainer: {
    padding: 5,
    flexDirection: "column",
  },
  centerContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: 'center',
    gap: 5,
    marginLeft: 10
  },
  rightContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 5
  },
  containerLike: {
    marginTop: -6,
    backgroundColor: BG_ORANGE_600,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 2,
  },
  textLike: {
    color: "white",
    fontSize: 12,    
  },
  containerMall: {
    marginTop: -6,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 2,
  },
  textMall: {
    color: "white",
    fontSize: 12,    
  },
  imageLeft: {
    borderRadius: 9999,
  },
  title: {
    fontSize: 18,
    // fontWeight: 'bold'
  },
  message: {
    fontSize: 15,
    // color: BG_GRAY_400
  },
  date: {
    // color: BG_GRAY_400
  }
});
