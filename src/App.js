import React from 'react';
import './App.css';
import Greet from './Components/FunctionalComponent';
import Welcome from './Components/ClassComponent';
import Hello from './Components/JSX';
import FunctionalProps from './Components/FunctionalProps';
import ClassProps from './Components/ClassProps';
import State from './Components/State';
import SetState from './Components/SetState';
import Destructuringprops from './Components/destructuringPropsAndState'
import MethodAsParent from './Components/MethodAsPropsParent';
import BindingEvent from './Components/BindingEventHandler';
import ConditionalRender from './Components/ConditionalRendering';
import ListArray from './Components/ListAndArray';
import Fragment from './Components/Fragment';
import ParentHoldingComponents from './Components/ParentHoldingComponents';





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
       <ClassProps name="user 4" aliasName="x3">im another children using class props</ClassProps>
      <Destructuringprops technology="Angular" type="Framework"><span creator="Google">created by</span></Destructuringprops>
      <Destructuringprops technology="React" type="Library"><span creator="Facebook">created by</span></Destructuringprops>
      <MethodAsParent/>
      <BindingEvent/>
      <ConditionalRender/>
      <ListArray/>
      <Fragment/>
      <ParentHoldingComponents/>
    </div>
  );
}

export default App;
