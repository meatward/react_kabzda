
// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/State';


let rerender = (bigdata) => {

    ReactDOM.render(
      <React.StrictMode>
        <App bigData={bigdata} 
        addPost={store.addPost.bind(store)} 
        updateNewpost={store.updateNewpost.bind(store)}
        updateskoba={store.updateskoba.bind(store)}
        addclick={store.addclick.bind(store)} />
      </React.StrictMode>,
      document.getElementById('root')
    
    );
    }

    
rerender(store.getData());

    store.port(rerender);
// addPost('saf44.og');

// export let rerender = () => {

// ReactDOM.render(
//   <React.StrictMode>
//     <App bigData={bigData} addPost={addPost}/>
//   </React.StrictMode>,
//   document.getElementById('root')

// );
// }


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
