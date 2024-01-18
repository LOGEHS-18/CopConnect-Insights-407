import firebase from 'firebase/compat/app';

import 'firebase/compat/auth';

import 'firebase/compat/firestore';

import { getStorage } from "firebase/storage"

import { getFirestore } from "firebase/firestore"

import { initializeApp } from "firebase/app";

import { getDatabase } from 'firebase/database';

import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

import { getAuth, onAuthStateChanged } from "firebase/auth";

import 'firebase/storage';


const firebaseConfig = {

  apiKey: "AIzaSyCmhdlnU8KN0jbPTyVD6ZJPulL6jwg8sG4",

  authDomain: "rj-hackathon-64ac1.firebaseapp.com",

  projectId: "rj-hackathon-64ac1",

  storageBucket: "rj-hackathon-64ac1.appspot.com",

  messagingSenderId: "999589067374",

  appId: "1:999589067374:web:ea12c83a096bc48adec47f",

  measurementId: "G-WWQPPGQ1EZ"

};

if (!firebase.apps.length) {

  firebase.initializeApp(firebaseConfig);

}

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const imgDB = getStorage(app);

const txtDB = getFirestore(app);

const database = getDatabase(app);

const googleAuthProvider = new GoogleAuthProvider();

const db = firebase.firestore();

const storage = getStorage(app);

googleAuthProvider.addScope('https://www.googleapis.com/auth/contacts.readonly');

export { firebase, auth, imgDB, storage, txtDB, db, database, googleAuthProvider, signInWithPopup, onAuthStateChanged };