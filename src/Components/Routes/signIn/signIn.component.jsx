import {
  signInWithPop,
  googleSignInRe,
  createUserAuthFromDoc,
} from "../../../utils/firebase.utils";
import SignUpForm from "../../sign-up-form/signUpForm.component";

function SignIn() {
  const googlePopUp = async () => {
    const { user } = await signInWithPop();
    console.log("user uid::: ", user.uid);
    const userDocRef = await createUserAuthFromDoc(user);
    console.log(userDocRef);
  };

  return (
    <section>
      <SignUpForm />
    </section>
  );
}

export default SignIn;
