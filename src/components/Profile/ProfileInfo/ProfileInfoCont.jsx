
import { connect } from 'react-redux';
import ProfileInfo from './ProfileInfo';

let f1Profile=(state)=> {
    return{
      ava: state.avatar.ava1
    }
  } ;

let ProfileInfoCont = connect(f1Profile)(ProfileInfo)

export default ProfileInfoCont;