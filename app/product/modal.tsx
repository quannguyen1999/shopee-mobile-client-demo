import { View, Platform, Text } from 'react-native';
import { Link, router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function Modal() {
  // If the page was reloaded or navigated to directly, then the modal should be presented as
  // a full screen page. You may need to change the UI to account for this.
  const isPresented = router.canGoBack();
  return (
    <View style={{ marginTop: 50, paddingTop: 50, alignItems: 'center', justifyContent: 'center' }}>
      <Text>hehe</Text>
    </View>
  );
}