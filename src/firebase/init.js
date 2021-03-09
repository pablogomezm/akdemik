/*
<script>
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyD4Ld7H4HNr7fR-u3_-TMCyiWP_hGLu14Q",
    authDomain: "soccerapp-371a3.firebaseapp.com",
    projectId: "soccerapp-371a3",
    storageBucket: "soccerapp-371a3.appspot.com",
    messagingSenderId: "49151872479",
    appId: "1:49151872479:web:19ee4a3ab9e1ebe1af486a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
</script>
*/

import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD4Ld7H4HNr7fR-u3_-TMCyiWP_hGLu14Q",
  authDomain: "soccerapp-371a3.firebaseapp.com",
  projectId: "soccerapp-371a3",
  storageBucket: "soccerapp-371a3.appspot.com",
  messagingSenderId: "49151872479",
  appId: "1:49151872479:web:19ee4a3ab9e1ebe1af486a"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

firebaseApp.firestore().settings({ timestampsInSnapshots: true });

export default firebaseApp.firestore();
