import React from 'react';
import NavbarPage from './components/NavbarPage';
import Sections from './components/sections';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App" id="home">
      <NavbarPage />
      <header className="App-header" id="me">
        <img src={process.env.PUBLIC_URL + "/logo1.png"} className = "propic"/>
        <p>
          Sunny Sarker
        </p>
        <p className="bio">
          Software Engineer, hiker, and meme enthusiast
        </p>
      </header>
      <Sections />
      

    </div>
  );
}

export default App;
