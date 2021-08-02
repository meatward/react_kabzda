import MyPosts from './MyPosts/MyPosts';
import cls from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (p) =>{

  
    return (
      <div className={cls.content}>
        <div>
          <ProfileInfo /></div>
          
      <MyPosts bigData={p.bigData.postData}
      bigData2={p.bigData2} 
      
      dispatch ={p.dispatch}
      
      />
      </div>
    )
    
}

export default Profile;