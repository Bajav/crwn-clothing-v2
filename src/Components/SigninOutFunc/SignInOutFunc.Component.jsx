import { useContext, useState } from "react";
import { UserContext } from "../Contexts/user.context";
import SignInModel from "../Models/SignIn model/SignIn.model";

function SignInOutButton() {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const [showSignInModal, setShowSignInModal] = useState(false);

  const handleSignInClick = () => {
    setShowSignInModal(true);
  };

  const handleSignOut = () => {
    alert("User signed out");
  };

  return (
    <>
      {currentUser ? (
        <button onClick={handleSignOut}>Sign Out</button>
      ) : (
        <button onClick={handleSignInClick}>Sign In</button>
      )}
      {showSignInModal && (
        <SignInModel onClose={() => setShowSignInModal(false)} />
      )}
    </>
  );
}

export default SignInOutButton;