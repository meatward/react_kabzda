const FOLLOW_USER = 'FOLLOW-USER';
const UNFOLLOW_USER = 'UNFOLLOW-USER';
const LOAD_USER = 'LOAD-USER';
const PAGE_SCROLL = 'PAGE-SCROLL';
const LOAD_COUNT = 'LOAD-COUNT';
const SWITCH_FETCH = 'SWITCH_FETCH';

let stateInit = {
  users: [
],
pageSize: 10,
totalUsersCount: 0,

Page: 1,
pagePos: 144,

isFetch: true,
}

const usersRDC =(bigData = stateInit, action)=>{
  
    switch(action.type){
     case FOLLOW_USER: {
         return { ...bigData, 
          users: bigData.users.map(
            u => {
              if (action.id===u.id){
                return{...u, followed: true}
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
              return {...u, followed: false}
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
      case SWITCH_FETCH: {
       return { ...bigData,
        //!bigData.isFetch
        isFetch: action.fetch,}
      }
        default:
        return bigData;
        }
}



export const fnFollow=(id)=>({type:FOLLOW_USER, id});
export const ACunfollowing=(id)=>({type:UNFOLLOW_USER, id});
export const fnLoadUser=(users)=>({type:LOAD_USER, users});
export const fnPageScroll=(page)=>({type:PAGE_SCROLL, page});
export const ACcount=(count)=>({type:LOAD_COUNT, count});
export const ACswitchFetch=(fetch)=>({type:SWITCH_FETCH, fetch});

export default usersRDC;