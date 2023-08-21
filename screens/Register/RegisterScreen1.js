import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Image } from 'expo-image';
import { FlingGestureHandler } from 'react-native-gesture-handler';
import register from '../../utils/Services/authAPI';

export default function RegisterNumber({navigation}) {

    const [text, setText] = useState('');

    
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <View style={styles.RegisterNumberScreen}>
                <Text style={{ fontSize: 28, fontWeight: 700 }}>Commençons !</Text>
                <Text style={{ fontSize: 14, marginTop: 16, color: '#33363F', opacity: 0.7 }}>Saisissez votre numéro de téléphone. Nous vous enverrons un code de confirmation.</Text>

                <View style={{ marginTop: 24, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ display: 'flex', flexDirection: 'row', paddingHorizontal: 12, paddingVertical: 16, alignItems: 'center', borderWidth: 1, height: 56, width: 125, borderRadius: 16 }}>
                        <Image source={require('../../assets/images/cameroonFlag.svg')} style={{ height: 24, width: 28, marginRight: 8 }} />
                        <Text style={{ marginRight: 8, color: '#33363F', opacity: 0.7 }}>+237</Text>
                        <Image source={require("../../assets/icons/DownSquare2.svg")} style={{ height: 24, width: 24 }} />
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', padding: 12, alignItems: 'center', borderWidth: 1, height: 56, width: 193, borderRadius: 16 }}>
                        <TextInput placeholder='Numéro de téléphone' keyboardType='numeric' onChangeText={ newText => setText(newText)} defaultValue={text}></TextInput>
                    </View>
                </View>

                
                <TouchableOpacity onPress={() => navigation.navigate('')}><Text style = {{fontSize: 14, marginTop: 24, color: '#02005E', opacity: 0.74}} onPress={() => navigation.navigate('LoginNumberScreen')}>Vous avez déjà un compte ? Connectez-vous</Text></TouchableOpacity>
                <TouchableOpacity style= {{backgroundColor: '#02005E', display: 'flex', width: 328, height: 56, padding: 12, borderRadius: 16, justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', marginTop: 468}} onPress={() => {
                     try {
                        console.log(phoneNumber);
                        register(phoneNumber);
                        navigation.navigate('OTPRegisterScreen', {num : phoneNumber});
                    } catch (error) {
                        console.log(error)
                    }
                }}>
                    <Text style ={{color: '#ffff', fontSize: 14}}>Verifier mon numéro</Text>
                    <View style= {{height: 32, width: 32, backgroundColor: '#fff', borderRadius: 16, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <Image source={require("../../assets/icons/Phone.svg")} style={{ height:  18.286, width:  18.286 }} />
                    </View>
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
