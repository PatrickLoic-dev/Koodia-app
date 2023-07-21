import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Image } from 'expo-image';
import { FlingGestureHandler } from 'react-native-gesture-handler';

export default function PersonnalInfoScreen() {



    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <View style={styles.RegisterNumberScreen}>
                <Text style={{ fontSize: 28 }}>Votre nom et prenom</Text>
                <Text style={{ fontSize: 14, marginTop: 16, color: '#33363F', opacity: 0.7 }}>Renseigner les champs suivant tel que sur votre document d’identification national.</Text>

                <View style={{ marginTop: 24, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <View style = {{padding: 12, borderWidth: 1, borderRadius: 16, width: 328}}>
                        <Text style = {{ fontSize: 10}}>Quel(s) est(sont) votre(vos) nom(s)</Text>
                        <View style= {{display: 'flex', flexDirection: 'row'}}>
                            <TextInput placeholder='ex : Jesse José'></TextInput>
                        </View>
                    </View>

                    <View style = {{padding: 12, borderWidth: 1, borderRadius: 16, width: 328, marginTop: 24}}>
                        <Text style = {{ fontSize: 10}}>Quel(s) est(sont) votre(vos) prenom(s)</Text>
                        <View style= {{display: 'flex', flexDirection: 'row'}}>
                            <TextInput placeholder='ex : Jesse José'></TextInput>
                        </View>
                    </View>
                </View>

               
              
                <TouchableOpacity style= {{backgroundColor: '#02005E', display: 'flex', width: 328, height: 56, padding: 12, borderRadius: 16, justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', marginTop: 403}}>
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
