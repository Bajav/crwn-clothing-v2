import { signInWithPop,googleSignInRe,createUserAuthFromDoc } from "../../../utils/sign-in.component";

function SignIn() {
  const googlePopUp = async () => {
    const {user} = await signInWithPop();
    // console.log(user.uid);
    console.log("pop up func is working");
    createUserAuthFromDoc(user.uid);
  };

  return <section>SignIn
    <button onClick={googlePopUp}>sign in with google</button>
  </section>;
}

export default SignIn;
