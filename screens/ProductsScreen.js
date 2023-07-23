import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Image } from 'expo-image';
import { ScrollView, TextInput } from 'react-native-gesture-handler';


export default function ProductsScreen() {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <View style={styles.ProductsScreen}>
                <View style={{ display: 'flex', alignItems: 'flex-end' }}>
                    <Image source={require('../assets/icons/cart.svg')} style={{ height: 24, width: 24 }} />
                </View>

                <View style={{ marginTop: 34, display: 'flex', flexDirection: 'row', }}>
                    <View style={{ display: 'flex', flexDirection: 'row', borderWidth: 1, justifyContent: 'space-between', borderBottomLeftRadius: 32, borderTopLeftRadius: 32, padding: 12 }}>
                        <Image source={require('../assets/icons/search.svg')} style={{ height: 24, width: 24 }} />
                        <TextInput placeholder='Entrer un article a rechercher ....' style={{ fontSize: 14, marginLeft: 12, marginRight: 26 }}></TextInput>
                    </View>
                    <View style={{ display: 'flex', borderWidth: 1, borderBottomRightRadius: 32, borderTopRightRadius: 32, alignItems: 'center', justifyContent: 'center' }}>
                        <TouchableOpacity><Image source={require('../assets/icons/Filter.svg')} style={{ height: 24, width: 24, marginRight: 12, marginLeft: 12 }} /></TouchableOpacity>
                    </View>

                </View>


                <View style={{ marginTop: 16, display: 'flex', flexDirection: 'row', }}>
                    <TouchableOpacity style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
                        <View style={{ height: 58, width: 58, backgroundColor: '#D9D9D9', borderRadius: 12 }}></View>
                        <Text style={{ fontSize: 9, marginTop: 8 }}>Tous les articles </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginLeft: 4, }}>
                        <View style={{ height: 58, width: 58, backgroundColor: '#D9D9D9', borderRadius: 12 }}></View>
                        <Text style={{ fontSize: 9, marginTop: 8, }}>Vivres frais </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginLeft: 6, }}>
                        <View style={{ height: 58, width: 58, backgroundColor: '#D9D9D9', borderRadius: 12 }}></View>
                        <Text style={{ fontSize: 9, marginTop: 8, }}>Epicerie</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginLeft: 6, }}>
                        <View style={{ height: 58, width: 58, backgroundColor: '#D9D9D9', borderRadius: 12 }}></View>
                        <Text style={{ fontSize: 9, marginTop: 8, }}>Boissons </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginLeft: 2, }}>
                        <View style={{ height: 58, width: 58, backgroundColor: '#D9D9D9', borderRadius: 12 }}></View>
                        <Text style={{ fontSize: 9, marginTop: 8, }}>Viande et poisson</Text>
                    </TouchableOpacity>
                </View>

                <View style = {{marginTop : 54, display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style = {{fontSize : 20, color : '#02005E'}}>Articles .... </Text>
                    <TouchableOpacity style = {{padingVertical: 8, paddingRight: 8, paddingLeft: 8, borderWidth: 1, borderRadius: 12, borderColor: '#D2CCF9', backgroundColor: '#F0EEFD'}}><Text>Voir tous</Text></TouchableOpacity>
                </View>

                <ScrollView horizontal style = {{marginTop: 18, height: 218}}>
                    <View style = {{height : 210, width : 143, borderRadius: 12, display: 'flex', flexDirection: 'column',  backgroundColor: '#fff', marginRight: 12, elevation: 4}}>
                        <Image source={require('../assets/images/banana.jpg')} style={{height : 139, width: 143, borderTopLeftRadius: 12, borderTopRightRadius: 12}}/>
                        <Text style = {{fontSize: 16, marginLeft: 6}}>Bananes</Text>
                        <View style = {{display: 'flex', flexDirection: 'row'}}>
                        <Text style = {{fontSize: 14, marginLeft: 6, color : '#666'}}>250 xaf</Text>
                        <View style = {{width: 27.616, height: 27.36, backgroundColor: '#FE5300',alignItems: 'center', justifyContent: 'center', borderRadius: 10, marginLeft: 49}}><Image source={require('../assets/icons/add.svg')} style={{ height: 12.36, width: 11.62, marginRight: 12, marginLeft: 12 }} /></View>
                        </View>
                    </View>

                    <View style = {{height : 210, width : 143, borderRadius: 12, display: 'flex', flexDirection: 'column',  backgroundColor: '#fff', marginRight: 12, elevation: 4}}>
                        <Image source={require('../assets/images/banana.jpg')} style={{height : 139, width: 143, borderTopLeftRadius: 12, borderTopRightRadius: 12}}/>
                        <Text style = {{fontSize: 16, marginLeft: 6}}>Bananes</Text>
                        <View style = {{display: 'flex', flexDirection: 'row'}}>
                        <Text style = {{fontSize: 14, marginLeft: 6, color : '#666'}}>250 xaf</Text>
                        <View style = {{width: 27.616, height: 27.36, backgroundColor: '#FE5300',alignItems: 'center', justifyContent: 'center', borderRadius: 10, marginLeft: 49}}><Image source={require('../assets/icons/add.svg')} style={{ height: 12.36, width: 11.62, marginRight: 12, marginLeft: 12 }} /></View>
                        </View>
                    </View>

                    <View style = {{height : 210, width : 143, borderRadius: 12, display: 'flex', flexDirection: 'column',  backgroundColor: '#fff', marginRight: 12, elevation: 4}}>
                        <Image source={require('../assets/images/banana.jpg')} style={{height : 139, width: 143, borderTopLeftRadius: 12, borderTopRightRadius: 12}}/>
                        <Text style = {{fontSize: 16, marginLeft: 6}}>Bananes</Text>
                        <View style = {{display: 'flex', flexDirection: 'row'}}>
                        <Text style = {{fontSize: 14, marginLeft: 6, color : '#666'}}>250 xaf</Text>
                        <View style = {{width: 27.616, height: 27.36, backgroundColor: '#FE5300',alignItems: 'center', justifyContent: 'center', borderRadius: 10, marginLeft: 49}}><Image source={require('../assets/icons/add.svg')} style={{ height: 12.36, width: 11.62, marginRight: 12, marginLeft: 12 }} /></View>
                        </View>
                    </View>

                    <View style = {{height : 210, width : 143, borderRadius: 12, display: 'flex', flexDirection: 'column',  backgroundColor: '#fff', marginRight: 12, elevation: 4}}>
                        <Image source={require('../assets/images/banana.jpg')} style={{height : 139, width: 143, borderTopLeftRadius: 12, borderTopRightRadius: 12}}/>
                        <Text style = {{fontSize: 16, marginLeft: 6}}>Bananes</Text>
                        <View style = {{display: 'flex', flexDirection: 'row'}}>
                        <Text style = {{fontSize: 14, marginLeft: 6, color : '#666'}}>250 xaf</Text>
                        <View style = {{width: 27.616, height: 27.36, backgroundColor: '#FE5300',alignItems: 'center', justifyContent: 'center', borderRadius: 10, marginLeft: 49}}><Image source={require('../assets/icons/add.svg')} style={{ height: 12.36, width: 11.62, marginRight: 12, marginLeft: 12 }} /></View>
                        </View>
                    </View>

                    <View style = {{height : 210, width : 143, borderRadius: 12, display: 'flex', flexDirection: 'column',  backgroundColor: '#fff', marginRight: 12, elevation: 4}}>
                        <Image source={require('../assets/images/banana.jpg')} style={{height : 139, width: 143, borderTopLeftRadius: 12, borderTopRightRadius: 12}}/>
                        <Text style = {{fontSize: 16, marginLeft: 6}}>Bananes</Text>
                        <View style = {{display: 'flex', flexDirection: 'row'}}>
                        <Text style = {{fontSize: 14, marginLeft: 6, color : '#666'}}>250 xaf</Text>
                        <View style = {{width: 27.616, height: 27.36, backgroundColor: '#FE5300',alignItems: 'center', justifyContent: 'center', borderRadius: 10, marginLeft: 49}}><Image source={require('../assets/icons/add.svg')} style={{ height: 12.36, width: 11.62, marginRight: 12, marginLeft: 12 }} /></View>
                        </View>
                    </View>
                </ScrollView>

                
            </View>
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
        paddingTop: 56,
        paddingHorizontal: 16,
    }
});
