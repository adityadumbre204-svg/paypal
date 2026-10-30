import AuthControlButtons from "../components/AuthControlButtons";

function RegisterPortal({ onsignup }) {
  return (
    <div className="register-portal-wrapper">
      <AuthControlButtons signup={onsignup} />
    </div>
  );
}

export default RegisterPortal;

