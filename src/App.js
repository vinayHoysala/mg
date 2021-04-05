import React from 'react';
import './default.scss';
import Header from './components/Header'
import HomePage from './pages/Homepage';
import Registration from './pages/Registration';

import {Route, Switch} from 'react-router-dom';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main"> 
        <Switch>
          <Route exact path="/" component={HomePage}/> 
          <Route path="/registration" component={Registration}/>
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
