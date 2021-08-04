import React from 'react';
import { ACaddmsg, ACbodytxt } from '../../redux/dialogs-RDC';
import Dialogs from './Dialogs';

debugger;
const DialogsCont = (p) => {

let clickMsg =()=>{
    p.dispatch(ACaddmsg());
}
let postChange = (ttx) =>{

    let action = ACbodytxt(ttx);
    p.dispatch(action)
}

    return (
       <Dialogs 
       fnUpdateBody={postChange} 
       fnClick={clickMsg} 
       fnValue = {p.bigData.dialogsP.newMSGbody}
       fnDdataMap = {p.bigData.dialogsP.dData}
       msgMap={p.bigData.dialogsP.MSGdata}
       imgs={p.bigData.img} />
    )
}

export default DialogsCont;