import { BG_SLATE_200 } from "@/constants/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";

const Profile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/images/avatar/avatar.png")}
          style={styles.image}
        />
      </View>

      <View style={styles.childContainer}>
        <Text style={styles.nickname}>Dangquannau1</Text>
        <View style={styles.member}>
            <Text>Member vip </Text>
            <MaterialIcons name="navigate-next" size={18} color="black"/>
          </View>
        <View style={styles.containerFollow}>
          <Text style={styles.follow}>Follow 1</Text>
          <Text style={styles.follow}>Folowwing 1132</Text>
        </View>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    padding: 10,
    gap: 15,
  },
  imageContainer: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    borderRadius: 9999,
    width: 70,
    height: 70,
  },
  childContainer: {
    flex: 1,
    flexDirection: "column",
    gap: 5,
  },
  nickname: {
    fontSize: 20,
    fontWeight: "bold",
    color: 'white'
  },
  member: {
    padding: 5,
    width: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    height: 200,
    flex: 1,
    flexDirection: "row",
    backgroundColor: BG_SLATE_200,
  },
  containerFollow: {
    flex: 1,
    flexDirection: "row",
    gap: 5,
    
  },
  follow: {
    color: 'white'
  }
});
