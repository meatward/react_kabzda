import cls from "./../Navbar.module.css"
import { NavLink } from "react-router-dom";



const Friends__item =(p)=>{
    let path = "/message/"+p.id;
    let imgpath = p.img[p.id]
 
    return(<div className={cls.friends}>
        <NavLink to={path}><img src={imgpath} alt="" />
        {p.name}</NavLink>
    </div>)
    
}

export default Friends__item;