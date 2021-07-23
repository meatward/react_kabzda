import MyPosts from './MyPosts/MyPosts';
import cls from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (p) =>{

  
    return (
      <div className={cls.content}>
        <div>
          <ProfileInfo /></div>
          
      <MyPosts bigData={p.bigData.postData} addPost={p.addPost} newPostttx={p.bigData.newPostttx} updateNewpost={p.updateNewpost}/>
      </div>
    )
}

export default Profile;