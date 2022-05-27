import React from 'react';
import { ACaddmsg, ACbodytxt } from '../../redux/dialogs-RDC';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';


let f2=(state)=>{
    
    return{
       fnDdataMap: state.dialogsP.dData,
       msgMap:state.dialogsP.MSGdata,
       fnValue:state.dialogsP.newMSGbody,  
       imgs:state.img, 
    }
}


let f1=(dispatch)=>{
    
        return{
            fnClick: ()=>{dispatch(ACaddmsg())},    
            fnUpdateBody: (ttx)=>{let action=ACbodytxt(ttx);dispatch(action)}
        }
    }
const DialogsCont = connect(f2,f1)(Dialogs);



export default DialogsCont;