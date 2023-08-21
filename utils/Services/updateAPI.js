import { URL_CONFIRM } from "../../constants/config";
import axios from "axios";
import { makeRequest } from "../MakeRequest";
import AsyncStorage from '@react-native-async-storage/async-storage';

function update(OTP){
    let isConfirmed = false;
    return makeRequest.post(URL_CONFIRM, {
        otp : OTP
    }).then(res => {
        console.log(res.data);
        // AsyncStorage.setItem('authToken', res.data.jwt);
        // AsyncStorage.setItem('username', res.data.username);
        // makeRequest.defaults.headers['Authorization'] = "Bearer " + res.data.jwt;
    });
        
}

export default update