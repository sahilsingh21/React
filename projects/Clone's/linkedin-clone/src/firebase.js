import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBn6RTCcxQSeceBgEXEAdLuDylG81G_qec",
  authDomain: "linkdin-clone-9c565.firebaseapp.com",
  projectId: "linkdin-clone-9c565",
  storageBucket: "linkdin-clone-9c565.appspot.com",
  messagingSenderId: "252219634160",
  appId: "1:252219634160:web:0162d9116fe4b9e5ee2d35"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};