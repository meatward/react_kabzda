import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import { Route } from 'react-router-dom';
import DialogsCont from './components/Dialogs/DialogsContainer';
import UsersCont from './components/Users/UsersCont';

let someComponent = ()=> <Music />



const App = () => {

  return (
    
    <div className='app-wrapper'>
      <Header />
      <Navbar 
      // bigData={p.bigData.dialogsP.dData} 
      // img={p.bigData.img}
      />
      <div className= 'app-wrapper-content' >

        <Route path='/messages' render={()=>
  <DialogsCont /> }
         /> 

        <Route path='/profile' render={()=><Profile
   
        />} />

        <Route exact path='/music' component={someComponent} />

        <Route path='/news' component={News} />
    
        <Route path='/message/0' component={News} />
     
        <Route path='/users' render={ () => <UsersCont /> } />
        
      </div>
    </div>
    
  );
}



export default App;