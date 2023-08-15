import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import { Image } from 'expo-image';
import * as Font from 'expo-font';
import { useState } from "react";




export default function Cart() {

    const fetchFonts = () => {
        return Font.loadAsync({
            'Archivo-Medium': require('../assets/fonts/Archivo-Medium.ttf'),
            'ionicons': require('../assets/fonts/ionicons.ttf'),
        });
    };


    return (
        <View styles={styles.container}>
            <StatusBar style="auto" />
            <View style={styles.ProductsDetailsScreen}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity>
                        <Image source={require('../assets/icons/arrow_left.svg')} style={{ height: 33, width: 33, marginLeft: 5 }} />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 24, fontWeight: 700 }}>Votre Cadis</Text>
                </View>

                <ScrollView>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ paddingTop: 3, paddingLeft: 6, paddingRight: 5, paddingBottom: 5 }}>
                            <Image source={require('../assets/images/boeuf.png')} style={{ height: 82, width: 78, borderRadius: 20 }}></Image>
                        </View>

                        <View style={{ marginTop: 17 }}>
                            <Text style={{ fontSize: 20, fontWeight: 700 }}>Cotes de boeuf</Text>
                            <Text style = {{fontSize : 12, marginTop: 8, fontFamily: 'Archivo-Medium', color : '#555655', width : 200}}>Savourez l'excellence avec notre côte de bœuf fraîche, prête à griller pour une tendreté et un goût inégalés. Élevez vos repas avec cette pièce de qualité supérieure, offrant une expérience gastronomique à la fois juteuse et succulente.</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 8, }}>
                                <Text style={{ fontSize: 16, color: "rgba(58, 53, 65, 0.87)", marginRight: 8 }}>1 X</Text>
                                <Text style={{ fontSize: 20, color: "#FE5300" }}>2500 fcfa</Text>
                            </View>
                        </View>

                        <TouchableOpacity style={{ marginLeft: 24 }}>
                            <Image source={require('../assets/icons/trash.svg')} style={{ height: 24, width: 20, marginLeft: 8 }} />
                        </TouchableOpacity>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ paddingTop: 3, paddingLeft: 6, paddingRight: 5, paddingBottom: 5 }}>
                            <Image source={require('../assets/images/boeuf.png')} style={{ height: 82, width: 78, borderRadius: 20 }}></Image>
                        </View>

                        <View style={{ marginTop: 17 }}>
                            <Text style={{ fontSize: 20, fontWeight: 700 }}>Cotes de boeuf</Text>
                            <Text style = {{fontSize : 12, marginTop: 8, fontFamily: 'Archivo-Medium', color : '#555655', width : 200}}>Savourez l'excellence avec notre côte de bœuf fraîche, prête à griller pour une tendreté et un goût inégalés. Élevez vos repas avec cette pièce de qualité supérieure, offrant une expérience gastronomique à la fois juteuse et succulente.</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 8, }}>
                                <Text style={{ fontSize: 16, color: "rgba(58, 53, 65, 0.87)", marginRight: 8 }}>1 X</Text>
                                <Text style={{ fontSize: 20, color: "#FE5300" }}>2500 fcfa</Text>
                            </View>
                        </View>

                        <TouchableOpacity style={{ marginLeft: 24 }}>
                            <Image source={require('../assets/icons/trash.svg')} style={{ height: 24, width: 20, marginLeft: 8 }} />
                        </TouchableOpacity>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ paddingTop: 3, paddingLeft: 6, paddingRight: 5, paddingBottom: 5 }}>
                            <Image source={require('../assets/images/boeuf.png')} style={{ height: 82, width: 78, borderRadius: 20 }}></Image>
                        </View>

                        <View style={{ marginTop: 17 }}>
                            <Text style={{ fontSize: 20, fontWeight: 700 }}>Cotes de boeuf</Text>
                            <Text style = {{fontSize : 12, marginTop: 8, fontFamily: 'Archivo-Medium', color : '#555655', width : 200}}>Savourez l'excellence avec notre côte de bœuf fraîche, prête à griller pour une tendreté et un goût inégalés. Élevez vos repas avec cette pièce de qualité supérieure, offrant une expérience gastronomique à la fois juteuse et succulente.</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 8, }}>
                                <Text style={{ fontSize: 16, color: "rgba(58, 53, 65, 0.87)", marginRight: 8 }}>1 X</Text>
                                <Text style={{ fontSize: 20, color: "#FE5300" }}>2500 fcfa</Text>
                            </View>
                        </View>

                        <TouchableOpacity style={{ marginLeft: 24 }}>
                            <Image source={require('../assets/icons/trash.svg')} style={{ height: 24, width: 20, marginLeft: 8 }} />
                        </TouchableOpacity>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ paddingTop: 3, paddingLeft: 6, paddingRight: 5, paddingBottom: 5 }}>
                            <Image source={require('../assets/images/boeuf.png')} style={{ height: 82, width: 78, borderRadius: 20 }}></Image>
                        </View>

                        <View style={{ marginTop: 17 }}>
                            <Text style={{ fontSize: 20, fontWeight: 700 }}>Cotes de boeuf</Text>
                            <Text style = {{fontSize : 12, marginTop: 8, fontFamily: 'Archivo-Medium', color : '#555655', width : 200}}>Savourez l'excellence avec notre côte de bœuf fraîche, prête à griller pour une tendreté et un goût inégalés. Élevez vos repas avec cette pièce de qualité supérieure, offrant une expérience gastronomique à la fois juteuse et succulente.</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 8, }}>
                                <Text style={{ fontSize: 16, color: "rgba(58, 53, 65, 0.87)", marginRight: 8 }}>1 X</Text>
                                <Text style={{ fontSize: 20, color: "#FE5300" }}>2500 fcfa</Text>
                            </View>
                        </View>

                        <TouchableOpacity style={{ marginLeft: 24 }}>
                            <Image source={require('../assets/icons/trash.svg')} style={{ height: 24, width: 20, marginLeft: 8 }} />
                        </TouchableOpacity>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ paddingTop: 3, paddingLeft: 6, paddingRight: 5, paddingBottom: 5 }}>
                            <Image source={require('../assets/images/boeuf.png')} style={{ height: 82, width: 78, borderRadius: 20 }}></Image>
                        </View>

                        <View style={{ marginTop: 17 }}>
                            <Text style={{ fontSize: 20, fontWeight: 700 }}>Cotes de boeuf</Text>
                            <Text style = {{fontSize : 12, marginTop: 8, fontFamily: 'Archivo-Medium', color : '#555655', width : 200}}>Savourez l'excellence avec notre côte de bœuf fraîche, prête à griller pour une tendreté et un goût inégalés. Élevez vos repas avec cette pièce de qualité supérieure, offrant une expérience gastronomique à la fois juteuse et succulente.</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 8, }}>
                                <Text style={{ fontSize: 16, color: "rgba(58, 53, 65, 0.87)", marginRight: 8 }}>1 X</Text>
                                <Text style={{ fontSize: 20, color: "#FE5300" }}>2500 fcfa</Text>
                            </View>
                        </View>

                        <TouchableOpacity style={{ marginLeft: 24 }}>
                            <Image source={require('../assets/icons/trash.svg')} style={{ height: 24, width: 20, marginLeft: 8 }} />
                        </TouchableOpacity>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ paddingTop: 3, paddingLeft: 6, paddingRight: 5, paddingBottom: 5 }}>
                            <Image source={require('../assets/images/boeuf.png')} style={{ height: 82, width: 78, borderRadius: 20 }}></Image>
                        </View>

                        <View style={{ marginTop: 17 }}>
                            <Text style={{ fontSize: 20, fontWeight: 700 }}>Cotes de boeuf</Text>
                            <Text style = {{fontSize : 12, marginTop: 8, fontFamily: 'Archivo-Medium', color : '#555655', width : 200}}>Savourez l'excellence avec notre côte de bœuf fraîche, prête à griller pour une tendreté et un goût inégalés. Élevez vos repas avec cette pièce de qualité supérieure, offrant une expérience gastronomique à la fois juteuse et succulente.</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 8, }}>
                                <Text style={{ fontSize: 16, color: "rgba(58, 53, 65, 0.87)", marginRight: 8 }}>1 X</Text>
                                <Text style={{ fontSize: 20, color: "#FE5300" }}>2500 fcfa</Text>
                            </View>
                        </View>

                        <TouchableOpacity style={{ marginLeft: 24 }}>
                            <Image source={require('../assets/icons/trash.svg')} style={{ height: 24, width: 20, marginLeft: 8 }} />
                        </TouchableOpacity>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ paddingTop: 3, paddingLeft: 6, paddingRight: 5, paddingBottom: 5 }}>
                            <Image source={require('../assets/images/boeuf.png')} style={{ height: 82, width: 78, borderRadius: 20 }}></Image>
                        </View>

                        <View style={{ marginTop: 17 }}>
                            <Text style={{ fontSize: 20, fontWeight: 700 }}>Cotes de boeuf</Text>
                            <Text style = {{fontSize : 12, marginTop: 8, fontFamily: 'Archivo-Medium', color : '#555655', width : 200}}>Savourez l'excellence avec notre côte de bœuf fraîche, prête à griller pour une tendreté et un goût inégalés. Élevez vos repas avec cette pièce de qualité supérieure, offrant une expérience gastronomique à la fois juteuse et succulente.</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 8, }}>
                                <Text style={{ fontSize: 16, color: "rgba(58, 53, 65, 0.87)", marginRight: 8 }}>1 X</Text>
                                <Text style={{ fontSize: 20, color: "#FE5300" }}>2500 fcfa</Text>
                            </View>
                        </View>

                        <TouchableOpacity style={{ marginLeft: 24 }}>
                            <Image source={require('../assets/icons/trash.svg')} style={{ height: 24, width: 20, marginLeft: 8 }} />
                        </TouchableOpacity>
                    </TouchableOpacity>





                    <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 12, paddingVertical: 8, backgroundColor: "#02005E", width: 328, height: 56, borderRadius: 16, marginBottom: 8, marginTop: 8, marginLeft: 24, alignItems: 'center' }}>
                        <Text style={{ fontSize: 16, marginLeft: 4, color: "#FFF", fontWeight: 700 }}>Payer pour sa commande</Text>
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
        backgroundColor: '#FFF',
        flexDirection: 'column',
        paddingTop: 37,
        height: '100%'
    },
});