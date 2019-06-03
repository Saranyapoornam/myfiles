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
import LifeCycleComponent from './Components/LifeCycleComponent';
import RefComponent from './Components/RefsComponent';
import RefWithClassParent from './Components/RefswithClassParent';
import ForwardingRefWithParent from './Components/ForwadingRefParent';
import PortalComponent from './Components/PortalComponent';
import HocWithClick from './Components/HocWithClick';
import HocWithHover from './Components/HocWithHover';
import RenderProps from './Components/RenderProps';
import RenderPropsWithClick from './Components/RenderPropsWithClick';
import RenderPropsWithHover from './Components/RenderPropsWithHover';
import { UserProvider } from './Components/Context';
import ContextComponentC from './Components/ContextComponentC';
import UseStateHook from './Components/UseStateHook';
import UseStateWithPrevState from './Components/UseStateWithPrevState';
import UseStateWithObject from './Components/UseStateWithObject';
import UseStateWithArray from './Components/UseStateWithArray';
import UseEffectHook from './Components/UseEffectHook';
import GetAjax from './Components/GetAjax';
import PostService from './Components/PostService';
import CRUDOperation from './Components/CRUDOperation';

// import ErrorHoldingComponent from './Components/ErrorBoundaryHoldingComponents';
// import ErrorBoundary from './Components/ErrorBoundary';





function App() {
  return (
    <div className="App">
      <CRUDOperation />
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
      <LifeCycleComponent/>
      <RefComponent/>
      <RefWithClassParent/>
      <ForwardingRefWithParent/>
      <PortalComponent/>
      {/*
       <ErrorBoundary>
         <ErrorHoldingComponent technology ="Javascript"/>
      </ErrorBoundary>
      <ErrorBoundary>
        <ErrorHoldingComponent technology ="React"/>
      </ErrorBoundary>
      <ErrorBoundary>
      <ErrorHoldingComponent technology ="Angular"/>
      </ErrorBoundary>
      */}
     <HocWithClick name="react"/>
     <HocWithHover/>
     <RenderProps render={(count,incrementCount)=>{
       return(<RenderPropsWithClick count={count} IncrementCount={incrementCount}/>)
     }}/>
      <RenderProps render={(count,incrementCount)=>{
       return(<RenderPropsWithHover count={count} IncrementCount={incrementCount}/>)
     }}/>
      <UseStateHook/>
      <UseStateWithPrevState/>
      <UseStateWithObject/>
      <UseStateWithArray/>
      <UseEffectHook/>
      <GetAjax/>
      <PostService/>
      <UserProvider value="User">
        <ContextComponentC/>
      </UserProvider>
     
    </div>
  );
}

export default App;
