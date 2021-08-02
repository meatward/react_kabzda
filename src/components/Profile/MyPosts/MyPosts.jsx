import React from 'react';
import cls from './MyPosts.module.css';
import Post from './Post/Post';
import { ACaddclick, ACupdateclick, ACupdatepost, ACupdatepost0, ACaddpost } from '../../../redux/profile-RDC';

const MyPosts = (p) =>{

let postEs = p.bigData2.profileP.postData.map(psts => <Post message={psts.message} id={psts.id} likesCount={psts.likesCount} />)

let textpost = React.createRef();
let textdiv = React.createRef();


  let addpost=()=>{
    let text = textpost.current.value;
    p.dispatch(ACaddpost(text));
    // textpost.current.value = '';
    p.dispatch(ACupdatepost0());
  }

  let onpost = ()=>{
   
debugger;
    let text = textpost.current.value;
    
debugger;
    p.dispatch(ACupdatepost(text));
    
debugger;
  }
  

  let refcarra = React.createRef();

  let cappa =()=>{
   
    let carra3=refcarra.current.value;
    p.dispatch(ACupdateclick(carra3));
  }

  let clickpost =()=>{
  
    p.dispatch(ACaddclick())
   
  }

    return (
      <div className={cls.postBlock}>
        <h3></h3>
        <div>
          <textarea onChange={onpost} ref={textpost} rows="10" cols='10' value={p.bigData2.profileP.newPostttx}/>
          8-8 
          <textarea value={p.bigData2.profileP.skoba} onChange={cappa} ref={refcarra} cols="30" rows="10"></textarea>
          <button onClick={clickpost}>xXx-plus texXx</button>
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