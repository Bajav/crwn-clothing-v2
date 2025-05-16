import Input from "../Inputs/inputs.component";

function SignIn() {
  return (
    <div className="signIn">
      ,
      <form
        onSubmit={() => {
          "handlesubmit";
        }}
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
          <button onClick={()=>{"signUpwithPopUp"}}>sign up with google insted</button>
          <button type="submit">create account</button>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
