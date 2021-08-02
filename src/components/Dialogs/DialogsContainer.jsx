import React from 'react';
import cls from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem2 from './DialogItem/DialogItem';
import { ACaddmsg, ACbodytxt } from '../../redux/dialogs-RDC';


const DialogsCont = (p) => {
  
    let msgadd = React.createRef();
    let msgRefbut = React.createRef();

    let msgpost =()=>{
        p.dispatch(ACaddmsg())
    }
    // let msgbody=()=>{
    //     let text = msgadd.current.value;
    //     p.dispatch(ACbodytxt(text))
    // }

    let msgbody=(ev)=>{
        debugger;
            let text = ev.target.value;
         
            p.dispatch(ACbodytxt(text));
        }

    let bodyvalue = p.bigData.newMSGbody;

    let dElements = p.bigData.dData.map(dialog => <DialogItem2 name={dialog.name} id={dialog.id} imgs={p.imgs}/>)


    let MSGelem = p.bigData.MSGdata
        .map(msg => <Message message={msg.message} id={msg.id} />)

let msg3elem = MSGelem

    return (
       <Dialogs />
    )
}

export default DialogsCont;