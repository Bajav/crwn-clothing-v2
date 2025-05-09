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

// initializing provider
const provider = new GoogleAuthProvider();
// setting custion params || how we wnat the auth provider to act
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth(firebaseApp);
export const signInWithPop = () => signInWithPopup(auth,provider);
export const googleSignInRe = () => signInWithRedirect(auth,provider);
