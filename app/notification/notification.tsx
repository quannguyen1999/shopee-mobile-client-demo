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
     
      {NOTIFICATION_BOTTOM.map((value, index) => {
        return (
          <NotificationItem
            isTransaction={value.isTransaction}
            content={value.content}
            iconLeft={value.iconLeft}
            title={value.title}
            key={index}
            // time={toime}
          />
        );
      })}
     
    </ScrollView>
  );
};

export default Notification;

const styles = StyleSheet.create({
  container: {},
});
