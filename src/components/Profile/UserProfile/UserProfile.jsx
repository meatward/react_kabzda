
import { connect } from 'react-redux';
import React from 'react';

let UserProfile =(props)=>{
    return(
        <div>
            <span>{props.usersP.profile}</span>
        </div>
    )
}



let mapStateToProps=(state)=> {
    return{
      ava: state.avatar.ava1,
      pageSize: state.usersP.pageSize
    }
  } ;



let ProfileInfoCont = connect(mapStateToProps)(UserProfile)

export default ProfileInfoCont;