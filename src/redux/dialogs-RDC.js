const BODY_NEW = 'BODY-NEW';
const ADD_MSG = 'ADD-MSG';

let stateInit = {
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
newMSGbody: "676"
}

const dialogsRDC =(bigData = stateInit, action)=>{
    switch(action.type){
      
     case BODY_NEW: {
        let stateCopy = {...bigData};
        stateCopy.newMSGbody = action.bodytxt;
        // this._callscriber(this._bigData);
        
        return stateCopy;}
        
     case ADD_MSG:{
          let stateCopy = {...bigData};
          stateCopy.MSGdata = [...bigData.MSGdata];
          let msg = bigData.newMSGbody;
          let text={
            id:7,
            message: msg,
          }
        //   this._bigData.dialogsP
        stateCopy.MSGdata.push(text);
        //   this._callscriber(this._bigData);
        //   this._bigData.dialogsP
        stateCopy.newMSGbody = "";
          return stateCopy;}
        default:
        return bigData;
        }
}



export const ACbodytxt=(ttx)=>({type:BODY_NEW, bodytxt:ttx})
export const ACaddmsg=()=>({type:ADD_MSG})

export default dialogsRDC;