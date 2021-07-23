import cls from "./../Navbar.module.css"
import { NavLink } from "react-router-dom";
import Friends__item from './Friends__item';



const Friends =(p)=>{
    
  let user = p.bigData.map(oo=> <Friends__item name={oo.name} img={p.img} id={oo.id}/>)
 

    return(<div>
        <div className={cls.friendsarea}>
        Friends
        {user}
        </div>
    </div>)
}

export default Friends;