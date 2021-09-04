const SET_AVA = 'SET-AVA';


    let stateinit = {
        ava1:'https://ih1.redbubble.net/image.531824862.7628/flat,750x1000,075,f.u3.jpg',

        avacopy: [
            "https://cdn2.scratch.mit.edu/get_image/project/341692894_144x108.png",
            "http://images3.wikia.nocookie.net/__cb20121026214507/walkingdead/images/3/3d/Sanic.jpeg",
            "https://i.imgur.com/NiHde9z.jpeg",
            "http://images3.wikia.nocookie.net/__cb20121026214507/walkingdead/images/3/3d/Sanic.jpeg",
            "https://cdn2.scratch.mit.edu/get_image/project/341692894_144x108.png",
          ]
    }

const avatarRDC =(state = stateinit, action)=>{
    switch(action.type){
        case SET_AVA:
            let stateCopy = {...state};
            stateCopy.ava1 = state.avacopy[1];
            return stateCopy;
        default: 
         return state;
    }
}


export const ACava=()=>({type:SET_AVA})
export default avatarRDC;