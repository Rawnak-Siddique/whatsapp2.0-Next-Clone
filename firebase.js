import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAZ7l6b4IsgnFXy4vtyXaxQpxtmLKttmfw",
    authDomain: "whatsapp-next-clone-a6598.firebaseapp.com",
    projectId: "whatsapp-next-clone-a6598",
    storageBucket: "whatsapp-next-clone-a6598.appspot.com",
    messagingSenderId: "949703894067",
    appId: "1:949703894067:web:164a507ff77c1130702f46",
    measurementId: "G-FFH546BEWM"
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();


export { db, auth, provider };