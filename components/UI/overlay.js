import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Image } from 'expo-image';


export default function Overlay() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <StatusBar style="light" />
            <View style={{ marginTop: 48, marginBottom: 24, marginHorizontal: 24 }}>
                <Text style={{ fontSize: 24 }}>Choisir un moyen de verification</Text>
                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginTop: 24 }}>
                    <View style={{ height: 32, width: 32, backgroundColor: '#c8c8c8', borderRadius: 8, alignItems: 'center', justifyContent: 'center' }}><Image source={require('../../assets/icons/whatsapp.svg')} style={{ height: 16, width: 16 }} /></View>
                    <Text style={{ fontSize: 14, marginLeft: 12 }}>Par un message WhatsApp</Text>
                </TouchableOpacity>
                <View style= {{flexDirection: 'row', justifyContent: 'space-between', marginTop: 24}}>
                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ height: 32, width: 32, backgroundColor: '#c8c8c8', borderRadius: 8, alignItems: 'center', justifyContent: 'center' }}><Image source={require('../../assets/icons/messages.svg')} style={{ height: 16, width: 16 }} /></View>
                    <Text style={{ fontSize: 14, marginLeft: 12 }}>Par un SMS</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ height: 32, width: 32, backgroundColor: '#f8ebc4', borderRadius: 8, alignItems: 'center', justifyContent: 'center', borderRadius: 30 }}><Image source={require('../../assets/icons/tick-circle-yellow.svg')} style={{ height: 24, width: 24 }}/></TouchableOpacity>
                </View>
            </View>
        </View>
    );
}