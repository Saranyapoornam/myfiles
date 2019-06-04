import React,{Component,lazy,Suspense} from 'react';
import {BrowserRouter as Router,Link,NavLink,Redirect,Prompt} from 'react-router-dom'
import Route from 'react-router-dom/Route';
import About from './components/about';
import User from './components/user';
import SpecificUser from './components/specificUser';
// import LazyLoading from './components/LazyLoading';
const LazyLoading = lazy( () => import('./components/LazyLoading'))

class App extends Component {
  state ={
    loggedIn : false
  }
  Login = () =>{
    this.setState(prevState=>({
      loggedIn:!prevState.loggedIn
    }))
  }
  render(){
    return (
      <Router>
        <div className="App">
          <ul>
            <h1>Using Link</h1>
              <Link to="/">Dashboard</Link>
              <Link to="/home" exact>Home</Link>
              <Link to="/about" exact>About</Link>
              <Link to="/user" exact>User</Link>
              <Link to="/user/sara" exact>Specific User</Link>
          </ul>
          <ul>
          <h1>Using NavLink</h1>
              <NavLink to="/" exact activeStyle={{color:'green'}}>Dashboard</NavLink>
              <NavLink to="/home" exact activeStyle={{color:'green'}}>Home</NavLink>
              <NavLink to="/about" exact activeStyle={{color:'green'}}>About</NavLink>
              <NavLink to="/user/:username" exact activeStyle={{color:'green'}}>User</NavLink>
              <NavLink to="/user/sara" exact activeStyle={{color:'green'}}>Specific User</NavLink>
          </ul>
          <Prompt when={!this.state.loggedIn} message={(location)=>{
              return location.pathname.startsWith('/user') ? 'Are you sure!': true
          }}/>
          <input type="button" value={this.state.loggedIn ? "log out" : "log in"} onClick={this.Login} />
        <Route path="/" exact strict render={()=>{
          return(
            <h1>Dashboard page</h1>
          )
        }}
         />
        <Route path="/home" exact strict render={()=>{
          return(
            <h1>Home page</h1>
          )
        }}
        />
        <Route path="/about" exact strict component={About}/>
        <Route path="/user/:username" exact strict render={({match})=>(
          this.state.loggedIn ? (<User match={match} />) :( <Redirect to="/"/>)
        )}/>
        <Route path="/user/sara" exact strict render={({match})=>(
          this.state.loggedIn ? (<SpecificUser match={match} />) :( <Redirect to="/"/>)
        )}/>
        </div>
        <Suspense fallback={<h1>Default loading...... text</h1>}>
        <LazyLoading/>
      </Suspense>
      </Router>
      
    )
  }
}

export default App;