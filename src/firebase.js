import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAPbT4GcJwH0PcfVDagKszfWNIR7HMwNGo",
  authDomain: "ecommerce-a7a0a.firebaseapp.com",
  databaseURL: "https://ecommerce-a7a0a.firebaseio.com",
  projectId: "ecommerce-a7a0a",
  storageBucket: "ecommerce-a7a0a.appspot.com",
  messagingSenderId: "720251070523",
  appId: "1:720251070523:web:4351ef1b076e84486f141e",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
