import firebase from 'firebase';


// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBJONUYdnD4lVlpdIYPVfSvstLyO3njKbM",
    authDomain: "new-push-app-62002.firebaseapp.com",
    projectId: "new-push-app-62002",
    storageBucket: "new-push-app-62002.appspot.com",
    messagingSenderId: "63598874272",
    appId: "1:63598874272:web:2edfd5b675a25924b683c5",
    measurementId: "G-8XBP8BQZVQ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebase; 