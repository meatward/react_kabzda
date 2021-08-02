
// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/redux-store';
import {bodyupdate} from './redux/redux-store'


let rerender = (bigdata) => {

    ReactDOM.render(
      <React.StrictMode>
        <App bigData={bigdata} 
             dispatch={store.dispatch.bind(store)}
             
              
         />
      </React.StrictMode>,
      document.getElementById('root')
    
    );
    debugger;
    }
        
rerender(store.getState());

store.subscribe(()=>{
  let state = store.getState(); 
  rerender(state)});

reportWebVitals();




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
