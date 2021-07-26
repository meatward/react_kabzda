
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
        ]
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

    }
  },

  port(ex) {
    this._callscriber = ex;
  },

  getData() {

    return this._bigData;
  },

  // window.bigData=bigData;

  addPost(postmsg) {

    let newpost = {

      id: 5,
      message: postmsg,
      likesCount: 3
    };
    this._bigData.profileP.postData.push(newpost);

    this._callscriber(this._bigData);
  },

  addclick() {
    debugger;
    let text = {
      id: 6,
      message: this._bigData.profileP.skoba
    };
    this._bigData.dialogsP.MSGdata.push(text);
    this._bigData.profileP.skoba = '';
    this._callscriber(this._bigData);
    debugger;
  },

  updateNewpost(newText) {
    this._bigData.profileP.newPostttx = newText;
    this._callscriber(this._bigData);
  },

  updateskoba(text) {
    this._bigData.profileP.skoba = text;
    this._callscriber(this._bigData);
  },

  dispatch(action){
    if (action.type === '')

  }
}


export default store;
window.store = store;