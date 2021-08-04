import React from 'react';
import cls from './../Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (p) => {
    let path = "/messages/" + p.id;
    return <div className={cls.dialog__items + ' ' + cls.active}> <NavLink to={path}>{p.name}</NavLink> </div>
}




const DialogItem2 = (p) => {
    let path = "/messages/" + p.id;
    let imgpay = p.imgs[p.id]
    
    return <div className={cls.novyi}>
        <img src={imgpay} alt="" />
        <NavLink to={path}>{p.name}</NavLink> 
        </div>
}


export default DialogItem2;