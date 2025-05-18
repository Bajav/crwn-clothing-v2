import { useState } from "react";
import Input from "../Inputs/inputs.component";
import "./signUp.styles.scss";
import {
  signInWithPop,
  createUserAuthFromDoc,
} from "../../utils/firebase.utils";

function SignUpForm() {
  const defaultForm = {
    displayName: "",
    email: "",
    password: "",
    coPassword: "",
  };
  // form input functions
  const [inputs, setInputs] = useState(defaultForm);
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs({...inputs, [name]: value });
    // console.log(inputs);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    setInputs(defaultForm);
  };

  //   google function sign up with pop up
  const signUpwithPopUp = async () => {
    const { user } = await signInWithPop();
    // console.log(user);
    const newUser = await createUserAuthFromDoc(user);
    console.log(newUser);
  };
  return (
    <div className="form">
      <h3>sign up</h3>
      <form onSubmit={handleSubmit}>
        <Input
          htmlFor="displayName"
          label="display name"
          type="text"
          placeholder="input displayName"
          name="displayName"
          value={inputs.displayName || ""}
          change={handleChange}
        />
        <Input
          htmlFor="email"
          label="email"
          type="email"
          placeholder="enter email address"
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
        <Input
          htmlFor="coPassword"
          label="co-password"
          type="password"
          placeholder="confirm password"
          name="coPassword"
          value={inputs.coPassword || ""}
          change={handleChange}
        />
        <div className="signUPBtns">
          <button onClick={signUpwithPopUp}>sign up with google insted</button>
          <button type="submit">create account</button>
        </div>
      </form>
    </div>
  );
}

export default SignUpForm;
