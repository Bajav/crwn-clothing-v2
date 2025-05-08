import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAx9m4a-tKl7IyUvFu8BiZumVaaAnF6EcE",
  authDomain: "crwn-clothing-3ed9a.firebaseapp.com",
  projectId: "crwn-clothing-3ed9a",
  storageBucket: "crwn-clothing-3ed9a.firebasestorage.app",
  messagingSenderId: "903059589170",
  appId: "1:903059589170:web:5d8aac18b370da9572142b",
};

const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

const auth = getAuth(firebaseApp);
export const signInWithPopup = () => signInWithPopup(auth);
