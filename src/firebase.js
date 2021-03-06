import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDs5wy71ssYwHgiotKBpNDAOrWlosomOPM",
    authDomain: "facebook-clone-pamaxa.firebaseapp.com",
    databaseURL: "https://facebook-clone-pamaxa.firebaseio.com",
    projectId: "facebook-clone-pamaxa",
    storageBucket: "facebook-clone-pamaxa.appspot.com",
    messagingSenderId: "1049046641690",
    appId: "1:1049046641690:web:dca506795fa76d32eab5a3",
    measurementId: "G-0BYLQG0TTC"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;