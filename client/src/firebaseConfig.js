import firebase from 'firebase'
var firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "hitchhiker-63082.firebaseapp.com",
  databaseURL: "https://hitchhiker-63082.firebaseio.com",
  projectId: "hitchhiker-63082",
  storageBucket: "hitchhiker-63082.appspot.com",
  messagingSenderId: "1077226602012",
  appId: "1:1077226602012:web:ff6427772781d77b"
};

firebase.initializeApp(firebaseConfig);

export default firebase;