import cls from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () =>{

let postData = [
  {id:1, message:'goo5 hhtth&?', likesCunt:12},
  {id:2, message:'soBA4 KAAA1111!11', likesCunt:12}
]
    return (
      <div className={cls.postBlock}>
        <h3>My Post</h3>
        <div>
          <textarea name="" id="" cols="30" rows="10"></textarea>
        </div>
        <div>
        <button>Add +</button>
        </div>
        <div className={cls.posts}>
          <Post message={postData[0].message} id={postData[0].id} likesCount={postData[0].likesCunt} />
          <Post message={postData[1].message} id={postData[1].id} likesCount={postData[1].likesCunt} />
          <Post message={postData[1].message} id={postData[1].id} likesCount={postData[1].likesCunt} />
          
          <Post/>
        </div>
      </div>
    )
}

export default MyPosts;