import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import { Image } from 'expo-image';
import * as Font from 'expo-font';
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { removeItem } from '../utils/Redux/cartReducer';




export default function Cart({ navigation }) {

    const products = useSelector(state => state.cart.products);
    const totalPrice = () => {
        let total = 0;
        products.forEach(item => {
            total += item.quantity * item.price;
        });
        return total
    }

    const fetchFonts = () => {
        return Font.loadAsync({
            'Archivo-Medium': require('../assets/fonts/Archivo-Medium.ttf'),
            'ionicons': require('../assets/fonts/ionicons.ttf'),
        });
    };

    const dispatch = useDispatch();

    fetchFonts();

    return (
        <View styles={styles.container}>
            <StatusBar style="auto" />
            <View style={styles.ProductsDetailsScreen}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image source={require('../assets/icons/arrow_left.svg')} style={{ height: 33, width: 33, marginLeft: 5 }} />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 32, fontWeight: 700, marginLeft: 40 }}>Votre Panier</Text>
                </View>

                <ScrollView>
                    {
                        products?.map((item) => (

                            <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#FFF', height: 120, justifyContent: 'center', width: 330, borderRadius: 16, marginLeft: 16, marginTop: 8, borderWidth: 1, borderColor: '#D2CCF9' }}>
                                <View style={{ paddingTop: 3, paddingLeft: 6, paddingRight: 5, paddingBottom: 5 }}>
                                    <Image source={"http://192.168.43.85:1337" + item.image} style={{ height: 82, width: 78, borderRadius: 20 }}></Image>
                                </View>

                                <View style={{ marginTop: 4, }}>
                                    <Text style={{ fontSize: 20, fontWeight: 700 }}>{item.title}</Text>
                                    <Text style={{ fontSize: 12, marginTop: 4, fontFamily: 'Archivo-Medium', color: '#555655', width: 200 }}> {item.quantity} pièce(s)</Text>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 8, backgroundColor: '#F4F4F4', width: 100, justifyContent: 'center', borderRadius: 8 }}>
                                        <Text style={{ fontSize: 20, color: "#FE5300" }}>{item.price} fcfa</Text>
                                    </View>
                                </View>

                                <TouchableOpacity onPress={() => dispatch(removeItem(item.id))}>
                                    <Image source={require('../assets/icons/trash.svg')} style={{ height: 24, width: 20, }} />
                                </TouchableOpacity>
                            </View>





                        ))
                    }









                    <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 12, paddingVertical: 8, backgroundColor: "#02005E", width: 338, height: 56, borderRadius: 16, marginBottom: 8, marginTop: 8, marginLeft: 16, alignItems: 'center' }}>
                        <Text style={{ fontSize: 16, marginLeft: 4, color: "#FFF", fontWeight: 700 }}>{totalPrice()} fcfa</Text>
                        <Image source={require('../assets/icons/bag.svg')} style={{ height: 24, width: 24 }} />
                    </TouchableOpacity>
                </ScrollView>


            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    ProductsDetailsScreen: {
        display: 'flex',
        backgroundColor: '#F4F4F4',
        flexDirection: 'column',
        paddingTop: 37,
        height: '100%'
    },
});