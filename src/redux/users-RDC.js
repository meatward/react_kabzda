const FOLLOW_USER = 'FOLLOW-USER';
const UNFOLLOW_USER = 'UNFOLLOW-USER';
const LOAD_USER = 'LOAD-USER';
const PAGE_SCROLL = 'PAGE-SCROLL';
const LOAD_COUNT = 'LOAD-COUNT';

let stateInit = {
  users: [
],
pageSize: 10,
totalUsersCount: 0,
Page: 1,
pagePos: 6
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
          users: [...action.users]
        }
      }
      case LOAD_COUNT:{
       return { ...bigData,
        totalUsersCount: action.count,}
      }
      case PAGE_SCROLL: {
        return {
          ...bigData,pagePos: Number(action.page),
          Page: Number(action.page),
          
        }
      }
        default:
        return bigData;
        }
}



export const ACfollowing=(id)=>({type:FOLLOW_USER, id});
export const ACunfollowing=(id)=>({type:UNFOLLOW_USER, id});
export const ACloaduser=(users)=>({type:LOAD_USER, users});
export const ACpageScroll=(page)=>({type:PAGE_SCROLL, page});
export const ACcount=(count)=>({type:LOAD_COUNT, count});

export default usersRDC;