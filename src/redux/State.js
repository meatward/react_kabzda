import profileRDC from "./profile-RDC";
import dialogsRDC from "./dialogs-RDC";

const UPDATE_POST = 'UPDATE-POST';
const ADD_POST = 'ADD-POST';
const UPDATE_CLICK = 'UPDATE-CLICK';
const ADD_CLICK = 'ADD-CLICK';
const BODY_NEW = 'BODY-NEW';
const ADD_MSG = 'ADD-MSG';

let store = {

  _callscriber(){
    
  },

  port(r){
    this._callscriber = r
    
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


  getData() {

    return this._bigData;
  },

  dispatch(action){
  this._bigData = profileRDC(this._bigData, action)
    this._bigData.dialogsP = dialogsRDC(this._bigData.dialogsP, action)
    this._callscriber(this._bigData);
    
  }
}



export default store;
window.store = store;