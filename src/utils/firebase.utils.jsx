import { initializeApp } from "firebase/app";
import { setDoc,getDoc, getFirestore, doc } from 'firebase/firestore';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword
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


// initialize firestore db
export const db = getFirestore();
export const createUserAuthFromDoc = async (userAuth) =>
  {
    if(!userAuth) return;
    const userRef = doc(db,"users",userAuth.uid);
    const userSnapShot = await getDoc(userRef);
    if(!userSnapShot.exists()){
      const {displayName,email} = userAuth;
      const createdAt = new Date(); 
      try{
        await setDoc(userRef,{
          displayName,
          email,
          createdAt
        });
      }catch(error){
        console.log(error);
      }
    }
    return userRef;
  };
// create user with email and password
export const createUserEmailPassword = async (email,password) =>
  {
    if(!email || !password) return;
    createUserEmailPassword(auth,email,password);
  }

