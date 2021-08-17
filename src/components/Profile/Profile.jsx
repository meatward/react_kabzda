import React from 'react';
import MyPostsCont from './MyPosts/MyPostsCont';
import cls from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

import { storeContext } from './../../redux/redux-store';

const Profile = (p) =>{

  debugger
    return (
      <div className={cls.content}>
        <div>
          <ProfileInfo /></div>
          
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