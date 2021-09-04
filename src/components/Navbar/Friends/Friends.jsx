import cls from "./../Navbar.module.css"
import { NavLink } from "react-router-dom";
import Friends__item from './Friends__item';
import { connect } from 'react-redux';




const Friends =(p)=>{

 let friend = p.friend.map(oo=> <Friends__item name={oo.name} img={p.img} id={oo.id} avachange={p.avachange} />)

     return (
       <div>
         <div className={cls.friendsarea}>
         Friends
         {friend}
         </div>
     </div>
     )
}

export default Friends;