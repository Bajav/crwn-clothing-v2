import { useState } from "react";
// importing components
import { signInWithPop } from "../../utils/firebase.utils"; 
import Input from "../Inputs/inputs.component";
import './signIn.styles.scss';


function SignInForm() {
  // states
  const [inputs,setInputs ] = useState(null);
  // form functions
  const handleChange =(e)=>
    {
      const {name,value} = e.target.name;
      setInputs(values =>({...values,[name]:value}));
    };
    const handleSubmit =(e)=>
      {
        e.preventDefault();
        console.log("submit is working");
      };

      // google sign 
      const googleSignIn = async ()=>
        {
          const res = signInWithPop ();
          console.log("sign in pop up is working",res);
        };
  return (
    <div className="form">
      <h1>sign in</h1>
      <form
        onSubmit={handleSubmit}
      >
        <Input
          htmlFor="email"
          label="email"
          type="email"
          placeholder="input email"
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
        <div className="signUPBtns">
          <button onClick={googleSignIn}>sign in with google insted</button>
          <button type="submit">sign in</button>
        </div>
      </form>
    </div>
  );
}

export default SignInForm;
