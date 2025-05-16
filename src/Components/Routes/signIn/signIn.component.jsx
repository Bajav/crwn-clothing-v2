import {
  signInWithPop,
  googleSignInRe,
  createUserAuthFromDoc,
} from "../../../utils/firebase.utils";

function SignIn() {
  const googlePopUp = async () => {
    const { user } = await signInWithPop();
    console.log("user uid::: ", user.uid);
    const userDocRef = await createUserAuthFromDoc(user);
    console.log(userDocRef);
  };

  return (
    <section>
      SignIn
      <button onClick={googlePopUp}>sign in with google</button>
    </section>
  );
}

export default SignIn;
