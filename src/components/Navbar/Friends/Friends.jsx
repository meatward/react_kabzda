import cls from "./../Navbar.module.css"
import { NavLink } from "react-router-dom";
import Friends__item from './Friends__item';
import { connect } from 'react-redux';



// const Friends =(p)=>{
    
//   let user = p.bigData.map(oo=> <Friends__item name={oo.name} img={p.img} id={oo.id}/>)
 

//     return(<div>
//         <div className={cls.friendsarea}>
//         Friends
//         {user}
//         </div>
//     </div>)
// }
 
let FriendsC=(p)=>{
  return{
    user: p.bigData.map(oo=> <Friends__item name={oo.name} img={p.img} id={oo.id}/>)
    
  }
}

let f1Map=(state)=>{
  return{
    bigData: state.dialogsP.dData,
    img: state.img
  }
}

const Friends = connect(f1Map)(FriendsC)

export default Friends;