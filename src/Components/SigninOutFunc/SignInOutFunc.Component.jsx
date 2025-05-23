import "./SignInOut.styles.scss";
import { Fragment, useState } from "react";

function SignInOutFunc() {
    const [isUserACtive,setUserAc] = useState(false);
    const signIn =()=>{
        alert("user signed in");
        setUserAc(true);
    }
    const signOut =()=>{
        alert("user signed out");
        setUserAc(false);
    }
  return (
    <Fragment>
    {!isUserACtive ?<button onClick={signIn}>Sign In</button> : <button onClick={signOut}>sign out</button>}
    </Fragment>
  )
}

export default SignInOutFunc;