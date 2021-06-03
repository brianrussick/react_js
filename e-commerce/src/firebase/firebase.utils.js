import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD_lfOnBEuxuaMVZbmrzxuz_KF6TnvCcP0",
    authDomain: "e-commerce-2870b.firebaseapp.com",
    projectId: "e-commerce-2870b",
    storageBucket: "e-commerce-2870b.appspot.com",
    messagingSenderId: "473797205821",
    appId: "1:473797205821:web:230ae18433ac682ed1ef54",
    measurementId: "G-XGFDBQ85V9"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
