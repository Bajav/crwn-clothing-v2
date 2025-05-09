import { signInWithPop,googleSignInRe } from "../../../utils/sign-in.component";

function SignIn() {
  const googlePopUp = async () => {
    const response = await googleSignInRe();
    console.log(response);
    console.log("pop up func is working");
  };

  return <section>SignIn
    <button onClick={googlePopUp}>sign in with google</button>
  </section>;
}

export default SignIn;
