
import axios from "axios";
const SET_USER_DATA = 'SET_USER_DATA';

let stateInit = {
    email: null,
    login: null,
    isAuth: false
}

let AuthRDC = (state=stateInit, action)=>{
    switch(action.type){
        case SET_USER_DATA:{
            let auh
            if(action.data.auth===0){auh=true}else{auh=false}
            return {
                ...state,
                ...action.data,
                isAuth: auh,
            }
        }
        default: return state;
    }
}

export const setUserData = (userid,login, email, auth )=>({ type:SET_USER_DATA, data:{id: userid, email:email, login, sex:"male", auth }})

export const instance = axios.create({
    withCredentials: true,
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    headers:{"API-KEY": "82b4e2a5-93df-4fb7-a008-385c7407ddcc"}
})

export default AuthRDC;