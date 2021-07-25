import { rerender } from "./../Render";

let bigData = {
  

  img : [
      
    "https://cdn2.scratch.mit.edu/get_image/project/341692894_144x108.png",
    "http://images3.wikia.nocookie.net/__cb20121026214507/walkingdead/images/3/3d/Sanic.jpeg",
    "https://i.imgur.com/NiHde9z.jpeg",
    "http://images3.wikia.nocookie.net/__cb20121026214507/walkingdead/images/3/3d/Sanic.jpeg",
    "https://cdn2.scratch.mit.edu/get_image/project/341692894_144x108.png",
]

,
  dialogsP:{
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
  profileP:{
    newPostttx:'slash mega'
    ,
 postData: [
    {id:1, message:'world go walk lov 9..9', likesCount:12},
    {id:2, message:'soBA4 KAAA1111!11', likesCount:12}
  ]
,

skoba: 'o'

}
}

// window.bigData=bigData;

export let addPost =(postmsg) => {
 
  let newpost ={ 
   
    id: 5,
    message: postmsg,
    likesCount: 3
  };
  bigData.profileP.postData.push(newpost);
  rerender(bigData);
}

export let updateNewpost =(newText)=>{
 bigData.profileP.newPostttx = newText;
 
 rerender(bigData);
}

export let updateskoba=(text)=>{
bigData.profileP.skoba = text;
rerender(bigData);
}

export let addclick=()=>{
  let text ={
    id:6,
    message:bigData.profileP.skoba
  };
  bigData.dialogsP.MSGdata.push(text);
  bigData.profileP.skoba ='';
  rerender(bigData);
}




  export default bigData;