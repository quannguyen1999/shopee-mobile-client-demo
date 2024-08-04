import {
  Animated,
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  StatusBar,
  ScrollView,
} from "react-native";
import { Actionsheet, Divider } from "@gluestack-ui/themed";
import React from "react";
import ProductHeader from "@/components/header/product/ProductHeader";
import { AccordionContentText } from "@gluestack-ui/themed";
import { useRef, useState, useEffect } from "react";
import { Image } from "expo-image";
import Profile from "@/components/info/Profile";
import Process from "@/components/info/Process";
import InfoItem from "@/components/info/InfoItem";
import {
  AntDesign,
  Entypo,
  Feather,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import ProductList from "@/components/product/ProductList";
const Info = () => {
  const animatedValue = useRef(new Animated.Value(1)).current;
  const [scroll, setScroll] = useState(0);
  useEffect(() => {
    animatedValue.setValue(scroll);
  }, [scroll]);
  return (
    <>
      <SafeAreaView style={styles.menuContainer}>
        <Animated.View
          style={[
            styles.menuContainerChild,
            {
              opacity: animatedValue.interpolate({
                inputRange: [0, 100],
                outputRange: [0, 1],
              }),
            },
          ]}
        ></Animated.View>
        <ProductHeader scroll={scroll} />
      </SafeAreaView>
      <ScrollView
        bounces={false}
        onScroll={(e) => {
          setScroll(e.nativeEvent.contentOffset.y);
        }}
        scrollEventThrottle={16}
      >
        <View style={styles.container}>
          <Image
            source={require("../../assets/images/avatar/background.png")}
            style={styles.background}
          />
          <View style={styles.profileContainer}>
            <Profile />
          </View>
        </View>
        <Divider></Divider>
        <View style={{ marginTop: 10 }}>
          <InfoItem
            iconLeft={<Entypo name="open-book" size={24} color="black" />}
            valueLeft="Order"
            iconRight={
              <MaterialIcons name="navigate-next" size={24} color="black" />
            }
            valueRight="List History Order"
          />
        </View>
        <Divider></Divider>
        <Process />

        <InfoItem
          iconLeft={
            <MaterialCommunityIcons
              name="medal-outline"
              size={24}
              color="black"
            />
          }
          valueLeft="Member Vip"
          iconRight={
            <MaterialIcons name="navigate-next" size={24} color="black" />
          }
          valueRight="Watch More"
        />

        <InfoItem
          iconLeft={<AntDesign name="hearto" size={24} color="black" />}
          valueLeft="Like"
          iconRight={
            <MaterialIcons name="navigate-next" size={24} color="black" />
          }
          valueRight="Watch More"
        />

        <InfoItem
          iconLeft={<AntDesign name="clockcircleo" size={24} color="black" />}
          valueLeft="Watch recently"
          iconRight={
            <MaterialIcons name="navigate-next" size={24} color="black" />
          }
          valueRight=""
        />

        <InfoItem
          iconLeft={<AntDesign name="staro" size={24} color="black" />}
          valueLeft="Your Review"
          iconRight={
            <MaterialIcons name="navigate-next" size={24} color="black" />
          }
          valueRight=""
        />

        <InfoItem
          iconLeft={
            <MaterialIcons name="support-agent" size={24} color="black" />
          }
          valueLeft="Help Center"
          iconRight={
            <MaterialIcons name="navigate-next" size={24} color="black" />
          }
          valueRight=""
        />
        <InfoItem
          iconLeft={<Feather name="shopping-bag" size={24} color="black" />}
          valueLeft="Buy Again"
          iconRight={
            <MaterialIcons name="navigate-next" size={24} color="black" />
          }
          valueRight="Watch More"
        />
        <Divider></Divider>
        <ProductList />
      </ScrollView>
    </>
  );
};

export default Info;

const styles = StyleSheet.create({
  menuContainer: {
    position: "absolute",
    width: "100%",
    height: 100,
    top: 0,
    left: 0,
    zIndex: 30,
    // opacity: 0.5,
    // backgroundColor: "white",
  },
  profileContainer: {
    position: "absolute",
    top: 120,
    left: 0,
    width: "100%",
    height: 100,
  },
  menuContainerChild: {
    width: "100%",
    backgroundColor: "white",
    // opacity: 0.5,
    height: 100,
    position: "absolute",
    top: 0,
    right: 0,
    borderRadius: 10,
  },
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight!,
  },
  background: {
    height: 230,
    width: "100%",
  },
});
