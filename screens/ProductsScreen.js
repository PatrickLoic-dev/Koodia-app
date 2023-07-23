import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


export default function ProductsScreen() {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <View style={styles.ProductsScreen}>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },

    ProductsScreen: {
        display: 'flex',
        flexDirection: 'column',
        paddingTop: 56,
        paddingHorizontal: 16,
    }
});
