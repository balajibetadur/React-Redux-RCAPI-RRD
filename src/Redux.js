import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Test from './components/Test/Test';

function App() {

  

  return (
    <div className="App">
      <div className="navbar"> <Navbar/></div>
        <Test />
      </div>
  );
}

export default App;
