// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{ getAuth ,GoogleAuthProvider } from "firebase/auth";  //to use auth
import{getFirestore} from "firebase/firestore"; //to acess the firebase data
import { getStorage } from "firebase/storage"; // to access the storage (cloud storage)service of firebase
const firebaseConfig = {
  apiKey: "AIzaSyDhPHVWYLnFFqrTGUZp3gtaXQKZGzLFJB8",
  authDomain: "fir-tutorial-ff873.firebaseapp.com",
  projectId: "fir-tutorial-ff873",
  storageBucket: "fir-tutorial-ff873.appspot.com",
  messagingSenderId: "89705066310",
  appId: "1:89705066310:web:286ef65a104cebdd467f47",
  measurementId: "G-P7X24V4B16"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider= new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);