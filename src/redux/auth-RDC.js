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

export default AuthRDC;