import { useState,useContext } from "react";
import {UserContext} from '../Contexts/user.context'
// importing components
import { signInWithPop } from "../../utils/firebase.utils";
import Input from "../Inputs/inputs.component";
import "./signIn.styles.scss";

function SignInForm() {
  // context
  const {setCurrentUser} = useContext(UserContext);
  // default form fields
  const defaultForm = { email: "", password: "" };
  // states
  const [inputs, setInputs] = useState(defaultForm);
  // form functions
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setInputs(defaultForm);
    console.log("submit is working");
  };

  // google sign
  const googleSignIn = async () => {
    try {
      const {user} = await signInWithPop();
      setCurrentUser(user);
      console.log("sign in pop up is working", res);
    } catch (error) {
      console.error("Google Sign-In failed", error);
    }
  };
  return (
    <div className="form">
      <h1>sign in</h1>
      <form onSubmit={handleSubmit}>
        <Input
          htmlFor="email"
          label="email"
          type="email"
          placeholder="input email"
          name="email"
          value={inputs.email || ""}
          change={handleChange}
        />
        <Input
          htmlFor="password"
          label="password"
          type="password"
          placeholder="enter password"
          name="password"
          value={inputs.password || ""}
          change={handleChange}
        />
        <div className="signUPBtns">
          <button onClick={googleSignIn}>sign in with google insted</button>
          <button type="submit">sign in</button>
        </div>
      </form>
    </div>
  );
}

export default SignInForm;
