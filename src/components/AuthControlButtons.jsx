function AuthControlButtons({ signup }) {
  return (
    <div className="auth-controls-wrapper">
      <button onClick={signup} className="auth-entry-btn">
        Login
      </button>
      <button onClick={signup} className="auth-entry-btn">
        Signup
      </button>
    </div>
  );
}

export default AuthControlButtons;

