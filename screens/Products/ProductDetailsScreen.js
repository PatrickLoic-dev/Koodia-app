import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native';
import { Image } from 'expo-image';
import * as Font from 'expo-font';
import { useState } from "react";
import useFetch from '../../utils/Hooks/useFetch';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../utils/Redux/cartReducer';
import { useSelector } from 'react-redux';



export default function ProductsDetails({ route, navigation }) {
    const { id } = route.params;
    const [quantity, setQuantity] = useState(1);

    const fetchFonts = () => {
        return Font.loadAsync({
            'Archivo-Medium': require('../../assets/fonts/Archivo-Medium.ttf'),
        });
    };

    fetchFonts();


    const data =useSelector((state) =>state.cart.products)

    const areItemsPresent =() => {
        let itemsPresent =false;
        if(data.length >= 1){
            itemsPresent = true;
        }
        return itemsPresent
    }

    const dispatch = useDispatch();
    const { products, loading, error } = useFetch(`/products/${id}?populate=*`);
    console.log(products);



    return (
        <View styles={styles.container}>
            <StatusBar style="auto" />
            <View style={styles.ProductsDetailsScreen}>
                <View style = {{flexDirection : 'row', justifyContent : 'space-between'}}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={require('../../assets/icons/arrow_left.svg')} style={{ height: 33, width: 33, marginLeft: 5 }} />
                </TouchableOpacity>

                <TouchableOpacity style={{ display: 'flex', alignItems: 'flex-end' }} onPress={() => navigation.navigate('CartScreen')}>
                    <Image source={require('../../assets/icons/cart.svg')} style={{ height: 24, width: 24, marginRight: 24 }} />
                    {areItemsPresent() && <View style ={{height : 10, width: 10, backgroundColor: '#FE5300', borderRadius: 24, position:'absolute', top: 0, right: 12}}></View>}           
                </TouchableOpacity>
                </View>
                


                {error? <Text>Error!</Text> : loading ? <Text>Loading</Text> :  (
                    <View>
                        <View style={{ justifyContent: "center", alignItems: "center" }}>
                            <Image source={"http://192.168.43.85:1337"+products?.attributes?.Image?.data?.attributes?.url} style={{ height: 213, width: 280, borderRadius: 20 }} />
                        </View>

                        <View style={{ flexDirection: 'row', marginLeft: 18, marginRight: 16, marginTop: 24, justifyContent: 'space-between' }}>
                            <View>
                                <Text style={{ fontSize: 20, fontWeight: 700 }}>{products?.attributes?.productName}</Text>
                                <Text style={{ fontSize: 16, marginTop: 23, color: '#555655' }}>{products?.attributes?.weight}</Text>
                            </View>
                            <View style={{ marginTop: 32, flexDirection: 'row', alignItems: 'center', width: 104, height: 44, borderRadius: 8, backgroundColor: '#F4F4F4' }}>
                                <TouchableOpacity style={{ marginHorizontal: 8, backgroundColor: '#FFF', height: 24, width: 24, alignItems: 'center', justifyContent: 'center', borderRadius: 48 }} onPress={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}><Image source={require('../../assets/icons/minus.svg')} style={{ height: 2, width: 10 }} /></TouchableOpacity>
                                <Text style={{ fontSize: 24 }}>{quantity}</Text>
                                <TouchableOpacity style={{ marginHorizontal: 8, backgroundColor: '#FFF', height: 24, width: 24, alignItems: 'center', justifyContent: 'center', borderRadius: 48 }} onPress={() => setQuantity((prev) => prev + 1)}><Image source={require('../../assets/icons/plus.svg')} style={{ height: 12, width: 10 }} /></TouchableOpacity>

                            </View>
                        </View>

                        <View style={{ marginLeft: 18, marginRight: 16, marginTop: 17 }}>
                            <Text style={{ fontSize: 16, fontWeight: 700,  }}>Description</Text>
                            <Text style={{ fontSize: 16, marginTop: 8, color: '#555655' }}>{products?.attributes?.description}</Text>
                        </View>


                        <Text style={{ marginTop: 5, fontSize: 20, fontWeight: 700, marginLeft: 16, marginBottom: 28 }}>Autres Articles</Text>
                <TouchableOpacity style={{ flexDirection: 'row' }}>
                    <View style={{ paddingTop: 3, paddingLeft: 6, paddingRight: 5, paddingBottom: 5 }}>
                        <Image source={require('../../assets/images/boeuf.png')} style={{ height: 82, width: 78, borderRadius: 20 }}></Image>
                    </View>

                    <View style={{ marginTop: 17 }}>
                        <Text style={{ fontSize: 20, fontWeight: 700 }}>Tomates fraiches</Text>
                        <Text style={{ fontSize: 16, marginTop: 8, color: "rgba(58, 53, 65, 0.87)" }}>1 kg</Text>
                    </View>

                    <View style={{ justifyContent: 'center', marginLeft: 16 }}>
                        <Text style={{ fontSize: 20, color: "#FE5300" }}>2500 fcfa</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{ flexDirection: 'row' }}>
                    <View style={{ paddingTop: 3, paddingLeft: 6, paddingRight: 5, paddingBottom: 5 }}>
                        <Image source={require('../../assets/images/boeuf.png')} style={{ height: 82, width: 78, borderRadius: 20 }}></Image>
                    </View>

                    <View style={{ marginTop: 17 }}>
                        <Text style={{ fontSize: 20, fontWeight: 700 }}>Tomates fraiches</Text>
                        <Text style={{ fontSize: 16, marginTop: 8, color: "rgba(58, 53, 65, 0.87)" }}>1 kg</Text>
                    </View>

                    <View style={{ justifyContent: 'center', marginLeft: 16 }}>
                        <Text style={{ fontSize: 20, color: "#FE5300" }}>2500 fcfa</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'center', paddingHorizontal: 12, paddingVertical: 8, backgroundColor: "#02005E", width: 108, height: 40, borderRadius: 48, marginLeft: 238 }} onPress={() => dispatch(addToCart(
                    {
                        id:products.id,
                        title: products.attributes.productName,
                        description: products.attributes.description,
                        price: products.attributes.price,
                        image: products?.attributes?.Image?.data?.attributes?.url,
                        quantity,
                    }
                ))}>
                    <Image source={require('../../assets/icons/bag.svg')} style={{ height: 24, width: 24 }} />
                    <Text style={{ fontSize: 16, marginLeft: 4, color: "#FFF" }}>{products?.attributes?.price} fcfa</Text>
                </TouchableOpacity>

                    </View>
                )
                }
              


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