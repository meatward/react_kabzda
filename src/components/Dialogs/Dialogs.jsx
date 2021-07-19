import React from 'react';
import cls from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';
import Message from './Message/Message';

const DialogItem = (p) => {
    let path = "/messages/" + p.id;
    return <div className={cls.dialog__items + ' ' + cls.active}> <NavLink to={path}>{p.name}</NavLink> </div>
}

const DialogItem2 = (p) => {
    let path = "/messages/" + p.id;
    return (
        <div className={cls.novyi}><NavLink to={path}>{p.name}</NavLink> </div>
    )
}


const Dialogs = (p) => {
    let dData = [
        { id: 1, name: 'sveo56' },
        { id: 2, name: 'QQ2rPk9t6' },
        { id: 3, name: 'soja' },
        { id: 4, name: 'opal' },
        { id: 5, name: '11odim' }
    ]

    let MSGdata =
        [
            { id: 1, message: 'olol' },
            { id: 2, message: 'rtyfg' },
            { id: 3, message: 'dfgsdf fdsg  re' },
            { id: 4, message: 'o44-4-444--lol' },
            { id: 5, message: 'olol' }
        ]

    // let dArray = dData.map(dData[0]=>(<DialogItem name={dData[0].name} id={dData[0].id} />))
    // console.log(dArray)

    // let a = {
    //     id: 2,
    //     name: 'QQ2rPk9t6'
    // }


    // [
    //     <DialogItem name={dData[0].name} id={dData[0].id}/>,<DialogItem name={dData[1].name} id={dData[1].id}/>,
    //             <DialogItem name={dData[2].name} id={dData[2].id}/>

    // ]

    let dElements = dData
        .map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)


    let MSGelem = MSGdata
        .map(msg => <Message message={msg.message} id={msg.id} />)

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
                {MSGelem}
                {/* <Message message={MSGs[0].message} id={MSGs[0].id} />
            <Message message={MSGs[1].message} id={MSGs[1].id} /> */}

            </div>
        </div>
    )
}

export default Dialogs;