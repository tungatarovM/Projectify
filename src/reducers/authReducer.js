import { SIGNUP_SUCCESS, SIGNUP_ERROR } from '../actions/types';

const initialState = {
  authError: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_SUCCESS:
      return {
        ...state,
        authError: null,
      };
    case SIGNUP_ERROR:
      return {
        ...state,
        authError: action.error
      }
    default:
      return state;
  }
};