import { signInWithPop,googleSignInRe,createUserAuthFromDoc } from "../../../utils/firebase.utils";

function SignIn() {
  const googlePopUp = async () => {
    const {user} = await signInWithPop();
    console.log("pop up func is working");
    console.log("user ::: ",user);      
    createUserAuthFromDoc(user);
    console.log("user uid::: ",user.uid);      
  };

  return <section>SignIn
    <button onClick={googlePopUp}>sign in with google</button>
  </section>;
}

export default SignIn;
