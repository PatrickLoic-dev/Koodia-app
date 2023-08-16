import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Image } from 'expo-image';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { useState, useEffect } from 'react';
import axios from 'axios';
import useFetch from '../../utils/Hooks/useFetch';


export default function ProductsScreen({ type, navigation }) {
    const { products, loading, error } = useFetch("/products?populate=*");


    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <ScrollView style={styles.ProductsScreen}>
                <TouchableOpacity style={{ display: 'flex', alignItems: 'flex-end' }} onPress={() => navigation.navigate('CartScreen')}>
                    <Image source={require('../../assets/icons/cart.svg')} style={{ height: 24, width: 24 }} />
                </TouchableOpacity>

                <View style={{ marginTop: 22, display: 'flex', flexDirection: 'row', }}>
                    <View style={{ display: 'flex', flexDirection: 'row', borderWidth: 1, justifyContent: 'space-between', borderBottomLeftRadius: 32, borderTopLeftRadius: 32, padding: 12, borderColor: "rgba(49, 49, 49, 0.28)" }}>
                        <Image source={require('../../assets/icons/search.svg')} style={{ height: 24, width: 24 }} />
                        <TextInput placeholder='Entrer un article a rechercher ....' style={{ fontSize: 14, marginLeft: 12, marginRight: 20 }}></TextInput>
                    </View>
                    <View style={{ display: 'flex', borderWidth: 1, borderBottomRightRadius: 32, borderTopRightRadius: 32, alignItems: 'center', justifyContent: 'center', borderColor: "rgba(49, 49, 49, 0.28)" }}>
                        <TouchableOpacity><Image source={require('../../assets/icons/Filter.svg')} style={{ height: 24, width: 24, marginRight: 12, marginLeft: 12 }} /></TouchableOpacity>
                    </View>

                </View>


                <ScrollView horizontal style={{ marginTop: 32, display: 'flex', flexDirection: 'row', }}>
                    <TouchableOpacity style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 10, backgroundColor: '#02005E', borderRadius: 18, justifyContent: 'center', marginRight: 8 }}>
                        <Text style={{ fontSize: 12, color: '#FFF' }}>Tous les articles</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 10, backgroundColor: 'rgba(241, 241, 241, 0.80)', borderRadius: 18, justifyContent: 'center', marginRight: 8 }}>
                        <Text style={{ fontSize: 12, color: '#323131' }}>Vivres Frais</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 10, backgroundColor: 'rgba(241, 241, 241, 0.80)', borderRadius: 18, justifyContent: 'center', marginRight: 8 }}>
                        <Text style={{ fontSize: 12, color: '#323131' }}>Epiceries</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 10, backgroundColor: 'rgba(241, 241, 241, 0.80)', borderRadius: 18, justifyContent: 'center', marginRight: 8 }}>
                        <Text style={{ fontSize: 12, color: '#323131' }}>Boissons</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 10, backgroundColor: 'rgba(241, 241, 241, 0.80)', borderRadius: 18, justifyContent: 'center' }}>
                        <Text style={{ fontSize: 12, color: '#323131' }}>Viande et poisson</Text>
                    </TouchableOpacity>
                </ScrollView>

                <View style={{ marginTop: 37, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 20, color: '#02005E', fontWeight: 700 }}>Articles populaires </Text>
                    <TouchableOpacity style={{ padingVertical: 8, paddingRight: 8, paddingLeft: 8, borderWidth: 1, borderRadius: 12, borderColor: '#D2CCF9', backgroundColor: '#F0EEFD' }}><Text>Voir tous</Text></TouchableOpacity>
                </View>

                <ScrollView horizontal style={{ marginTop: 18, height: 305 }}>
                    {loading ? <Text>Loading</Text> : products.map((item) => (
                        <View style={{ height: 300, width: 248, borderRadius: 32, display: 'flex', flexDirection: 'column', backgroundColor: '#fff', marginRight: 12, borderWidth: 1, borderColor: "rgba(58, 53, 65, 0.20)", paddingHorizontal: 10 }} key={item.id}>
                            <TouchableOpacity onPress={() =>{navigation.navigate('ProductsDetailsScreen', {id: item.id})}}><Image source={"http://192.168.43.85:1337" + item.attributes.Image.data.attributes.url} style={{ height: 186, width: 228, borderRadius: 32, marginTop: 12 }} /></TouchableOpacity>
                            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                <View>
                                    <Text style={{ fontSize: 20, fontWeight: 700 }}>{item.attributes.productName}</Text>
                                    <Text style={{ fontSize: 16, color: '#666' }}>{item.attributes.weight}</Text>
                                    <Text style={{ fontSize: 20, color: '#FE5300' }}>{item.attributes.price} fcfa</Text>
                                </View>
                                <TouchableOpacity style={{ width: 53, height: 54, backgroundColor: '#F4F4F4', alignItems: 'center', justifyContent: 'center', borderRadius: 32, marginLeft: 96, padding: 16 }}><Image source={require('../../assets/icons/add.svg')} style={{ height: 21, width: 22, marginRight: 12, marginLeft: 12 }} /></TouchableOpacity>
                            </View>
                        </View>
                    ))}


                </ScrollView>

                <View style={{ marginTop: 32, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 20, color: '#02005E', fontWeight: 700 }}>Articles recommandés </Text>
                    <TouchableOpacity style={{ padingVertical: 8, paddingRight: 8, paddingLeft: 8, borderWidth: 1, borderRadius: 12, borderColor: '#D2CCF9', backgroundColor: '#F0EEFD' }}><Text>Voir tous</Text></TouchableOpacity>
                </View>

                <ScrollView horizontal style={{ marginTop: 18, height: 305 }}>
                    <View style={{ height: 300, width: 248, borderRadius: 32, display: 'flex', flexDirection: 'column', backgroundColor: '#fff', marginRight: 12, borderWidth: 1, borderColor: "rgba(58, 53, 65, 0.20)", paddingHorizontal: 10 }}>
                        <Image source={require('../../assets/images/banana.jpg')} style={{ height: 186, width: 228, borderRadius: 32, marginTop: 12 }} />
                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <View>
                                <Text style={{ fontSize: 20, fontWeight: 700 }}>Bananes</Text>
                                <Text style={{ fontSize: 16, color: '#666' }}>200 g</Text>
                                <Text style={{ fontSize: 20, color: '#FE5300' }}>250 fcfa</Text>
                            </View>
                            <TouchableOpacity style={{ width: 53, height: 54, backgroundColor: '#F4F4F4', alignItems: 'center', justifyContent: 'center', borderRadius: 32, marginLeft: 96, padding: 16 }}><Image source={require('../../assets/icons/add.svg')} style={{ height: 21, width: 22, marginRight: 12, marginLeft: 12 }} /></TouchableOpacity>
                        </View>
                    </View>

                    <View style={{ height: 300, width: 248, borderRadius: 32, display: 'flex', flexDirection: 'column', backgroundColor: '#fff', marginRight: 12, borderWidth: 1, borderColor: "rgba(58, 53, 65, 0.20)", paddingHorizontal: 10 }}>
                        <Image source={require('../../assets/images/banana.jpg')} style={{ height: 186, width: 228, borderRadius: 32, marginTop: 12 }} />
                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <View>
                                <Text style={{ fontSize: 20, fontWeight: 700 }}>Bananes</Text>
                                <Text style={{ fontSize: 16, color: '#666' }}>200 g</Text>
                                <Text style={{ fontSize: 20, color: '#FE5300' }}>250 fcfa</Text>
                            </View>
                            <TouchableOpacity style={{ width: 53, height: 54, backgroundColor: '#F4F4F4', alignItems: 'center', justifyContent: 'center', borderRadius: 32, marginLeft: 96, padding: 16 }}><Image source={require('../../assets/icons/add.svg')} style={{ height: 21, width: 22, marginRight: 12, marginLeft: 12 }} /></TouchableOpacity>
                        </View>
                    </View>

                    <View style={{ height: 300, width: 248, borderRadius: 32, display: 'flex', flexDirection: 'column', backgroundColor: '#fff', marginRight: 12, borderWidth: 1, borderColor: "rgba(58, 53, 65, 0.20)", paddingHorizontal: 10 }}>
                        <Image source={require('../../assets/images/banana.jpg')} style={{ height: 186, width: 228, borderRadius: 32, marginTop: 12 }} />
                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <View>
                                <Text style={{ fontSize: 20, fontWeight: 700 }}>Bananes</Text>
                                <Text style={{ fontSize: 16, color: '#666' }}>200 g</Text>
                                <Text style={{ fontSize: 20, color: '#FE5300' }}>250 fcfa</Text>
                            </View>
                            <TouchableOpacity style={{ width: 53, height: 54, backgroundColor: '#F4F4F4', alignItems: 'center', justifyContent: 'center', borderRadius: 32, marginLeft: 96, padding: 16 }}><Image source={require('../../assets/icons/add.svg')} style={{ height: 21, width: 22, marginRight: 12, marginLeft: 12 }} /></TouchableOpacity>
                        </View>
                    </View>

                    <View style={{ height: 300, width: 248, borderRadius: 32, display: 'flex', flexDirection: 'column', backgroundColor: '#fff', marginRight: 12, borderWidth: 1, borderColor: "rgba(58, 53, 65, 0.20)", paddingHorizontal: 10 }}>
                        <Image source={require('../../assets/images/banana.jpg')} style={{ height: 186, width: 228, borderRadius: 32, marginTop: 12 }} />
                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <View>
                                <Text style={{ fontSize: 20, fontWeight: 700 }}>Bananes</Text>
                                <Text style={{ fontSize: 16, color: '#666' }}>200 g</Text>
                                <Text style={{ fontSize: 20, color: '#FE5300' }}>250 fcfa</Text>
                            </View>
                            <TouchableOpacity style={{ width: 53, height: 54, backgroundColor: '#F4F4F4', alignItems: 'center', justifyContent: 'center', borderRadius: 32, marginLeft: 96, padding: 16 }}><Image source={require('../../assets/icons/add.svg')} style={{ height: 21, width: 22, marginRight: 12, marginLeft: 12 }} /></TouchableOpacity>
                        </View>
                    </View>

                    <View style={{ height: 300, width: 248, borderRadius: 32, display: 'flex', flexDirection: 'column', backgroundColor: '#fff', marginRight: 12, borderWidth: 1, borderColor: "rgba(58, 53, 65, 0.20)", paddingHorizontal: 10 }}>
                        <Image source={require('../../assets/images/banana.jpg')} style={{ height: 186, width: 228, borderRadius: 32, marginTop: 12 }} />
                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <View>
                                <Text style={{ fontSize: 20, fontWeight: 700 }}>Bananes</Text>
                                <Text style={{ fontSize: 16, color: '#666' }}>200 g</Text>
                                <Text style={{ fontSize: 20, color: '#FE5300' }}>250 fcfa</Text>
                            </View>
                            <TouchableOpacity style={{ width: 53, height: 54, backgroundColor: '#F4F4F4', alignItems: 'center', justifyContent: 'center', borderRadius: 32, marginLeft: 96, padding: 16 }}><Image source={require('../../assets/icons/add.svg')} style={{ height: 21, width: 22, marginRight: 12, marginLeft: 12 }} /></TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>


                <View style={{ marginTop: 24, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 20, color: '#02005E', fontWeight: 700 }}>Articles en promotion </Text>
                    <TouchableOpacity style={{ padingVertical: 8, paddingRight: 8, paddingLeft: 8, borderWidth: 1, borderRadius: 12, borderColor: '#D2CCF9', backgroundColor: '#F0EEFD' }}><Text>Voir tous</Text></TouchableOpacity>
                </View>

                <ScrollView horizontal style={{ marginTop: 18, height: 305, marginBottom: 40 }}>
                    <View style={{ height: 300, width: 248, borderRadius: 32, display: 'flex', flexDirection: 'column', backgroundColor: '#fff', marginRight: 12, borderWidth: 1, borderColor: "rgba(58, 53, 65, 0.20)", paddingHorizontal: 10 }}>
                        <Image source={require('../../assets/images/banana.jpg')} style={{ height: 186, width: 228, borderRadius: 32, marginTop: 12 }} />
                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <View>
                                <Text style={{ fontSize: 20, fontWeight: 700 }}>Bananes</Text>
                                <Text style={{ fontSize: 16, color: '#666' }}>200 g</Text>
                                <Text style={{ fontSize: 20, color: '#FE5300' }}>250 fcfa</Text>
                            </View>
                            <TouchableOpacity style={{ width: 53, height: 54, backgroundColor: '#F4F4F4', alignItems: 'center', justifyContent: 'center', borderRadius: 32, marginLeft: 96, padding: 16 }}><Image source={require('../../assets/icons/add.svg')} style={{ height: 21, width: 22, marginRight: 12, marginLeft: 12 }} /></TouchableOpacity>
                        </View>
                    </View>

                    <View style={{ height: 300, width: 248, borderRadius: 32, display: 'flex', flexDirection: 'column', backgroundColor: '#fff', marginRight: 12, borderWidth: 1, borderColor: "rgba(58, 53, 65, 0.20)", paddingHorizontal: 10 }}>
                        <Image source={require('../../assets/images/banana.jpg')} style={{ height: 186, width: 228, borderRadius: 32, marginTop: 12 }} />
                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <View>
                                <Text style={{ fontSize: 20, fontWeight: 700 }}>Bananes</Text>
                                <Text style={{ fontSize: 16, color: '#666' }}>200 g</Text>
                                <Text style={{ fontSize: 20, color: '#FE5300' }}>250 fcfa</Text>
                            </View>
                            <TouchableOpacity style={{ width: 53, height: 54, backgroundColor: '#F4F4F4', alignItems: 'center', justifyContent: 'center', borderRadius: 32, marginLeft: 96, padding: 16 }}><Image source={require('../../assets/icons/add.svg')} style={{ height: 21, width: 22, marginRight: 12, marginLeft: 12 }} /></TouchableOpacity>
                        </View>
                    </View>

                    <View style={{ height: 300, width: 248, borderRadius: 32, display: 'flex', flexDirection: 'column', backgroundColor: '#fff', marginRight: 12, borderWidth: 1, borderColor: "rgba(58, 53, 65, 0.20)", paddingHorizontal: 10 }}>
                        <Image source={require('../../assets/images/banana.jpg')} style={{ height: 186, width: 228, borderRadius: 32, marginTop: 12 }} />
                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <View>
                                <Text style={{ fontSize: 20, fontWeight: 700 }}>Bananes</Text>
                                <Text style={{ fontSize: 16, color: '#666' }}>200 g</Text>
                                <Text style={{ fontSize: 20, color: '#FE5300' }}>250 fcfa</Text>
                            </View>
                            <TouchableOpacity style={{ width: 53, height: 54, backgroundColor: '#F4F4F4', alignItems: 'center', justifyContent: 'center', borderRadius: 32, marginLeft: 96, padding: 16 }}><Image source={require('../../assets/icons/add.svg')} style={{ height: 21, width: 22, marginRight: 12, marginLeft: 12 }} /></TouchableOpacity>
                        </View>
                    </View>

                    <View style={{ height: 300, width: 248, borderRadius: 32, display: 'flex', flexDirection: 'column', backgroundColor: '#fff', marginRight: 12, borderWidth: 1, borderColor: "rgba(58, 53, 65, 0.20)", paddingHorizontal: 10 }}>
                        <Image source={require('../../assets/images/banana.jpg')} style={{ height: 186, width: 228, borderRadius: 32, marginTop: 12 }} />
                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <View>
                                <Text style={{ fontSize: 20, fontWeight: 700 }}>Bananes</Text>
                                <Text style={{ fontSize: 16, color: '#666' }}>200 g</Text>
                                <Text style={{ fontSize: 20, color: '#FE5300' }}>250 fcfa</Text>
                            </View>
                            <TouchableOpacity style={{ width: 53, height: 54, backgroundColor: '#F4F4F4', alignItems: 'center', justifyContent: 'center', borderRadius: 32, marginLeft: 96, padding: 16 }}><Image source={require('../../assets/icons/add.svg')} style={{ height: 21, width: 22, marginRight: 12, marginLeft: 12 }} /></TouchableOpacity>
                        </View>
                    </View>

                    <View style={{ height: 300, width: 248, borderRadius: 32, display: 'flex', flexDirection: 'column', backgroundColor: '#fff', marginRight: 12, borderWidth: 1, borderColor: "rgba(58, 53, 65, 0.20)", paddingHorizontal: 10 }}>
                        <Image source={require('../../assets/images/banana.jpg')} style={{ height: 186, width: 228, borderRadius: 32, marginTop: 12 }} />
                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <View>
                                <Text style={{ fontSize: 20, fontWeight: 700 }}>Bananes</Text>
                                <Text style={{ fontSize: 16, color: '#666' }}>200 g</Text>
                                <Text style={{ fontSize: 20, color: '#FE5300' }}>250 fcfa</Text>
                            </View>
                            <TouchableOpacity style={{ width: 53, height: 54, backgroundColor: '#F4F4F4', alignItems: 'center', justifyContent: 'center', borderRadius: 32, marginLeft: 96, padding: 16 }}><Image source={require('../../assets/icons/add.svg')} style={{ height: 21, width: 22, marginRight: 12, marginLeft: 12 }} /></TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>

            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },

    ProductsScreen: {
        display: 'flex',
        flexDirection: 'column',
        paddingTop: 33,
        paddingLeft: 18,
        paddingRight: 14,
        height: 1360
    }
});
