import { SIGNUP_SUCCESS, SIGNUP_ERROR } from './types';

export const signUp = (newUser) => (dispatch, getState, { getFirebase, getFirestore }) => {
  console.log(getFirebase);
  const firebase = getFirebase();
  const firestore = getFirestore();

  firebase.auth().createUserWithEmailAndPassword(
    newUser.email,
    newUser.password
  ).then((response) => firestore.collection('users')
    .doc(response.user.uid)
    .set({
      userName: newUser.userName,
      email: newUser.email,
    })
  ).then(() => dispatch({
    type: SIGNUP_SUCCESS,
  })).catch(error => dispatch({
    type: SIGNUP_ERROR,
    error,
  }));
}