import React from 'react';
import MyPostsCont from './MyPosts/MyPostsCont';
import cls from './Profile.module.css';
import ProfileInfoCont from './ProfileInfo/ProfileInfoCont';
import {connect} from 'react-redux';
import { storeContext } from './../../redux/redux-store';

const Profile = (p) =>{
debugger;
  

  
    return (
      <div className={cls.content}>
        <div>
          <ProfileInfoCont />
          </div>
          
          <div>
          <MyPostsCont 
          // bigData={p.bigData}
          // dispatch ={p.dispatch}
          // store = {p.store}
          
        // getState={p.getState} 
      
      />q</div>
      </div>
    )
}

export default Profile;