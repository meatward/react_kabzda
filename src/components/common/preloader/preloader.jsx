import styles from './../../Users/Users.module.css';
import React from 'react';


 let Preloader =()=>{
    return (<div className= {styles.load}>
        <div className = {styles.center} ></div>
        <div className = {styles.ring} ></div>
        <span > ...loading </span>
    </div> )
}

export default Preloader;