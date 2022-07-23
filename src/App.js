import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import ProfileAPIwithURL from './components/Profile/ProfileAPI';
import News from './components/News/News';
import Music from './components/Music/Music';
import { Route } from 'react-router-dom';
import DialogsCont from './components/Dialogs/DialogsContainer';
import Barebuh from './components/Users/UsersCont';
import CheseCont from './components/Chese/CheseContainer';
import HeaderCont from './components/Header/HeaderCont';

let someComponent = ()=> <Music />

const App = () => {

  return (
    
    <div className='app-wrapper'>
      <HeaderCont />
      <Navbar 
      // bigData={p.bigData.dialogsP.dData} 
      // img={p.bigData.img}
      />
      <div className= 'app-wrapper-content' >

        <Route path='/messages' render={()=>
  <DialogsCont /> }
         /> 

        <Route path='/profile/:userId?' render={()=><ProfileAPIwithURL
   
        />} />

        <Route exact path='/music' component={someComponent} />

        <Route path='/news' component={News} />
    
        <Route path='/message/0' component={News} />
     
        <Route path='/users' render={ () => <Barebuh /> } />
        
        <Route path='/chese' render={ ()=><CheseCont /> } />
      </div>
    </div>
    
  );
}



export default App;