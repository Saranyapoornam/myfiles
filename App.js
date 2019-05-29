import React from 'react';
import './App.css';
import Greet from './Components/FunctionalComponent';
import Welcome from './Components/ClassComponent';
import Hello from './Components/JSX';
import FunctionalProps from './Components/FunctionalProps';
import ClassProps from './Components/ClassProps';
import State from './Components/State';
import SetState from './Components/SetState';

function App() {
  return (
    <div className="App">
      <Greet/>
      <Welcome/>
      <Hello/>
      <State/>
      <SetState/>
       <FunctionalProps name="user 1" aliasName = "x1"><p>im the inner text to the parent</p></FunctionalProps>
       <FunctionalProps name="user 2" aliasName = "x2"><button>click me</button></FunctionalProps>
       <ClassProps name="user 3" aliasName="x3">im children</ClassProps>
       <ClassProps name="user 4" aliasName="x3">im another children</ClassProps>
      
     
    </div>
  );
}

export default App;
