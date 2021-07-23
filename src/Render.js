import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { updateNewpost, addPost } from './redux/State';


export let rerender = (bigData) => {

    ReactDOM.render(
      <React.StrictMode>
        <App bigData={bigData} addPost={addPost} updateNewpost={updateNewpost}/>
      </React.StrictMode>,
      document.getElementById('root')
    
    );
    }
