import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Navbar/Navbar';

function App() {
  return (
    <div>
      <header >
        <NavBar />
          <h1
          onClick={() => console.log('Hola! Hiciste un clic en el titulo')}
        >Proyecto al rescate</h1>
      </header>
    </div>
  );
}

export default App;
