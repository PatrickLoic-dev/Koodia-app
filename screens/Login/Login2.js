import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Image } from 'expo-image';
import update	 from '../../utils/Services/updateAPI';
import { FlingGestureHandler } from 'react-native-gesture-handler';

export default function OTPLoginScreen({navigation, num}) {
  const [firstNum, setFirstNum] = useState('');
  const [secondNum, setSecondNum] = useState('');
  const [thirdNum, setThirdNum] = useState('');
  const [fourthNum, setFourthNum] = useState('');

  let OTP = '';


    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <View style={styles.OTPLoginScreen}>
                <Text style={{ fontSize: 28, fontWeight: 700 }}>Code à quatre chiffres</Text>
                <Text style={{ fontSize: 14, marginTop: 16, color: '#33363F', opacity: 0.7 }}>Nous vous avons envoyé un code +237 {num}, renseignez le ici.</Text>

                <View style={{ marginTop: 24, display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <TextInput style= {{borderWidth: 1, width: 50, height: 61, borderRadius: 12, borderColor: '#555655', textAlign:'center'}} keyboardType='numeric' maxLength={1} onChangeText={(text) => setFirstNum(text)}></TextInput>
                    <Image source={require('../../assets/icons/Vector2.svg')} style={{ height: 5, width: 10, marginHorizontal: 8 }} />
                    <TextInput style= {{borderWidth: 1, width: 50, height: 61, borderRadius: 12, borderColor: '#555655', textAlign:'center'}} keyboardType='numeric' maxLength={1} onChangeText={(text) => setSecondNum(text)}></TextInput>
                    <Image source={require('../../assets/icons/Vector2.svg')} style={{ height: 5, width: 10, marginHorizontal: 8 }} />
                    <TextInput style= {{borderWidth: 1, width: 50, height: 61, borderRadius: 12, borderColor: '#555655', textAlign:'center'}} keyboardType='numeric' maxLength={1} onChangeText={(text) => setThirdNum(text)}></TextInput>
                    <Image source={require('../../assets/icons/Vector2.svg')} style={{ height: 5, width: 10, marginHorizontal: 8 }} />
                    <TextInput style= {{borderWidth: 1, width: 50, height: 61, borderRadius: 12, borderColor: '#555655', textAlign:'center'}} keyboardType='numeric' maxLength={1} onChangeText={(text) => setFourthNum(text)}></TextInput>
                </View>

                <TouchableOpacity><Text style = {{fontSize: 14, marginTop: 24, color: '#02005E', opacity: 0.74}}>Renvoyer le code</Text></TouchableOpacity>
                <TouchableOpacity><Text style = {{fontSize: 14, marginTop: 16, color: '#02005E', opacity: 0.74}}>Choisir un moyen de verification</Text></TouchableOpacity>
                <TouchableOpacity><Text style = {{fontSize: 14, marginTop: 24, color: '#02005E', opacity: 0.74}}>Vous n’avez pas  de compte ? Inscrivez-vous</Text></TouchableOpacity>
                <TouchableOpacity style= {{backgroundColor: '#02005E', display: 'flex', width: 328, height: 56, padding: 12, borderRadius: 16, justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', marginTop: 364}} onPress ={() => {
                    try {
                        OTP = firstNum+secondNum+thirdNum+fourthNum
                        console.log(OTP);
                        update(OTP);
                        navigation.navigate('Home');
                    } catch (error) {
                        console.log(error)
                    }
                }}>
                    <Text style ={{color: '#ffff', fontSize: 14}}>Verifier mon numéro</Text>
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

    OTPLoginScreen: {
        display: 'flex',
        flexDirection: 'column',
        paddingTop: 56,
        paddingHorizontal: 16,
    }
});
