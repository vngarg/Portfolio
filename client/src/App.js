import React from 'react';
import './App.css';
import Hero from './components/HeroSection/Hero';
// import Menu from './components/Menu/Menu';
import Navbar from './Nav/Navbar';

function App() {
  return (
    <div className="App">
      {/* <Menu /> */}
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
