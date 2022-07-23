import Redux from 'react-redux';
import { connect } from 'react-redux';
//import UsersAPI from './UsersAPI';
import { fnFollow, fnLoadUser, ACunfollowing, fnPageScroll, ACcount, ACswitchFetch } from './../../redux/users-RDC';
import Preloader from './../common/preloader/preloader';


import styles from './Users.module.css';
import React from 'react';
import Users from './Users';
//import * as axios from 'axios';
var axios = require('axios').default;



class UsersAPI extends React.Component {
    
    constructor (props){
        super(props);
    }

        componentDidMount(){
            // @ts-ignore
            this.props.fnSwitchFetch(true);
                axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.Page}&count=${this.props.pageSize}`).then(response => {
                    this.props.fnSwitchFetch(false);
                        this.props.fnLoadUser(response.data.items)
                        this.props.fnCount(response.data.totalCount)
                    });
            }
        
        pageScroll = (eee) =>{
            this.props.fnSwitchFetch(true);
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${eee}&count=${this.props.pageSize}`).then(
                response => {
                    this.props.fnSwitchFetch(false);
                    this.props.fnLoadUser(response.data.items)
                }
            )
        }
    

        render(){  
            

    return ( <>
        {this.props.isFetch 
        ? <Preloader />
        : null }
        <Users pageScroll={this.pageScroll}
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        pagePos={this.props.pagePos}
        users1={this.props.users1}
        fnPageScroll={this.props.fnPageScroll}
        fnUnfollow={this.props.fnUnfollow}
        fnFollow={this.props.fnFollow} 
        />
        
        </>
    )
    }
}

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
        isFetch: state.usersP.isFetch,
    }
}

// let f2 = (dispatch)=>{
//     return{
//         fnFollow: ACfollowing,
//         fnUnfollow: ACunfollowing,
//         fnLoadUser: ACloaduser,
//         fnPageScroll: ACpageScroll,
//         fnCount: ACcount,
//         fnSwitchFetch: ACswitchFetch,
//     }
// }

// fnFollow: (id)=>{dispatch(ACfollowing(id))},
//         fnUnfollow: (id)=>{dispatch(ACunfollowing(id))},
//         fnLoadUser: (users)=>{dispatch(ACloaduser(users))},
//         fnPageScroll: (page)=>{dispatch(ACpageScroll(page))},
//         fnCount: (page)=>{dispatch(ACcount(page))},
//         fnSwitchFetch: (fetch)=>{dispatch(ACswitchFetch(fetch))},

// let name = 15;
// let user = {
//     name: name
//        = тоже что и (в современном синтаксе)
//     name (ищет нейм вовне)
// }

export default connect(f1,{
        fnFollow,
        fnUnfollow: ACunfollowing,
        fnLoadUser,
        fnPageScroll,
        fnCount: ACcount,
        fnSwitchFetch: ACswitchFetch,
    })(UsersAPI);

// const UsersCont = connect(f1,f2)(UsersAPI);

// export default UsersCont;