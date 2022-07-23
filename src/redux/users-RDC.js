const FOLLOW_USER = 'FOLLOW-USER';
const UNFOLLOW_USER = 'UNFOLLOW-USER';
const LOAD_USER = 'LOAD-USER';
const PAGE_CLICK = 'PAGE-CLICK';
const TOTAL_COUNT = 'TOTAL-COUNT'

let stateInit = {
  users: [],
  pageSize: 30,
  totalUsersCount: 0,
  pagePos: 5
}

const usersRDC =(bigData = stateInit, action)=>{
  
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
        return{...bigData, users: action.users}
        //users: [...action.users,...bigData.users ] - перезатирается и так и сяк - почему?
      }
        
      case PAGE_CLICK: {
        return{
          ...bigData,
          pagePos: action.number
        }
        
      }
      case TOTAL_COUNT: {
        return{
          ...bigData, totalUsersCount: action.e
        }
      }
      default:
        return bigData;
        }
}


export const ACfollowing=(id)=>({type:FOLLOW_USER, id});
export const ACunfollowing=(id)=>({type:UNFOLLOW_USER, id});
export const ACloaduser=(users)=>({type:LOAD_USER, users});
export const ACpageclick=(number)=>({type:PAGE_CLICK, number});
export const ACtotalcount=(e)=>({type:TOTAL_COUNT,e})

export default usersRDC;