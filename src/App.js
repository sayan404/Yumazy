import React from 'react';
import { Routes , Route } from 'react-router-dom';
import { Home } from './Pages/Home';
import { ReceipesInfo } from './Pages/ReceipesInfo';
import './App.css';

function App() {
  return (
    <div className="App">
    <Routes >
      <Route path="/" element ={<Home/>} />
      <Route path="/:foodReceipe" element ={<ReceipesInfo />} />
    </Routes>
    </div>
  );
}

export default App;
