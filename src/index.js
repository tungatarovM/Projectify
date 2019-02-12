import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createFirestoreInstance, getFirestore } from 'redux-firestore';
import { ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase';
import { composeWithDevTools } from 'redux-devtools-extension';


// Styles
import './scss/main.scss';

// Firebase config
import config from './config/firebase';

// Components
import App from './components/App';

// Reducer
import rootReducer from './reducers/rootReducer';

const store = createStore(
  rootReducer, 
  compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
    composeWithDevTools()
  )
);

const rrfConfig = {
  userProfile: 'users'
};

const rrfProps = {
  firebase: config,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
};

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider { ...rrfProps }>
      <App />
    </ReactReduxFirebaseProvider>
  </Provider>, 
  document.getElementById('root')
);

