import { useState } from "react";
import Input from "../Inputs/inputs.component";
import "./signUp.styles.scss";

function SignUpForm() {
  const [inputs, setInputs] = useState({});
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs(values => ({...values, [name]: value}));
    console.log(inputs);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
  };
  return (
    <div className="form">
      <h3>sign up</h3>
      <form action="">
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
        <button type="submit"  onSubmit={handleSubmit}>create account</button>
      </form>
    </div>
  );
}

export default SignUpForm;
