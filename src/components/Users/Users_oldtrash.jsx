import React from 'react';
import User__item from './User__item/User__item';
import * as axios from 'axios';

const Users = (p) => {

    let getusers = () => {
    if (p.users1.users.length === 0){
   
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            p.fnLoadUser(response.data.items)
        });
   
        }
    }
    debugger

    let sUserBox = p.users1.users.map(b => <div> 
        <User__item name={b.name} id={b.id} imgurl={b.photos.small} isfollow={b.isfollow} message={b.message} city={b.city} fnFollow={p.fnFollow} fnUnfollow={p.fnUnfollow} />
        <div> {b.isfollow
            ? <button onClick={() => p.fnUnfollow(b.id)} >Follow</button>
            : <button onClick={() => p.fnFollow(b.id)} >c==3</button>}
        </div> 
        </div>);

    return (<div>
    <button onClick={getusers}>Reload</button>
        <div>ol{sUserBox}</div>
    </div>)
}

export default Users;