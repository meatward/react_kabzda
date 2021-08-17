import React from 'react';
import cls from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem2 from './DialogItem/DialogItem';


const Dialogs = (p) => {
  debugger;
    let msgadd = React.createRef();
    let msgRefbut = React.createRef();


    let dElements = p.fnDdataMap.map(dialog => <DialogItem2 name={dialog.name} id={dialog.id} imgs={p.imgs}/>)

    let MSGelem = p.msgMap
        .map(msg => <Message message={msg.message} id={msg.id} />)
        debugger;
let msg3elem = MSGelem

// let bodyChange =(e)=>{
//     let ttx = e.currentTarget.value;
//     p.fnUpdateBody(ttx)
// }
debugger;
    return (
        <div className={cls.dialogs}>
           <h1>rthrthrtherth</h1>
            <div className={cls.dialog__item}>
                { dElements }

            </div>

            <div>
                <div>{msg3elem}</div>
                <textarea value={p.fnValue} ref={msgadd} onChange={(e)=>{let ttx = e.currentTarget.value; p.fnUpdateBody(ttx)}} cols="30" rows="10"></textarea>
                <button ref={msgRefbut} onClick={p.fnClick}>hello</button>
                
                {/* <Message message={MSGs[0].message} id={MSGs[0].id} />
            <Message message={MSGs[1].message} id={MSGs[1].id} /> */}

            </div>
        </div>
    )
    debugger;
}

export default Dialogs;