import { StyleSheet, Text, TextInput, View, Pressable } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import { useNavigation, useRouter } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import {  Dimensions } from 'react-native';
import { Feather } from "@expo/vector-icons";
const VideoHeader = () => {
  const navigate = useNavigation();
  const goBackHomePage = () => {
    navigate.goBack();
  };
  return (
    <View style={styles.container}>
      <View style={styles.containerChildOne}>
        <Pressable android_ripple={{ color: "white" }} onPress={goBackHomePage}>
          <View >
          <Feather name="search" size={24} color="white" />
          
          </View>
        </Pressable>
      </View>

      <View style={styles.containerChildTwo}>
        <Text style={styles.text}>Khám Phá</Text>
      </View>
      <View  style={styles.containerChildTwo}>
        <Text style={styles.text}>Dành cho bạn</Text>
      </View>
    </View>
  );
};

export default VideoHeader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    // backgroundColor: 'red',
    width: Dimensions.get('window').width,
  },
  containerLeft: {
    width: 40,
    height: 32,
    borderRadius: 9999,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "gray",
    opacity: 0.7,
  },

  containerChildOne: {
    width: '20%'
  },
  containerChildTwo: {
    width: '40%',
    flex: 1,
    justifyContent: 'center'
  },
  text: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600'
  }

});
