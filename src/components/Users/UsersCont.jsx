import Redux from 'react-redux';
import { connect } from 'react-redux';
import Users from './UsersC';
import { ACfollowing, ACloaduser, ACunfollowing, ACpageScroll, ACcount } from './../../redux/users-RDC';

let f1 = (state) => {
    return{
        users1: state.usersP,
        name: state.usersP.users.name,
        imgurl: state.usersP.users.photos,
        isfollow: state.usersP.isfollow,
        message: state.usersP.message,
        id: state.usersP.users.id,
        city: state.usersP.place,
        country: state.usersP.place,

        pageSize: state.usersP.pageSize,
        totalUsersCount: state.usersP.totalUsersCount,
        Page: state.usersP.Page,
        pagePos: state.usersP.pagePos,
    }
}

let f2 = (dispatch)=>{
    return{
        fnFollow: (id)=>{dispatch(ACfollowing(id))},
        fnUnfollow: (id)=>{dispatch(ACunfollowing(id))},
        fnLoadUser: (users)=>{dispatch(ACloaduser(users))},
        fnPageScroll: (page)=>{dispatch(ACpageScroll(page))},
        fnCount: (page)=>{dispatch(ACcount(page))},
    }
}

const UsersCont = connect(f1,f2)(Users);

export default UsersCont;