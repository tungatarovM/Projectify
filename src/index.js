import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { connect, Provider } from 'react-redux';

// Components
import App from './components/App';

// Reducer
import rootReducer from './reducers/rootReducer';

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
);

