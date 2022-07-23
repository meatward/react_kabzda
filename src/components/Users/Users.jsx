import React from 'react';
import * as axios from 'axios';
import UserItem from './User__item/User__item';
import styles from './Users.module.css'

export default class User extends React.Component {
    constructor(props){   
        super(props)
    }

    componentDidMount(){
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.pagePos}&count=${this.props.pageSize}`).then(response => {
                this.props.fnLoadUser(response.data.items)
                this.props.fnTotalCount(response.data.totalCount)
            });
    }

    pageScroll =(xPageNumber)=> {
        this.props.pageClick(xPageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${xPageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.fnLoadUser(response.data.items)
        });
    }

    componentDidUpdate(){
      
    }

    
    render(){
        let sUserBox = this.props.users1.users.map(b => <div> 
        <UserItem name={b.name} id={b.id} imgurl={b.photos.small} isfollow={b.isfollow} message={b.message} city={b.city} fnFollow={this.props.fnFollow} fnUnfollow={this.props.fnUnfollow} />
        <div> {b.isfollow
            ? <button onClick={() => this.props.fnUnfollow(b.id)} >Follow</button>
            : <button onClick={() => this.props.fnFollow(b.id)} >c==3</button>}
        </div> 
        </div>);
       let styling = {
            clicked:{
                color: 'red',
                fontWeight: 'bold'
            }
        }

        let pagesCount = Math.ceil(this.props.totalUsersCount/this.props.pageSize);
        let pages = [];
        for(let i=1; i<=pagesCount;i++){
           pages.push(i)
        }
        let ololong = pages.map( p=>{
            return <span className={this.props.pagePos===p ? styles.clicked: ''} onClick={(e)=>this.pageScroll(p)}>{p}</span>
        })
       
// onClick={()=>this.props.pageClick(p)}
        return (<div>
            <div>
                {ololong}
              
            </div>
        <button onClick={null}>777</button>
            <div>ol{sUserBox}</div>
        </div>)
    }
    
}