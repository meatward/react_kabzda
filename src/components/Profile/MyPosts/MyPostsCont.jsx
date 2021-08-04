import React from 'react';
import { ACaddclick, ACupdateclick, ACupdatepost, ACupdatepost0, ACaddpost } from '../../../redux/profile-RDC';
import MyPosts from './MyPosts';


const MyPostsCont = (p) =>{

let state = p.store.getState();

  // let addpost=(text)=>{
  //   let action = ACaddpost(text);
  //   p.store.dispatch(action);
  //   p.store.dispatch(ACupdatepost0());
  // }

  // let onpost = (text)=>{
  //   let action = ACupdatepost(text);
  //   p.store.dispatch(action);
  // }
  
  let cappa =(ttx)=>{
    let action = ACupdateclick(ttx);
    p.store.dispatch(action);
  }

  let clickpost =()=>{
    p.store.dispatch(ACaddclick())
  }

    return (
      <MyPosts 
      cappa={cappa}
      clickpost={clickpost}
      postDataMap = {state.profileP.postData}
      clickValue = {state.profileP.skoba}
      // onpost={onpost}
      // shitValue = {p.bigData.profileP.newPostttx}
      // addpost={addpost}
      />
    )
}

export default MyPostsCont;