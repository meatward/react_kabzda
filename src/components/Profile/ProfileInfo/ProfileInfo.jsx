
import cls from './ProfileInfo.module.css';

const ProfileInfo = (p) =>{
    return (
      <div>
        <div className={cls.ava}>
        <img src={p.ava}></img></div>

        <div className={cls.description}>
          ava + description
        </div>
      </div>
    )
}

export default ProfileInfo;