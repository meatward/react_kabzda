import React from 'react';
import styles from './Users.module.css';
import UserItem from './User__item/User__item';
import {instance} from './../../redux/auth-RDC';
import {usersAPI} from './../../api/api'

let Users = (props) =>{

   
            let pages = [];
            
            let scape = Math.ceil(props.totalUsersCount/props.pageSize);
            for(let i=1; scape>i; i++){
                pages.push(i)
            };
            let lastpage = (pages.slice(-1))-1

            let scape2 = pages.slice(((props.pagePos)-2),((props.pagePos)+1))
            
            const Last = () =>{
                return (<div> <span id={lastpage} className = { props.pagePos=== Number({lastpage}) ? styles.clicked : ''} onClick={(element)=>{props.fnPageScroll(element.target.id); props.pageScroll(Number(element.target.id))}} >[{lastpage}] </span></div>)
                
            }
            let ololong = scape2.map( p=>{
                return <div><span id={p} className = { props.pagePos=== Number(p) ? styles.clicked : ''} onClick={(element)=>{props.fnPageScroll(element.target.id); props.pageScroll(Number(element.target.id))}} >[{p}] </span>
                </div>
            }) 

            let sUserBox = props.users1.users.map(b =>  <div> <UserItem name={b.name} id={b.id} imgurl={b.photos.small} isfollow={b.followed} message={b.message} city={b.city} fnFollow={props.fnFollow} fnUnfollow={props.fnUnfollow} />
                <div> {b.followed
                
                
                    ? <button onClick={
                        
                        () => {
                            props.ACswitchButton(true);
                            if(props.buttonLoad===false){usersAPI.unfollowUser(b.id).then(
                        response=>{
                            console.log(response.messages); if(response.resultCode===0){props.fnUnfollow(b.id)}});
                            props.ACswitchButton(false)}
                        }} >c==3</button>
                    : <button onClick={() => {
                        props.ACswitchButton(true);
                        if (props.buttonLoad===false){usersAPI.followUser(b.id).then(response=>{
                            console.log(response.data.messages)},
                        props.fnFollow(b.id));
                        props.ACswitchButton(false)}

                        }} >Follow</button>}
                </div> 
                <button onClick={()=>{
                    if (props.buttonLoad===false){
                    props.ACswitchButton(true);
                    usersAPI.isFriend(b.id).then(response=>{
                    alert(response.data) }).then(props.ACswitchButton(false));
                }debugger
                    }}>?</button>
                </div>); 
                

                let jopa = ()=>{return props.fnPageScroll(2), props.pageScroll(2)}
    return(
        <div>
      <div className = {styles.list} >{ololong}</div>
        <div>
        <div>
        <button onClick={jopa}>2</button>
        </div>
            <div>
        <Last /> 
        </div>
                    {sUserBox}
        <span></span>
        </div>
        <br />
        <div className = {styles.list} >{ololong}</div>
    <button >Reload</button>
      
    </div>
    ) 
} 

export default Users;