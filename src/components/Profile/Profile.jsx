import React from 'react';
import MyPostsCont from './MyPosts/MyPostsCont';
import cls from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (p) =>{

  debugger
    return (
      <div className={cls.content}>
        <div>
          <ProfileInfo /></div>
          
          <MyPostsCont 
          bigData={p.bigData}
          dispatch ={p.dispatch}
          store = {p.store}
          
        // getState={p.getState} 
      
      />
      </div>
    )
}

export default Profile;