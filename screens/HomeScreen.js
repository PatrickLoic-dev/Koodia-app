import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Image } from 'expo-image';
import OverlappingCardsAnimation from '../components/UI/overlappinCards';




export default function HomeScreen({navigation}) {

    return (
        <View style={styles.container}>
            <StatusBar style="light" />
            <View style={styles.HomeScreen}>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Image source = {require("../assets/KoodiaIco.png")} style = {{height : 64, width : 64}}/>
                    <TouchableOpacity style={{ height: 48, width: 48, backgroundColor: '#02005E', borderRadius: 48, alignItems: 'center', justifyContent: 'center' }}>
                        <Image source={require('../assets/images/image.jpg')} style={{ height: 48, width: 48, borderRadius: 48, }} />
                    </TouchableOpacity>
                </View>

                <View style={{ marginTop: 34 }}>
                    <Text style={{ color: '#FFF', fontSize: 16 }}>Bonjour Rnam</Text>
                    <Text style={{ color: '#FFF', fontSize: 24, marginTop: 16, fontWeight: 600 }}>Qu’est ce qu’on vous livre aujourd’hui ?</Text>
                </View>

                <View style={{ marginTop: 16, width: 329, height: 40, backgroundColor: 'rgba(255, 255, 255, 0.16)', borderRadius: 24, padding: 12, flexDirection: 'row',alignItems:'center' }}>
                    <Image source={require('../assets/icons/bell_pin.svg')} style={{height: 16, width: 16}}/>
                    <Text style = {{fontSize: 12, color:'#FFF', marginLeft: 8}}>Vous avez +9 notifications à consulter</Text>
                </View>

                <View>
                    <OverlappingCardsAnimation navigation={navigation}></OverlappingCardsAnimation>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#02005E'
    },

    HomeScreen: {
        display: 'flex',
        flexDirection: 'column',
        paddingTop: 56,
        paddingHorizontal: 16,
    },
    Text: {
        color: '#FFF',
        fontSize: 16
    },
    card: {
        width: 200,
        height: 200,
        borderRadius: 10,
        position: 'absolute',
        backgroundColor: 'blue',
    },
});
