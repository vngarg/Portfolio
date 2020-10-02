import React from 'react';
import './App.css';
import Hero from './components/HeroSection/Hero';
import Navbar from './components/Nav/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
