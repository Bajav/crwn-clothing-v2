import { useContext} from "react";
import { UserContext } from "../../Contexts/user.context";
import SignInForm from "../../sign-In-form/signIn.form";
import './signIn.style.scss';


function SignIn() {
const {currentUser} = useContext(UserContext);
  return (
    <section className="authPage">
      <SignInForm />
    </section>
  );
}

export default SignIn;