import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyBB9m-q7wih_Gp-HIuVYQFrr3yM3NI1sY0",
    authDomain: "asper-discussionapp.firebaseapp.com",
    projectId: "asper-discussionapp",
    storageBucket: "asper-discussionapp.appspot.com",
    messagingSenderId: "101588513793",
    appId: "1:101588513793:web:5b6981039960f62865fc00"
  };
  // Initialize Firebase
const app = initializeApp(firebaseConfig);

  
  // const firebaseApp =  initializeApp(firebaseConfig);
  // const db = firebaseApp.firestore();
  const db = getFirestore(app);
  // const auth = firebaseApp.auth();
  const auth = getAuth(app);
  // const provider = new firebaseApp.auth.GoogleAuthProvider();

  export { auth };
  export default db;