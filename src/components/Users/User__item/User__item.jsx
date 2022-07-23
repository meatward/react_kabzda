import styles from './useritem.module.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

class UserItem extends React.Component {
    constructor(props){
        super(props);
    }
    render (){
        return(
            <div key={this.props.id} className={styles.userBox}>
                <span>
                    <NavLink to={'/profile/' + this.props.id}>
                <div> <img src={this.props.imgurl !=null ? this.props.imgurl:'https://i.pinimg.com/originals/b3/9f/13/b39f1376f9cd7182e542280ac00161f8.jpg'} className={styles.img} ></img> </div>
                    </NavLink>
                <p1>{this.props.name}</p1>
               {/* <div> { p.isfollow 
               ? <button onClick={() => p.fnFollow(p.id) } >c==3</button> 
               : <button onClick={()=> p.fnUnfollow(p.id) } >Follow</button> }
                   </div> */}
                </span>
                <span></span>
            </div>
            )
    }
}

const User__item1 = (p) => {
    debugger
    return(
    <div key={p.id} className={styles.userBox}>
        <span>
        <div> <img src={p.imgurl !=null ? p.imgurl:'https://i.pinimg.com/originals/b3/9f/13/b39f1376f9cd7182e542280ac00161f8.jpg'} className={styles.img} ></img> </div>
        <p1>{p.name}</p1>
       {/* <div> { p.isfollow 
       ? <button onClick={() => p.fnFollow(p.id) } >c==3</button> 
       : <button onClick={()=> p.fnUnfollow(p.id) } >Follow</button> }
           </div> */}
        </span>
        <span></span>
    </div>
    )
    
};

export default UserItem;