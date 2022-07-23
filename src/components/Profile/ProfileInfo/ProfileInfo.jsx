
import React from 'react';
import Preloader from '../../common/preloader/preloader';
import cls from './ProfileInfo.module.css';


const ProfileInfo = (p) =>{
  console.log(p)
  //if(p.profile == null || p.profile ?..==undefined? ) //тип второго undefned
  if(!p.profile){
    return <div>
    <Preloader />
    </div>
  } else {return (
    <div>
      <div>
        <div style={{ color: 'red', fontSize: '30px'}}>
          <img src={p.profile.photos.large}></img>
        {p.profile.aboutMe}
        </div>
        
      </div>
      <div className={cls.ava}>
      <img src={p.ava}></img></div>

      <div className={cls.description}>
        ava + description
      </div>
    </div>
  )}
    

}

export default ProfileInfo;