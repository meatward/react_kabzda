import {createAction} from 'redaction';

const BUTTON_CLICK = 'BUTTON-CLICK';


let stateInit = {
    tablo: "",
    n1:"",
    n2:"",
    delit:"",
    ddr3:""
}

export default (state=stateInit, action)=>{
    switch(action.type){
        case BUTTON_CLICK :{
            let oso=action.id
           return {
            ...state,
            n2: {...state.n2, oso},
            tablo: state.n2
           }
        }
        default: return state;
    }
}

export const ACbuttonclick=(id)=>({type:BUTTON_CLICK, id:id});

//  calcRDC;