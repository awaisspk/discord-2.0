import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBcB8UMztKu2RkLdi2XeIwUPbg0aB_IwZ0",
  authDomain: "discord-8ad31.firebaseapp.com",
  projectId: "discord-8ad31",
  storageBucket: "discord-8ad31.appspot.com",
  messagingSenderId: "141360305461",
  appId: "1:141360305461:web:c932cb01ea67347bc0287c",
  measurementId: "G-NHQMRTKH4P",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, db };
