// 실습코드
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import MainComponent from './components/main/main';
import HeaderComponent from './components/header/header';

class App extends Component {

  state = {
    input: '',
  }

  render() {
    return (
      <div>
          <HeaderComponent />
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Router>
            <Switch>
            <Route path="/">
                <MainComponent />
            </Route>
            <Route path="/home">
                <MainComponent />
            </Route>
            {/* <Route path="/users">
                <Users />
            </Route> */}
            </Switch>
          </Router>
      </div>
    );
  }
}

export default App;
