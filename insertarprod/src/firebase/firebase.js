import * as firebase from 'firebase';

  
  const config = {
      apiKey: "AIzaSyCVyrimQuJY_IHWPj7zCvO6c8poNQoRcOc",
    authDomain: "insertarprod.firebaseapp.com",
    databaseURL: "https://insertarprod.firebaseio.com",
    projectId: "insertarprod",
    storageBucket: "insertarprod.appspot.com",
    messagingSenderId: "410754920089"
  };

  const db = firebase.database();

    firebase.initializeApp(config);

    export {
    db,
    };