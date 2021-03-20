import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyB-nOpTbKmOhjy6RDlItXDq_wpUzPm6fbc",
    authDomain: "crud-8b3a7.firebaseapp.com",
    projectId: "crud-8b3a7",
    storageBucket: "crud-8b3a7.appspot.com",
    messagingSenderId: "187724844217",
    appId: "1:187724844217:web:ca3e5086a14d91ff089f68"
  }

  export const firebaseApp = firebase.initializeApp(firebaseConfig)