const FOLLOW_USER = 'FOLLOW-USER';
const UNFOLLOW_USER = 'UNFOLLOW-USER';
const LOAD_USER = 'LOAD-USER';

let stateInit = {
  users: [
]
}

const usersRDC =(bigData = stateInit, action)=>{
  debugger
    switch(action.type){
     case FOLLOW_USER: {
         return { ...bigData, 
          users: bigData.users.map(
            u => {
              if (action.id===u.id){
                return{...u, isfollow: true}
              }
              return u;
            }
          )};
      };
      case UNFOLLOW_USER: {
        return {
          ...bigData,
          users: bigData.users.map(u => {
            if (u.id===action.id){
              return {...u, isfollow: false}
            }
            return u;
          })
        }
      }
      case LOAD_USER:{
        return{
          ...bigData,
          users: [...bigData.users, ...action.users]
        }
      }
        default:
        return bigData;
        }
}



export const ACfollowing=(id)=>({type:FOLLOW_USER, id});
export const ACunfollowing=(id)=>({type:UNFOLLOW_USER, id});
export const ACloaduser=(users)=>({type:LOAD_USER, users});

export default usersRDC;