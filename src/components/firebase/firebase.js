import firebase from 'firebase/app'
import 'firebase/firestore'


var firebaseConfig = {
    //..
  };

firebase.initializeApp(firebaseConfig)
export const db = firebase.firestore();