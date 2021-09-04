import cls from "./../Navbar.module.css"
import { NavLink } from "react-router-dom";
import Friends from './Friends';
import { connect } from 'react-redux';
import { ACava } from "../../../redux/avatarRDC";



let f1Map=(state)=>{
  return{
    friend: state.dialogsP.dData,
    img: state.img
  }
}

let f2ava=(dispatch)=>{
  return{
    avachange: ()=>{dispatch(ACava())}
  }
}

const FriendsCont = connect(f1Map,f2ava)(Friends)

export default FriendsCont;



// const Friends =(p)=>{
    
//   let user = p.bigData.map(oo=> <Friends__item name={oo.name} img={p.img} id={oo.id}/>)
 

//     return(<div>
//         <div className={cls.friendsarea}>
//         Friends
//         {user}
//         </div>
//     </div>)
// }