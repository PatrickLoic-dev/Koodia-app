import axios from "axios";

export const makeRequest = axios.create({
    baseURL: "http://192.168.43.85:1337/api",
    headers: {
        Authorization: "bearer ed1cc6f96e1bcc5df28e3dada3812b9608f96fa7b62553f1bc1ac79015cbbf5ba7c8c1e5ed89ec600a2853b212297c7b8d485b46880b9edc450d63c283a5d6a218684ee680247c3d7934f4dd7bb3ffee0bee47bb8783f338d8f47aa2c262dc5db02f18834801f52efae6cdd15af9483f029c5b5ad2d0ab667a5062aec76f686f"
    }
})