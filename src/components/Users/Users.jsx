import React from 'react';
import styles from './Users.module.css';
import UserItem from './User__item/User__item';
import {instance} from './../../redux/auth-RDC'

let Users = (props) =>{
    
    let pages = [];
            
            let scape = Math.ceil(props.totalUsersCount/props.pageSize);
            for(let i=1; scape>i; i++){
                pages.push(i)
            };
            let scape2 = pages.slice((props.pagePos-3),(props.pagePos+3))
            
            let ololong = scape2.map( p=>{
                return <span id={p} className = { props.pagePos=== Number(p) ? styles.clicked : ''} onClick={(element)=>{props.fnPageScroll(element.target.id); props.pageScroll(Number(element.target.id))}} >[{p}] </span>
            debugger}) 

            let sUserBox = props.users1.users.map(b => <div> <UserItem name={b.name} id={b.id} imgurl={b.photos.small} isfollow={b.followed} message={b.message} city={b.city} fnFollow={props.fnFollow} fnUnfollow={props.fnUnfollow} />
                <div> {b.followed
                
                    ? <button onClick={() => instance.delete(`/follow/${b.id}`,{}).then(response=>{console.log(response.data.messages)}, props.fnUnfollow(b.id))} >c==3</button>
                    : <button onClick={() => { 
                        instance.post(`/follow/${b.id}`,{}, {}).then(response=>{console.log(response.data.messages)},
                        props.fnFollow(b.id))}} >Follow</button>}
                </div> </div>);
    return(
        <div>
      <div className = {styles.list} >{ololong}5</div>
        <div>
                    {sUserBox}
        <span></span>
        </div>
        <br />
        
    <button >Reload</button>
      
    </div>
    ) 
} 

export default Users;