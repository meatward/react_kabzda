
// @ts-nocheck
import React from 'react';
import Header from './Header';
import * as curl from 'curl';
import cors from 'cors';
import { connect } from 'react-redux';
import {setUserData} from './../../redux/auth-RDC'
import cls from "./Header.module.css"
import { NavLink } from 'react-router-dom';

var axios = require('axios').default;
const instance = axios.create({
    withCredentials: true,
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    headers:{"API-KEY": "82b4e2a5-93df-4fb7-a008-385c7407ddcc"}
})

const Header2 = ()=>{
    return(<header className={cls.header}>
    <div>
        
    <div className={cls.loginBlock}>
          <NavLink to={'/login'}>logon</NavLink>
        </div>
    </div>
    </header>)
}

class HeaderCont extends React.Component {
    componentDidMount(){
         instance.get('auth/me').then(
             response =>{
                 if(response.data.resultCode === 0){
                     let {email, id:userid, login} = response.data.data;
                     let AuthNum = response.data.resultCode;
                     this.props.setUserData(userid,login,email, AuthNum)
                 }
             }
         )
    }

    render(){
        if(this.props.isAuth===true){
        return <Header {...this.props} />}else{
            return <Header2 />
        }
    }
}

const mapStateToProps=(state)=>({
    isAuth: state.authP.isAuth,
    login: state.authP.login,
    ava: state.avatar.ava1
})

export default connect(mapStateToProps, {setUserData})(HeaderCont);
