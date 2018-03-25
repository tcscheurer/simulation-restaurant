import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import Auth from './Components/Auth';
import Browsing from './Components/Browsing';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Auth} />
          <Route exact path="/" component={Browsing} />
        </Switch>
      </div>
    );
  }
}

export default App;
