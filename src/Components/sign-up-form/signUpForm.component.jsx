import { useState } from "react";
import Input from "../Inputs/inputs.component";
import './signUp.styles.scss';

function SignUpForm() {
  return (
    <div className="form">
        <h3>sign up</h3>
      <form action="">
        <Input htmlFor="displayName" label="display name" type="text" placeholder="input displayName" name="displayName" change={()=>{}} />
        <Input htmlFor="email" label="email" type="email" placeholder="enter email address" name="email" change={()=>{}} />
        <Input htmlFor="password" label="password" type="password" placeholder="enter password" name="password" change={()=>{}} />
        <Input htmlFor="co-password" label="co-password" type="password" placeholder="confirm password" name="co-password" change={()=>{}} />
        <button type="submit">create account</button>
      </form>
    </div>
  );
}

export default SignUpForm;
