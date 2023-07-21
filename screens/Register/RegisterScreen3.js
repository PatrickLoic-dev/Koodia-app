import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Image } from 'expo-image';
import { FlingGestureHandler } from 'react-native-gesture-handler';

export default function ResidenceScreen() {



    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <View style={styles.RegisterNumberScreen}>
                <Text style={{ fontSize: 28 }}>Lieu de residence</Text>
                <Text style={{ fontSize: 14, marginTop: 16, color: '#33363F', opacity: 0.7 }}>Indiquer votre lieu de résidence.</Text>

                <View style={{ marginTop: 24, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <View style = {{padding: 12, borderWidth: 1, borderRadius: 16, width: 328}}>
                        <Text style = {{ fontSize: 10}}>Dans quelle ville êtes vous situé ?</Text>
                        <View style= {{display: 'flex', flexDirection: 'row'}}>
                            <Text style= {{marginRight: 4, fontSize: 16}}>Douala</Text>
                            <Text style = {{ fontSize: 16, marginRight: 48}}>Wouri, Littoral Cameroun</Text>
                            <Image source={require("../../assets/icons/DownSquare2.svg")} style={{ height: 24, width: 24 }} />
                        </View>
                    </View>

                    <View style = {{padding: 12, borderWidth: 1, borderRadius: 16, width: 328, marginTop: 24}}>
                        <Text style = {{ fontSize: 10}}>Dans quelle quartier résidez-vous ?</Text>
                        <View style= {{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                            <TextInput placeholder = 'Logpom' style = {{ fontSize: 16}}></TextInput>
                            <Image source={require("../../assets/icons/Location.svg")} style={{ height: 24, width: 24 }} />
                        </View>
                    </View>

                    <View style = {{padding: 12, borderWidth: 1, borderRadius: 16, width: 328, marginTop: 24}}>
                        <Text style = {{ fontSize: 16}}>Fin goudron bassong, immeuble gris, face boulangerie Mino logpom. </Text>
                        <View style= {{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                            <TextInput placeholder = 'Une précision sur votre quartier (Optionel)' style = {{ fontSize: 10}}></TextInput>
                            <Image source={require("../../assets/icons/tick-circle.svg")} style={{ height: 16, width: 16 }} />
                        </View>
                    </View>
                </View>

               
               <TouchableOpacity style = {{display: 'flex', alignItems: 'center', flexDirection: 'row', marginTop: 24,}}><Image source={require("../../assets/icons/location-tick.svg")} style={{ height: 24, width: 24 }} /><Text style = {{fontSize: 14, color: '#02005E', opacity: 0.74}}>  Choisir ma position actuelle</Text></TouchableOpacity>
                <TouchableOpacity style= {{backgroundColor: '#02005E', display: 'flex', width: 328, height: 56, padding: 12, borderRadius: 16, justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', marginTop: 254}}>
                    <Text style ={{color: '#ffff', fontSize: 14}}>Valider mon compte</Text>
                    <Image source={require("../../assets/icons/check.svg")} style={{ height:  24, width:  24 }} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },

    RegisterNumberScreen: {
        display: 'flex',
        flexDirection: 'column',
        paddingTop: 56,
        paddingHorizontal: 16,
    }
});
