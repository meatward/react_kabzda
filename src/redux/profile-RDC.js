const UPDATE_CLICK = 'UPDATE-CLICK';
const ADD_CLICK = 'ADD-CLICK';
const UPDATE_POST = 'UPDATE-POST';
const ADD_POST = 'ADD-POST';



let stateInit = {
  newPostttx: 'slash mega'
  ,
  postData: [
    { id: 1, message: 'world go walk lov 9..9', likesCount: 12 },
    { id: 2, message: 'soBA4 KAAA1111!11', likesCount: 12 }
  ]
  ,

  skoba: 'none'
}


const profileRDC = (bigData = stateInit, action)=>{
  
  switch (action.type){
  case ADD_CLICK:{
    return {
      ...bigData,
      postData: [...bigData.postData, {id:6, message: bigData.skoba, likeCount: 7}],
      skoba: ""
    }
  }
    // let stateCopy = {...bigData};
    // stateCopy.postData = [...bigData.postData];
    // let text = {
    //   id: 6,
    //   message:stateCopy.skoba,
    //   likesCount: 7
    // };
    // stateCopy.postData.push(text);
    // stateCopy.skoba = '';
    // return stateCopy;}
  case UPDATE_CLICK:{
    return {
      ...bigData,
      skoba: action.text
    }
  }
    // let stateCopy = {...bigData};
    // // this._bigData.profileP
    // stateCopy.skoba = action.text;
    // //   this._callscriber(this._bigData);
    // return stateCopy;}


  case ADD_POST:
    let newpost = {
      id: 5,
      message: action.postmsg,
      likesCount: 3
    };
    bigData.profileP.postData.push(newpost);
    return bigData;
  case UPDATE_POST:
    bigData.profileP.newPostttx = action.newText;
    return bigData;
  default: 
    return bigData;
  }
}
export const ACaddpost=(text)=>({type:ADD_POST, postmsg:text})
export const ACupdatepost0=()=>({type:UPDATE_POST, newText:''})
export const ACupdatepost=(text)=>({type:UPDATE_POST, newText:text})
export const ACupdateclick =(carra3)=>{
  return {type: UPDATE_CLICK, text: carra3 };
}
export const ACaddclick=()=>{
 return {type:ADD_CLICK}
}

export default profileRDC;