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

  let refcarra = React.createRef();

  let cappa =()=>{
    let carra3=refcarra.current.value;
    console.log(p.bigData2.skoba);
    p.updateskoba(carra3);
  }

    return (
      <div className={cls.postBlock}>
        <h3></h3>
        <div>
          <textarea onChange={onpost} ref={textpost} rows="10" cols='10' value={p.newPostttx}/>
          8-8 
          <textarea value={p.bigData2.skoba} onChange={cappa} ref={refcarra} cols="30" rows="10"></textarea>
          <button onClick={p.addclick}>xXx-plus texXx</button>
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