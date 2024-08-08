import { View, Text, StyleSheet } from "react-native";
import CheckoutProduct from "./CheckoutProduct";
import CheckoutTagItem from "./CheckoutTagItem";
const CheckoutItem = () => {
    return <View style={styles.container}>
        <CheckoutProduct />
        <CheckoutTagItem />
    </View>
}

export default CheckoutItem;

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        flex: 1,
        width: '100%',
        height: 300
    }
})