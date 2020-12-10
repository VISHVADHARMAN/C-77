import firebase from 'firebase';

require('@firebase/firestore')
var firebaseConfig = {
    apiKey: "AIzaSyDlVXTkE7-nlGHVJlLVOMSU2f9JO2hkzmY",
    authDomain: "book-santa-6e1a7.firebaseapp.com",
    projectId: "book-santa-6e1a7",
    storageBucket: "book-santa-6e1a7.appspot.com",
    messagingSenderId: "1025718812382",
    appId: "1:1025718812382:web:0bf3d236a12f8ddb870c4f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()