
import cls from './ProfileInfo.module.css';

const ProfileInfo = () =>{
    return (
      <div>
        <div className={cls.ava}>
        <img src='https://ih1.redbubble.net/image.531824862.7628/flat,750x1000,075,f.u3.jpg'></img></div>

        <div className={cls.description}>
          ava + description
        </div>
      </div>
    )
}

export default ProfileInfo;