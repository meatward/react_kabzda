import React from 'react';
import cls from './MyPosts.module.css';
import Post from './Post/Post';


// let postData = [
//   {id:1, message:'goo5 hhtth&?', likesCount:12},
//   {id:2, message:'soBA4 KAAA1111!11', likesCount:12}
// ]

const MyPosts = (p) =>{

let postEs = p.bigData.map(psts => <Post message={psts.message} id={psts.id} likesCount={psts.likesCount} />)

let textpost = React.createRef();
let textdiv = React.createRef();

  let addpost=()=>{
    
    let text = textpost.current.value;
    p.addPost(text);
    // textpost.current.value = '';
    p.updateNewpost('');
  }

  let onpost = ()=>{
    let text = textpost.current.value;
    p.updateNewpost(text);
    
  }

    return (
      <div className={cls.postBlock}>
        <h3></h3>
        <div>
          <textarea onChange={onpost} ref={textpost} rows="10" cols='10' value={p.newPostttx}/>
        </div>
        <div ref={textdiv}>text</div>
        <div>
        <button onClick={addpost}>Add +</button>
        </div>
        
  
      
<div className={cls.posts}>
    
        
          {postEs}
          
          
        </div>
      </div>
    )
}

export default MyPosts;