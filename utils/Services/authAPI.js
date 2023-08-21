import { URL_REGISTER } from "../../constants/config";
import axios from "axios";
import { makeRequest } from "../MakeRequest";
import AsyncStorage from '@react-native-async-storage/async-storage'

function register(phone){
    return makeRequest.post(URL_REGISTER, {
        username : 'User'+String(Math.floor(Math.random() * 100)),
        phone : phone,
        role : 1
    }).then(res => {
        console.log(res.data);
        AsyncStorage.setItem('authToken', res.data.jwt);
        console.log(AsyncStorage.getItem('authToken'));
        AsyncStorage.setItem('username', res.data.newUser.username);
        console.log(AsyncStorage.getItem('username'));
        //makeRequest.defaults.headers['Authorization'] = "Bearer " + res.jwt;
    });
        
}

export default register