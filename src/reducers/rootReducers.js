import { combineReducers } from 'redux';

import projectsReducer from './projectReducers';

export default combineReducers({
  projects: projectsReducer,
}); 