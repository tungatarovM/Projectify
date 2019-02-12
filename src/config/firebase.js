import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyB0rP5lbUc0MVhQaWQfqavG_m7YuMWQYWw",
  authDomain: "projectify-97e67.firebaseapp.com",
  databaseURL: "https://projectify-97e67.firebaseio.com",
  projectId: "projectify-97e67",
  storageBucket: "projectify-97e67.appspot.com",
  messagingSenderId: "722088701389"
};
firebase.initializeApp(config);

export default firebase;  