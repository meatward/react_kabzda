import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import { BrowserRouter, Route } from 'react-router-dom';

let someComponent = ()=> <Music />


const App = (p) => {

  
  

  return (
    <BrowserRouter>
    <div className='app-wrapper'>
      <Header />
      <Navbar bigData={p.bigData.dialogsP.dData} img={p.bigData.img}/>
      <div className= 'app-wrapper-content' >

        <Route path='/messages' render={()=><Dialogs 
        bigData={p.bigData.dialogsP} 
        imgs={p.bigData.img}
        dispatch ={p.dispatch} />} /> 

        <Route path='/profile' render={()=><Profile
         bigData={p.bigData.profileP} 
         
        dispatch ={p.dispatch}
        
        />} />

        <Route exact path='/music' component={someComponent}/>

        <Route path='/news' component={News}/>
    
        <Route path='/message/0' component={News} />
        <Route path='/message/1' render={()=><Profile
         bigData={p.bigData.profileP} 
         
        dispatch ={p.dispatch}
        
        />} />
      </div>
    </div>
    
    </BrowserRouter>
  );
}


export default App;