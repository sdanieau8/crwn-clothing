import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
  apiKey: "AIzaSyB37H9WsK8n25N_nDkliI5SaIC5kYVED1Q",
  authDomain: "crwn-db-60be3.firebaseapp.com",
  projectId: "crwn-db-60be3",
  storageBucket: "crwn-db-60be3.appspot.com",
  messagingSenderId: "76170231396",
  appId: "1:76170231396:web:7014589383b9b10ab6e971",
  measurementId: "G-D357YEWT9W"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
 