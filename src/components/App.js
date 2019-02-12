import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';



// Components
import ProjectList from './ProjectList';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={ProjectList} />
        </Switch>
      </Router>
    );
  }
}

export default App;