import React from 'react';
import MyPostsCont from './MyPosts/MyPostsCont';
import cls from './Profile.module.css';
import ProfileInfoCont from './ProfileInfo/ProfileInfoCont';
import {connect} from 'react-redux';
//import { storeContext } from '../../redux/redux-store';
import * as axios from 'axios';
import {ACpushP, fnChangeId} from '../../redux/profile-RDC'
import { Route, withRouter } from 'react-router-dom';
import Preloader from '../common/preloader/preloader';

class ProfileAPI extends React.Component {
     constructor (props){
       super(props);
   }
   
  componentDidMount(){
    
    
    let userId = this.props.match.params.userId
    if (!userId){
     userId=1793
    }
    
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(response=>{
      this.props.ACpushP(response.data)
    })
  }

  render(){
    console.log(this.props.profile)
    if(!this.props.profile){
      <Preloader />
    } else {  return (
      <div className={cls.content}>
        <div>
       <ProfileInfoCont {...this.props} />
         
          </div>
      <div>
       
      </div>
          <div>
          <MyPostsCont 
          // bigData={p.bigData}
          // dispatch ={p.dispatch}
          // store = {p.store}
          
        // getState={p.getState} 
      
      />q</div>
      </div>
    )}
   }
  }
  
  let mapStateToProps =(state)=>({
    profile: state.profileP.profile
  });

let mapDispatchToProps =(dispatch)=>({
    
})

let ProfileAPIwithURL = withRouter(ProfileAPI)

export default connect(mapStateToProps, {ACpushP, fnChangeId})(ProfileAPIwithURL);