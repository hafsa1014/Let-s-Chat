import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var config = {
  apiKey: "AIzaSyA1WzSPwM7AXMvbIraHRy3TsfFKD3d_9Lw",
  authDomain: "letschatting-e804e.firebaseapp.com",
  databaseURL: "https://letschatting-e804e-default-rtdb.firebaseio.com/",
  projectId: "letschatting-e804e",
  storageBucket: "letschatting-e804e.appspot.com",
  messagingSenderId: "814339721520",
  };
  
  firebase.initializeApp(config);

  export default firebase;