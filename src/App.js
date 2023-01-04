import React from 'react';
import './App.css';


import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Navbar/Navbar';

import CountFunction from './components/CountFunction/CountFunction';

function App() {
  
  return (
    <div>
      <header >
        <NavBar /> 
          <h1>Proyecto al rescate</h1>
      </header>
      
      <CountFunction 
        color="purple" 
        
        />
    </div>
  );
}

export default App;
