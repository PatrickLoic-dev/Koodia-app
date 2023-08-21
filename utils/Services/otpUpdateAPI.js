import { URL_UPDATEOTP } from "../../constants/config";
import axios from "axios";
import { makeRequest } from "../MakeRequest";
import AsyncStorage from '@react-native-async-storage/async-storage';

function otpUpdate(phone){

    return makeRequest.post(URL_UPDATEOTP, {
        phone : phone
    }).then(res => {
        console.log(res.data);
        // AsyncStorage.setItem('authToken', res.data.jwt);
        // AsyncStorage.setItem('username', res.data.username);
        // makeRequest.defaults.headers['Authorization'] = "Bearer " + res.data.jwt;
    });
        
}

export default otpUpdate