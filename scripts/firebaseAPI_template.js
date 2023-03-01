//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
var firebaseConfig = {
  apiKey: "AIzaSyDsA2wfIcDzVrApcDjrrG_hbZlmzGjIQNI",
  authDomain: "comp1800-df869.firebaseapp.com",
  projectId: "comp1800-df869",
  storageBucket: "comp1800-df869.appspot.com",
  messagingSenderId: "1027417555557",
  appId: "1:1027417555557:web:a14be06501e408916cbc8c"
};

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();
