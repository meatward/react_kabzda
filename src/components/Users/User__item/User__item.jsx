import styles from './useritem.module.css'


const User__item = (p) => {
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

export default User__item;