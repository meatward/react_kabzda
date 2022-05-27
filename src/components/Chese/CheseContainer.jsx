import Chese from "./Chese"
import {connect} from 'react-redux';
import {ACbuttonclick} from '../../redux/calcRDC'

let f1 = (state)=>{
    return{
        n1: state.calcP.tablo
    }
}

let f2 = (dispatch) =>{
    debugger
    return{
        cButtonfn: (id)=>{dispatch(ACbuttonclick(id))}
    }
}



const CheseCont = connect(f1,f2)(Chese)

export default CheseCont;