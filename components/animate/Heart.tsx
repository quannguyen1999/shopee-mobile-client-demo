import { StyleSheet, Text, View, Animated, Easing } from "react-native";
import { useRef, useEffect, useCallback, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import {
  getUniqueID,
  turnOpacity,
  turnToSize,
  turnToTop,
} from "@/util/animateUtil";
import Haha from "./Haha";
interface HeartProps {
  sizeIcon: number;
  colorIcon: string;
  isActive: boolean;
}
const Heart = ({ sizeIcon, colorIcon, isActive = false }: HeartProps) => {
  const [hearts, setHearts] = useState<{ id: string }[]>([
    { id: getUniqueID() },
    { id: getUniqueID() },
    { id: getUniqueID() },
    { id: getUniqueID() },
    { id: getUniqueID() },
    { id: getUniqueID() },
    { id: getUniqueID() },
  ]);

  return (
    <>
      <AntDesign name="heart" size={sizeIcon} color={colorIcon} />
      {hearts.map((t) => (
        <Haha key={t.id} />
      ))}
    </>
  );
};

export default Heart;

const styles = StyleSheet.create({
  container: {},
});
