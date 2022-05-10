// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBZGSgR3IY3yZSt9i3IyR4Z6-rvgb93_O4",
  authDomain: "disneyplus-clone-82ff7.firebaseapp.com",
  projectId: "disneyplus-clone-82ff7",
  storageBucket: "disneyplus-clone-82ff7.appspot.com",
  messagingSenderId: "954459393315",
  appId: "1:954459393315:web:1be458316da74aa30a1096",
  measurementId: "G-LZ4ZZDLQS2",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore();

const auth = getAuth(firebaseApp);

const provider = new GoogleAuthProvider();

const storage = getStorage(firebaseApp);

export { auth, provider, storage };
export default db;
