import Like from './Likes/Like';
import cls from './Post.module.css';

const Post = (p) =>{


    return (
      <div>
        <div>
          <div className={cls.pointer}>
            <img src="https://ih1.redbubble.net/image.531824862.7628/flat,750x1000,075,f.u3.jpg" alt="" />
            
            <div>
            <span>{p.message} &#60;3 </span></div>
            <span>like</span> {p.likesCount}
            </div>
          <div className={cls.posts}>
            <div className={cls.item}>____________</div>
            <div className='posts__item'>Kaboo</div>
            <div></div>
          </div>
        </div>
      </div>
    )
}

export default Post;