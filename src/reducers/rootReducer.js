import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';

import projectsReducer from './projectReducers';

export default combineReducers({
  projects: projectsReducer,
  firestore: firestoreReducer
});