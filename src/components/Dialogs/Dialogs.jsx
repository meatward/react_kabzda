import React from 'react';
import cls from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem2 from './DialogItem/DialogItem';
import { ACaddmsg, ACbodytxt } from '../../redux/dialogs-RDC';


const Dialogs = (p) => {
  
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
        <div className={cls.dialogs}>
            <div className={cls.dialog__item}>
                { dElements }

                {/* <DialogItem name={dData[0].name} id={dData[0].id}/>
            <DialogItem name={dData[1].name} id={dData[1].id}/>
            <DialogItem name={dData[2].name} id={dData[2].id}/>
             */}

            </div>

            <div>
                <div>{msg3elem}</div>
                <textarea value={bodyvalue} ref={msgadd} onChange={msgbody} cols="30" rows="10"></textarea>
                <button ref={msgRefbut} onClick={msgpost}>hello</button>
                
                {/* <Message message={MSGs[0].message} id={MSGs[0].id} />
            <Message message={MSGs[1].message} id={MSGs[1].id} /> */}

            </div>
        </div>
    )
}

export default Dialogs;