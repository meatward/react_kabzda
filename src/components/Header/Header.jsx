import React from 'react';
import { NavLink } from 'react-router-dom';
import cls from'./Header.module.css';

const Header = (props) =>{
    return (
        <header className={cls.header}>
        <img src='https://upload.wikimedia.org/wikipedia/commons/4/48/Dell_Logo.svg'/>

        
        <div className={cls.leftLogin}>
          <h1>{props.login}</h1>
          <img src={props.ava} alt="" />
        </div>
      </header>
      
    )
}



//let ProfileAPIwithURL = withRouter(ProfileAPI)

export default Header;