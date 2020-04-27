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
    articles_data : [
      { title : 'https://scopeblog.stanford.edu/2020/04/02/whats-a-virus-anyway-part-1-the-bare-bones-basics/', link : 'https://scopeblog.stanford.edu/2020/04/02/whats-a-virus-anyway-part-1-the-bare-bones-basics/'},
      { title : 'https://scopeblog.stanford.edu/2020/04/03/how-coronaviruses-infect-us-how-infectious-viruses-created-us/', link : 'https://scopeblog.stanford.edu/2020/04/03/how-coronaviruses-infect-us-how-infectious-viruses-created-us/' },
    ],
  }

  render() {
    const {articles_data} = this.state;
    // console.log(articles_data);
    return (
      <div>
          <HeaderComponent />
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Router>
            <Switch>
            <Route path="/">
                <MainComponent articles={articles_data}/>
            </Route>
            <Route path="/home">
                <MainComponent articles={articles_data} />
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
