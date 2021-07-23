import cls from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import Friends from './Friends/Friends';

//{`${cls.active} ${cls.boo}`}

const Navbar = (p) => {

  
  

  return (
    <nav className={cls.nav}>
      <div className={cls.item}><NavLink to='/profile' activeClassName={cls.active}>Profile</NavLink></div>
      <div className={cls.item}><NavLink to='/messages' activeClassName={cls.active}>Messages</NavLink></div>
      <div className={cls.item}><NavLink to='/news' activeClassName={cls.active}>News</NavLink></div>
      <div className={cls.item} ><NavLink to='/music' activeClassName={cls.active}>Music</NavLink></div>
      <div className={cls.item}><NavLink to='/settings' activeClassName={cls.active}>Settings</NavLink></div>

      <div className={cls.friends}>
        <div><Friends bigData={p.bigData} img={p.img} /></div>
      <div className={cls.item}></div>
      </div>
    </nav>
  )
}

export default Navbar;