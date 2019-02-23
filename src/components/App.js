import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';



// Components
import Navigation from './layout/Navigation';
import ProjectList from './ProjectList';
import SignUp from './auth/SignUp';
import Login from './auth/Login';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Navigation />
          <Switch>
            <Route path="/login" component={Login} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/" component={ProjectList} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;