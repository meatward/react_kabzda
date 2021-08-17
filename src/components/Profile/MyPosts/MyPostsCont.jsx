import React from 'react';
import { ACaddclick, ACupdateclick, ACupdatepost, ACupdatepost0, ACaddpost } from '../../../redux/profile-RDC';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';



    let f2=(dispatch)=>{
      return{
          cappa: (ttx)=>{
          let action = ACupdateclick(ttx);
          dispatch(action);
        },
          clickpost: ()=>{
          dispatch(ACaddclick())
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