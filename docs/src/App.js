import React from 'react';
import './App.css'
import { BrowserRouter } from 'react-router-dom';
import Routers from './Routes/Routes';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routers />
    </div>
    </BrowserRouter>
  );
}

export default App;
