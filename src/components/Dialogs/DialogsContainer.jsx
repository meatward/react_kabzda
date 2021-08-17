import React from 'react';
import { ACaddmsg, ACbodytxt } from '../../redux/dialogs-RDC';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';

// const DialogsCont = (p) => {
    
//     return (
//        <Dialogs
//        />
//      )
//     } 

let f1=(state)=>{
        return{
            fnClick: (state)=>{state.dispatch(ACaddmsg())},
            fnUpdateBody: (ttx)=>{let action=ACbodytxt(ttx);state.dispatch(action)}
        }
    }

let f2=(state)=>{
    return{
        fnDdataMap: state.dialogsP.dData,
       msgMap:state.dialogsP.MSGdata,
       fnValue:state.dialogsP.newMSGbody,  
       imgs:state.img, 
    }
}


let DialogsCont = connect(f1,f2)(Dialogs);



export default DialogsCont;