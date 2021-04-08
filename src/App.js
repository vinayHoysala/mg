import React, { Component } from 'react';
import './default.scss';
import Header from './components/Header'
import HomePage from './pages/Homepage';
import Registration from './pages/Registration';

import {Route, Switch, Redirect } from 'react-router-dom';
import Footer from './components/Footer';
import Login from './pages/Login';

import {auth, handleUserProfile} from './firebase/utlis';

const initialState = {
  currentUser:null
}

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      ...initialState
    };
  }

  authListener = null;

  componentDidMount(){
    this.authListener = auth.onAuthStateChanged(async userAuth=>{
      if(userAuth){
        const userRef = await handleUserProfile(userAuth);
        userRef.onSnapshot(snapshot=>{
          this.setState({currentUser:{
            id:snapshot.id, ...snapshot.data()
          }})
        })
      }
      this.setState({...initialState})
    })
  }

  componentWillUnmount(){
    this.authListner();
  }

  render(){
    const { currentUser } = this.state;

    return (
      <div className="App">
        <Header currentUser={currentUser}/>
        <div className="main"> 
          <Switch>
            
            <Route exact path="/" component={HomePage} />
            <Route path="/registration" component={Registration}/>
            
            {currentUser &&(
              <Redirect to="/"  />
            )}

            {!currentUser &&(
              <Route path="/login" component={Login}/>
            )}
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
  
}

export default App;
