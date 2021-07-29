const UPDATE_POST = 'UPDATE-POST';
const UPDATE_CLICK = 'UPDATE-CLICK';
const ADD_CLICK = 'ADD-CLICK';
const ADD_POST = 'ADD-POST';
const BODY_NEW = 'BODY-NEW';
const ADD_MSG = 'ADD-MSG'

let store = {

  _callscriber() {
  },

  _bigData: {


    img: [

      "https://cdn2.scratch.mit.edu/get_image/project/341692894_144x108.png",
      "http://images3.wikia.nocookie.net/__cb20121026214507/walkingdead/images/3/3d/Sanic.jpeg",
      "https://i.imgur.com/NiHde9z.jpeg",
      "http://images3.wikia.nocookie.net/__cb20121026214507/walkingdead/images/3/3d/Sanic.jpeg",
      "https://cdn2.scratch.mit.edu/get_image/project/341692894_144x108.png",
    ]

    ,
    dialogsP: {
      dData: [
        { id: 0, name: 'QQ2rPk9t6' },
        { id: 1, name: 'sveo56' },
        { id: 2, name: 'soja' },
        { id: 3, name: 'opal' },
        { id: 4, name: '11odim' },

      ]
      ,
      MSGdata:
        [
          { id: 1, message: 'olol' },
          { id: 1, message: 'rtyfg' },
          { id: 1, message: 'dfgsdf fdsg  re' },
          { id: 3, message: 'o44-4-444--lol' },
          { id: 3, message: 'olol' }
        ],
    newMSGbody: ""
    },
    profileP: {
      newPostttx: 'slash mega'
      ,
      postData: [
        { id: 1, message: 'world go walk lov 9..9', likesCount: 12 },
        { id: 2, message: 'soBA4 KAAA1111!11', likesCount: 12 }
      ]
      ,

      skoba: 'o'

    },
    sidebar:{}
  },

  port(ex) {
    this._callscriber = ex;
  },

  getData() {

    return this._bigData;
  },

  dispatch(action){
    if (action.type === ADD_POST) {   
      let newpost = {
        id: 5,
        message: action.postmsg,
        likesCount: 3
      };
      this._bigData.profileP.postData.push(newpost);
      this._callscriber(this._bigData);   
    } else if (action.type === BODY_NEW){   
    this._bigData.dialogsP.newMSGbody = action.bodytxt;
    debugger;
    this._callscriber(this._bigData);
    } else if (action.type===ADD_MSG) {
      let msg = this._bigData.dialogsP.newMSGbody;
      let text={
        id:7,
        message: msg
      }
      this._bigData.dialogsP.MSGdata.push(text);
      this._callscriber(this._bigData);
      this._bigData.dialogsP.newMSGbody = "";
    } else if (action.type===ADD_CLICK) {
      let text = {
        id: 6,
        message: this._bigData.profileP.skoba
      };
      this._bigData.dialogsP.MSGdata.push(text);
      this._bigData.profileP.skoba = '';
      this._callscriber(this._bigData);
    }
    else if (action.type===UPDATE_POST){
      debugger;
      this._bigData.profileP.newPostttx = action.newText;
      debugger;
      this._callscriber(this._bigData);
  }
    else if (action.type===UPDATE_CLICK){
      this._bigData.profileP.skoba = action.text;
    this._callscriber(this._bigData);
  }
    
  }
}

export const ACaddpost=(text)=>({type:ADD_POST, postmsg:text})

export const ACupdatepost0=()=>({type:UPDATE_POST, newText:''})
export const ACupdatepost=(text)=>({type:UPDATE_POST, newText:text})
export const ACbodytxt=(ttx5)=>({type:BODY_NEW, bodytxt:ttx5})
debugger;
export const ACaddmsg=()=>({type:ADD_MSG})
export const ACupdateclick =(carra3)=>{
  return {type: UPDATE_CLICK, text: carra3 };
}
export const ACaddclick=()=>{
 return {type:ADD_CLICK}
}


export default store;
window.store = store;