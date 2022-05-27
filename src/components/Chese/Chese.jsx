import React from 'react';
import * as axios from 'axios';
import cls from './Chesse.module.css';
import classNames from 'classnames';

class Chese extends React.Component {
    constructor(props){
        super(props);

    };

    render(){
        let getid = (id)=>{
           return (document.getElementById(id)).innerText
        }
        debugger
        return <div>
            <div>
                no red
                <div className={cls.calc_0}>
                <div className={cls.calc} >
                <div className={cls.calc_screen} >
                    <p>{this.props.n1}</p>
                </div>
                </div>
                <div className={cls.buttons} >
                    <div id='' className={classNames(cls.a, cls.btn, cls.ac, cls.grey)} onClick={()=>alert('ac')}>ac</div>
                    <div id='plus' className={classNames(cls.b, cls.btn, cls.plusminus, cls.grey)} onClick={()=>this.props.cButtonfn(getid('plus'))} >+/-</div>
                    <div id='' className={classNames( cls.btn,cls.c, cls.percent, cls.grey)} onClick={()=>this.props.cButtonfn} >%</div>
                    <div id='' className={classNames(cls.btn, cls.d, cls.delit, cls.orange)} onClick={()=>this.props.cButtonfn} >/</div>
                    <div className={classNames(cls.a, cls.btn, cls.seven)} onClick={()=>this.props.cButtonfn} >7</div>
                    <div className={classNames(cls.btn, cls.eight)} onClick={()=>this.props.cButtonfn("8")} >8</div>
                    <div className={classNames(cls.c, cls.btn, cls.nine)} onClick={()=>this.props.cButtonfn} >9</div>
                    <div className={classNames(cls.btn, cls.multiply, cls.orange)} onClick={()=>this.props.cButtonfn} >X</div>
                    <div className={classNames(cls.a, cls.btn, cls.four)} onClick={()=>this.props.cButtonfn} >4</div>
                    <div className={classNames(cls.btn, cls.five)} onClick={()=>this.props.cButtonfn} >5</div>
                    <div className={classNames(cls.c, cls.btn, cls.six)} onClick={()=>this.props.cButtonfn} >6</div>
                    <div className={classNames(cls.btn, cls.orange)} onClick={()=>this.props.cButtonfn} >-</div>
                    <div className={classNames(cls.a, cls.btn)} onClick={()=>this.props.cButtonfn} >1</div>
                    <div className={cls.btn} onClick={()=>this.props.cButtonfn} >2</div>
                    <div className={classNames(cls.c, cls.btn)} onClick={()=>this.props.cButtonfn} >3</div>
                    <div className={classNames(cls.btn, cls.orange)} onClick={()=>this.props.cButtonfn} >+</div>
                    <div className={classNames(cls.a, cls.btn, cls.zero)} onClick={()=>this.props.cButtonfn} >0</div>
                    <div className={classNames(cls.c, cls.btn)} onClick={()=>this.props.cButtonfn} >.</div>
                    <div className={classNames(cls.btn, cls.orange)} onClick={()=>this.props.cButtonfn} >=</div>
                </div>
                </div>
            </div>
            <h2 id='h3'>Hello</h2>

            <script src='calc.js'></script>
        </div>
    }
}

export default Chese;