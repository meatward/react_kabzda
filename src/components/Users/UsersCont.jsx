import Redux from 'react-redux';
import { connect } from 'react-redux';
import User from './Users';
import { ACfollowing, ACloaduser, ACunfollowing, ACpageclick, ACtotalcount } from './../../redux/users-RDC';


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
        pagePos: state.usersP.pagePos
    }
}

let f2 = (dispatch)=>{
    return{
        fnFollow: (id)=>{dispatch(ACfollowing(id))},
        fnUnfollow: (id)=>{dispatch(ACunfollowing(id))},
        fnLoadUser: (users)=>{dispatch(ACloaduser(users))}
        , pageClick: (event)=>{dispatch(ACpageclick(event))}
        , fnTotalCount: (event)=>{dispatch(ACtotalcount(event))}
       
    }
}


const mapStateToProps = f1;
const mapDispatchToProps = f2;

const UsersCont = connect(f1,f2)(User);

export default UsersCont;