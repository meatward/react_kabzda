import React from 'react';
import { ACaddclick, ACupdateclick, ACupdatepost, ACupdatepost0, ACaddpost } from '../../../redux/profile-RDC';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';

// const MyPostsCont = () =>{

        
// let state = store.getState();

// let cappa =(ttx)=>{
//   let action = ACupdateclick(ttx);
//   store.dispatch(action);
// }

// let clickpost =()=>{
//   store.dispatch(ACaddclick())
// }

//      return <MyPosts 
//       cappa={cappa}
//       clickpost={clickpost}
//       postDataMap = {state.profileP.postData}
//       clickValue = {state.profileP.skoba}
//       // onpost={onpost}
//       // shitValue = {p.bigData.profileP.newPostttx}
//       // addpost={addpost}
//       />
//     }

    let f2=(state)=>{
      return{
          cappa: (ttx)=>{
          let action = ACupdateclick(ttx);
          state.dispatch(action);
        },
          clickpost: ()=>{
          state.dispatch(ACaddclick())
        }
      }
    }

    let f1 =(state)=>{
      return{
        postDataMap: state.profileP.postData,
      clickValue: state.profileP.skoba
      }
    }
  
    const MyPostsCont = connect(f1, f2)(MyPosts);

export default MyPostsCont;