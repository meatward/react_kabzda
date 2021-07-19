import MyPosts from './MyPosts/MyPosts';
import cls from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = () =>{
    return (
      <div className={cls.content}>
        <div>
          <ProfileInfo /></div>
          
      <MyPosts />
      </div>
    )
}

export default Profile;