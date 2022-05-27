import React from 'react';
import UserItem from './User__item/User__item';
import * as axios from 'axios';
import styles from './Users.module.css';


class Users extends React.Component {
    
    constructor (props){
        super(props);
    }
        
        
        componentDidMount(){
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
            let pages = [];
            debugger
            let scape = Math.ceil(this.props.totalUsersCount/this.props.pageSize);
            for(let i=1; scape>i; i++){
                pages.push(i)
            };
            
            let ololong = pages.map( p=>{
                return <span id={p} className = { this.props.pagePos=== Number(p) ? styles.clicked : ''} onClick={(element)=>{this.props.fnPageScroll(element.target.id); this.pageScroll(Number(element.target.id))}} >[{p}] </span>
            })

            let sUserBox = this.props.users1.users.map(b => <div> <UserItem name={b.name} id={b.id} imgurl={b.photos.small} isfollow={b.isfollow} message={b.message} city={b.city} fnFollow={this.props.fnFollow} fnUnfollow={this.props.fnUnfollow} />
                <div> {b.isfollow
                    ? <button onClick={() => this.props.fnUnfollow(b.id)} >Follow</button>
                    : <button onClick={() => this.props.fnFollow(b.id)} >c==3</button>}
                </div> </div>);
                
    return (<div>
      <div className = {styles.list} >{ololong}</div>
        <div>
                    {sUserBox}
        <span></span>
        </div>
        <br />
        
    <button >Reload</button>
      
    </div>)
    }
}


export default Users;