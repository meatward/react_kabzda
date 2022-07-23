
import { connect } from 'react-redux';
import ProfileInfo from './ProfileInfo';
import {ACpushP} from './../../../redux/profile-RDC'

let f1Profile=(state)=> {
    return{
      ava: state.avatar.ava1,
      pageSize: state.usersP.pageSize,
      profile: state.profileP.profile
    }
  } ;

let ProfileInfoCont = connect(f1Profile)(ProfileInfo)

export default ProfileInfoCont;