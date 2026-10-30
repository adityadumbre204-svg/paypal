import NavigationLinks from "./NavigationLinks";

function NavigationBar({ onsignup, onlogin }) {
  return (
    <header className="site-header-nav">
      <div className="header-nav-left">
        <div className="brand-logo-holder">
          <img
            src="https://www.paypalobjects.com/marketing/web/logos/paypal-mark-color_new.svg"
            alt="PayPal"
            className="brand-symbol-img"
          />
        </div>
        <NavigationLinks />
      </div>
      <div className="header-nav-right">
        <button type="button" className="auth-entry-btn" onClick={onlogin || onsignup}>
          Log In
        </button>
        <button type="button" className="auth-action-btn" onClick={onsignup}>
          Sign Up
        </button>
      </div>
    </header>
  );
}

export default NavigationBar;

