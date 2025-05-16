import { useState } from "react";
import Input from "../Inputs/inputs.component";
import "./signUp.styles.scss";

function SignUpForm() {
    // form input functions 
  const [inputs, setInputs] = useState(null);
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs(values => ({...values, [name]: value}));
    // console.log(inputs);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
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
          change={handleChange}
        />
        <Input
          htmlFor="email"
          label="email"
          type="email"
          placeholder="enter email address"
          name="email"
          change={handleChange}
        />
        <Input
          htmlFor="password"
          label="password"
          type="password"
          placeholder="enter password"
          name="password"
          change={handleChange}
        />
        <Input
          htmlFor="co-password"
          label="co-password"
          type="password"
          placeholder="confirm password"
          name="co-password"
          change={handleChange}
        />
        <div className="signUPBtns">
        <button onClick={()=>{console.log("signup with google instead");
        }}>sign up with google insted</button>
        <button type="submit">create account</button>
        </div>
      </form>
    </div>
  );
}

export default SignUpForm;
