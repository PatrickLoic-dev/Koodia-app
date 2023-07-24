import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Image } from 'expo-image';
import { FlingGestureHandler } from 'react-native-gesture-handler';
import CustomModal from '../../components/UI/overlay';


export default function OTPRegisterScreen({ navigation }) {
    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };


    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <View style={styles.RegisterNumberScreen}>
                <Text style={{ fontSize: 28 }}>Code à quatre chiffres</Text>
                <Text style={{ fontSize: 14, marginTop: 16, color: '#33363F', opacity: 0.7 }}>Nous vous avons envoyé un code +237 695 70 78, renseignez le ici.</Text>

                <View style={{ marginTop: 24, display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <TextInput style={{ borderWidth: 1, width: 50, height: 61, borderRadius: 12, borderColor: '#555655' }}></TextInput>
                    <Image source={require('../../assets/icons/Vector2.svg')} style={{ height: 5, width: 10, marginHorizontal: 8 }} />
                    <TextInput style={{ borderWidth: 1, width: 50, height: 61, borderRadius: 12, borderColor: '#555655' }}></TextInput>
                    <Image source={require('../../assets/icons/Vector2.svg')} style={{ height: 5, width: 10, marginHorizontal: 8 }} />
                    <TextInput style={{ borderWidth: 1, width: 50, height: 61, borderRadius: 12, borderColor: '#555655' }}></TextInput>
                    <Image source={require('../../assets/icons/Vector2.svg')} style={{ height: 5, width: 10, marginHorizontal: 8 }} />
                    <TextInput style={{ borderWidth: 1, width: 50, height: 61, borderRadius: 12, borderColor: '#555655' }}></TextInput>
                </View>

                <TouchableOpacity><Text style={{ fontSize: 14, marginTop: 24, color: '#02005E', opacity: 0.74 }}>Renvoyer le code</Text></TouchableOpacity>
                <TouchableOpacity><Text style={{ fontSize: 14, marginTop: 16, color: '#02005E', opacity: 0.74 }} onPress={toggleModal}>Choisir un moyen de verification</Text></TouchableOpacity>
                <TouchableOpacity><Text style={{ fontSize: 14, marginTop: 24, color: '#02005E', opacity: 0.74 }}>Vous n’avez pas  de compte ? Inscrivez-vous</Text></TouchableOpacity>

                <CustomModal visible={isModalVisible} onClose={toggleModal}>
                    <Text style={{ fontSize: 24 }}>Choisir un moyen de verification</Text>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginTop: 24 }}>
                        <View style={{ height: 32, width: 32, backgroundColor: '#c8c8c8', borderRadius: 8, alignItems: 'center', justifyContent: 'center' }}><Image source={require('../../assets/icons/whatsapp.svg')} style={{ height: 16, width: 16 }} /></View>
                        <Text style={{ fontSize: 14, marginLeft: 12 }}>Par un message WhatsApp</Text>
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 24 }}>
                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={{ height: 32, width: 32, backgroundColor: '#c8c8c8', borderRadius: 8, alignItems: 'center', justifyContent: 'center' }}><Image source={require('../../assets/icons/messages.svg')} style={{ height: 16, width: 16 }} /></View>
                            <Text style={{ fontSize: 14, marginLeft: 12 }}>Par un SMS</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ height: 32, width: 32, backgroundColor: '#f8ebc4', borderRadius: 8, alignItems: 'center', justifyContent: 'center', borderRadius: 30 }} onPress={toggleModal}><Image source={require('../../assets/icons/tick-circle-yellow.svg')} style={{ height: 24, width: 24 }} /></TouchableOpacity>
                    </View>
                </CustomModal>

                <TouchableOpacity style={{ backgroundColor: '#02005E', display: 'flex', width: 328, height: 56, padding: 12, borderRadius: 16, justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', marginTop: 384 }}>
                    <Text style={{ color: '#ffff', fontSize: 14 }}>Verifier mon numéro</Text>
                    <Image source={require("../../assets/icons/check.svg")} style={{ height: 24, width: 24 }} />
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
