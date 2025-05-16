import {
  signInWithPop,
  googleSignInRe,
  createUserAuthFromDoc,
} from "../../../utils/firebase.utils";
import SignUpForm from "../../sign-up-form/signUpForm.component";
import SignInForm from "../../sign-In-form/signIn.form";
import './signIn.style.scss';
function SignIn() {
  const googlePopUp = async () => {
    const { user } = await signInWithPop();
    console.log("user uid::: ", user.uid);
    const userDocRef = await createUserAuthFromDoc(user);
    console.log(userDocRef);
  };

  return (
    <section className="authPage">
      <SignUpForm />
      <SignInForm />
    </section>
  );
}

export default SignIn;
