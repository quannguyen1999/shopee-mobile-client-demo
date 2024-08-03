import AccordionCustom from "@/components/accordion/AccordionCustom";
import NotificationHeader from "@/components/notification/NotificationHeader";
import NotificationItem from "@/components/notification/NotificationItem";
import { NOTIFICATION_BOTTOM, NOTIFICATION_TOP } from "@/constants/datas";
import { Text, View, StyleSheet, ScrollView } from "react-native";

const Notification = () => {
  return (
    <ScrollView style={styles.container}>
      {NOTIFICATION_TOP.map((value, index) => {
        return (
          <NotificationItem
            content={value.content}
            iconLeft={value.iconLeft}
            title={value.title}
            key={index}
          />
        );
      })}
      <NotificationHeader />

      <AccordionCustom datas={NOTIFICATION_BOTTOM} />
    </ScrollView>
  );
};

export default Notification;

const styles = StyleSheet.create({
  container: {},
});
