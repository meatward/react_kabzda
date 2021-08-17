import React from 'react';
import cls from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (p) =>{
debugger;
let postEs = p.postDataMap.map(psts => <Post message={psts.message} id={psts.id} likesCount={psts.likesCount} />)

let textpost = React.createRef();
  let refcarra = React.createRef();

let clickChange = ()=>{
  let ttx = refcarra.current.value;
  p.cappa(ttx)
}

let onclick =()=>{
  p.clickpost();
}

let clickvalue = p.clickValue

  return (
    <div className={cls.postBlock}>
      <h3></h3>
      <div>
{/* 
        <textarea onChange={(e)=>{let text = e.currentTarget.value; p.onpost(text)}} ref={textpost} rows="10" cols='10' value={p.shitValue}/>
        8-8  */}

        <textarea value={clickvalue} onChange={clickChange} ref={refcarra} cols="30" rows="10"></textarea>

        <button onClick={onclick}>xXx-plus texXx</button>

      </div>
      <div>
      {/* <button onClick={()=>{let ttx = textpost.current.value; p.addpost(ttx)}}>Add +</button> */}
      </div>
      

    
<div className={cls.posts}>
  
      
        {postEs}
        
        
      </div>
    </div>
  )
}

export default MyPosts;


