// SignInModal.jsx
import "./SignIn.styles.scss";
import SignInForm from "../../sign-In-form/signIn.form";

function SignInModel({ onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <SignInForm onClose={onClose} />
      </div>
    </div>
  );
}

export default SignInModel;