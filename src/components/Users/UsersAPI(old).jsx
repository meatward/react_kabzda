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
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.Page}&count=${this.props.pageSize}`).then(response => {
                    this.props.fnLoadUser(response.data.items)
                    this.props.fnCount(response.data.totalCount)
                });
            }
        
        pageScroll = (eee) =>{
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${eee}&count=${this.props.pageSize}`).then(
                response => {
                    this.props.fnLoadUser(response.data.items)
                }
            )
        }
    

        render(){  
            

    return ( 
        <Users 
        pageScroll={this.pageScroll}
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        pagePos={this.props.pagePos}
        users1={this.props.users1}
        fnPageScroll={this.props.fnPageScroll}
        fnUnfollow={this.props.fnUnfollow}
        fnFollow={this.props.fnFollow}
        />
    )
    }
}


export default UsersAPI;