import CatHug from "@/components/animate/CatHug";
import CharacterCry from "@/components/animate/CharacterCry";
import Rain from "@/components/animate/Rain";
import { BG_ORANGE_200, BG_ORANGE_600 } from "@/constants/colors";
import { Image } from "expo-image";
import { Link, Stack } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function NotFoundScreen() {
  return (
    <>
      <View style={styles.rainLeft}>
        <Rain hideSun={true} />
      </View>
      <View style={styles.rainRight}>
        <Rain hideSun={false} />
      </View>
      <View style={styles.container}>
        <View style={styles.button}>
          <Link href="/home" style={styles.text}>
            Go to Homepage
          </Link>
        </View>
      </View>
      <View style={styles.image2}>
        <CharacterCry
          imageSource={require("../assets/images/status/notFound.png")}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 20,
    flex: 1,
    zIndex: 1,
  },
  button: {
    backgroundColor: BG_ORANGE_600,
    padding: 20,
    borderRadius: 50,
  },
  text: {
    color: BG_ORANGE_200,
    fontSize: 20,
    fontWeight: "600",
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  rainLeft: {
    position: "absolute",
    top: "20%",
    left: "30%",
    height: 100,
    width: 100,
    borderTopLeftRadius: 10,
  },
  rainRight: {
    position: "absolute",
    top: "21%",
    right: "30%",
    height: 100,
    width: 100,
    borderTopLeftRadius: 10,
  },
  image2: {
    position: "absolute",
    top: "28%",
    right: "20%",
    height: 250,
    width: 250,
  },
});
