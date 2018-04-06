import * as firebase from 'firebase';


  const config = {
    apiKey: "AIzaSyD9-D_-KabQ20o2Rrm-YAqTSOZUuHej7Fw",
    authDomain: "saludencasa-dc41d.firebaseapp.com",
    databaseURL: "https://saludencasa-dc41d.firebaseio.com",
    projectId: "saludencasa-dc41d",
    storageBucket: "saludencasa-dc41d.appspot.com",
    messagingSenderId: "487063871398"
  };

  if(!firebase.apps.length){
    firebase.initializeApp(config);
  }

  const auth = firebase.auth();

    export {
    auth,
    };
