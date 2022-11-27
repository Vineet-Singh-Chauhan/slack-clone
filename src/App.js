import React , { useState } from 'react';
//stylesheets
import './App.css';
//Components
import Header from "./components/Header";
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
//react router dom
import { BrowserRouter, Route,Routes, Link } from "react-router-dom";
import Login from './components/Login';
import {useStateValue} from './assets/contextapi/StateProvider'
function App() {
  // const [user,setUser] = useState(null);
  const [{ user },dispatch] = useStateValue();
  return (
    //BEM naming convention
    <div className="App">
      <BrowserRouter>
      {!user ?( 
        <Login/>
       ):
      
      (
        <>
        {/* header */}
      <Header/>

      <div className="app__body">

      {/* Sidebar */}
      <Sidebar/>
      <Routes>
      <Route path="/" element={<h1>Welcome</h1>} />
      <Route path="/room/:roomId" element={<Chat/>} />
        
        
      
      {/* reactRouter ->  */}
      </Routes>

      </div>
      </>
      )}
      </BrowserRouter>
    </div>
  );
}

export default App;
