import Redux from 'react-redux';
import { connect } from 'react-redux';
import Users from './Users';
import { ACfollowing, ACloaduser, ACunfollowing } from './../../redux/users-RDC';

let f1 = (state) => {
    debugger
    return{
        users1: state.usersP,
        name: state.usersP.users.name,
        imgurl: state.usersP.users.photos,
        isfollow: state.usersP.isfollow,
        message: state.usersP.message,
        id: state.usersP.users.id,
        city: state.usersP.place,
        country: state.usersP.place
    }
}

let f2 = (dispatch)=>{
    return{
        fnFollow: (id)=>{dispatch(ACfollowing(id))},
        fnUnfollow: (id)=>{dispatch(ACunfollowing(id))},
        fnLoadUser: (users)=>{dispatch(ACloaduser(users))}
    }
}

const UsersCont = connect(f1,f2)(Users);

export default UsersCont;