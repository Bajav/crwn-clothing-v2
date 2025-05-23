import "./SignInOut.styles.scss";
import { Fragment, useState } from "react";
import SignInForm from "../sign-In-form/signIn.form";

function SignInOutFunc() {
  const [isUserACtive, setUserAc] = useState(false);
  const signIn = () => {
    setUserAc(true);
    return <SignInForm />;
  };
  const signOut = () => {
    alert("user signed out");
    setUserAc(false);
  };
  return (
    <Fragment>
      {!isUserACtive ? (
        <button onClick={signIn}>Sign In</button>
      ) : (
        <button onClick={signOut}>sign out</button>
      )}
    </Fragment>
  );
}

export default SignInOutFunc;
