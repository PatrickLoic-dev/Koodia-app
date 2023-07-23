import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Image } from 'expo-image';
import OverlappingCardsAnimation from '../components/UI/overlappinCards';



export default function HomeScreen() {

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <View style={styles.HomeScreen}>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text style={{ fontSize: 24, color: '#FFF' }}>Koodia</Text>
                    <TouchableOpacity style={{ height: 48, width: 48, backgroundColor: '#02005E', borderRadius: 48, alignItems: 'center', justifyContent: 'center' }}>
                        <Image source={require('../assets/images/image.jpg')} style={{ height: 48, width: 48, borderRadius: 48, }} />
                    </TouchableOpacity>
                </View>

                <View style={{ marginTop: 34 }}>
                    <Text style={{ color: '#FFF', fontSize: 16 }}>Bonjour Rnam</Text>
                    <Text style={{ color: '#FFF', fontSize: 24, marginTop: 24 }}>Qu’est ce qu’on vous livre aujourd’hui ?</Text>
                </View>

                <View style={{ marginTop: 16, width: 329, height: 40, backgroundColor: '#FFF', opacity: 0.16, borderRadius: 24, padding: 12 }}>
                    <Image source={require('../assets/icons/Bell_pin.svg')} style={{ heigh: 16, width: 16 }} />
                    <Text style = {{fontSize: 12, color:'#FFF'}}>Vous avez +9 notifications  à consulter</Text>
                </View>

                <View>
                    
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
