import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

var config = {
    apiKey: "AIzaSyAfP3Wm5lcE5L7jxuPRLHIEJ6I_iXIsjlY",
    authDomain: "newrepa-c042c.firebaseapp.com",
    databaseURL: "https://newrepa-c042c.firebaseio.com",
    projectId: "newrepa-c042c",
    storageBucket: "newrepa-c042c.appspot.com",
    messagingSenderId: "453444113960",
    appId: "1:453444113960:web:343c1830636326c399c71d",
    measurementId: "G-4B22ZFCHFM"
  };
  // Initialize Firebase
  firebase.initializeApp(config);
  
  const storage=firebase.storage();

  firebase.firestore().settings({timestampsInSnapshots:true});

  export {storage, firebase as default};