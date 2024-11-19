import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Main from './components/Main';

const App = () => {
  return (
    <Router>
      <div>
        <div className="h1Nd">
       <h1 className="h1N">| UnNecessary Tools Co. |</h1></div>
        <div style={{ 'position': 'absolute', 'top': '94px', 'left': '320px' }}>
          <Main />
        </div>
        <div style={{ 'position': 'absolute', 'top': '90px', 'left': '30px' }} className='sidebarDivExternal'>
          <Sidebar />
        </div>
        <div style={{ 'position': 'absolute', 'bottom': '-68px', 'left': '100px' }}>
          <Navbar />
        </div>
        
      </div>
      
    </Router>
    
  );
};

export default App;
