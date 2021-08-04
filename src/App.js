import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import { BrowserRouter, Route } from 'react-router-dom';
import DialogsCont from './components/Dialogs/DialogsContainer';

let someComponent = ()=> <Music />


const App = (p) => {

  
  

  debugger;
  return (
    <BrowserRouter>
    <div className='app-wrapper'>
      <Header />
      <Navbar bigData={p.bigData.dialogsP.dData} img={p.bigData.img}/>
      <div className= 'app-wrapper-content' >

        <Route path='/messages' render={()=><DialogsCont 
        // bigData={p.bigData.dialogsP} 
        // imgs={p.bigData.img}
        // dispatch ={p.dispatch} 
        bigData = {p.bigData}
        dispatch={p.dispatch}
        getState={p.getState} 
        />}
         /> 

        <Route path='/profile' render={()=><Profile
         bigData={p.bigData}
        dispatch ={p.dispatch}
        store={p.store}
        
        getState={p.getState} 
        />} />

        <Route exact path='/music' component={someComponent}/>

        <Route path='/news' component={News}/>
    
        <Route path='/message/0' component={News} />
        <Route path='/message/1' render={()=><Profile
         bigData={p.bigData}
         dispatch ={p.dispatch}
        
        />} />
      </div>
    </div>
    
    </BrowserRouter>
  );
}
debugger;


export default App;