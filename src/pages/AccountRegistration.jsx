import { useState } from "react";

function AccountRegistration({ onBack }) {
  const [showPassword, setShowPassword] = useState(false);
  const [country, setCountry] = useState("India");
  const [code, setCode] = useState("+91");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Account Created Successsfully");
  };

  return (
    <div className="registration-view">
      <div className="registration-header-nav">
        {onBack && (
          <button type="button" className="return-nav-btn" onClick={onBack} aria-label="Back">
            ← Back
          </button>
        )}
      </div>

      <div className="registration-content-box">
        <h1 className="registration-headline">Let’s create your account</h1>
        <p className="registration-subtext">
          Whether you're a business, nonprofit or a casual seller, you're in the right place.
        </p>

        <form onSubmit={handleSubmit} className="registration-input-form">
          <div className="input-field-wrapper">
            <input
              type="text"
              placeholder="First name"
              id="firstname"
              className="text-entry-field"
              required
            />
          </div>

          <div className="input-field-wrapper">
            <input
              type="text"
              placeholder="Middle name"
              id="middlename"
              className="text-entry-field"
            />
          </div>

          <div className="input-field-wrapper">
            <input
              type="text"
              placeholder="Last name"
              id="lastname"
              className="text-entry-field"
              required
            />
          </div>

          <div className="dropdown-select-container">
            <label htmlFor="country-select" className="dropdown-field-title">
              Country or region
            </label>
            <div className="dropdown-control-shell">
              <select
                id="country-select"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="dropdown-input-native"
              >
                <option value="India">India</option>
                <option value="United States">United States</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="Canada">Canada</option>
                <option value="Australia">Australia</option>
              </select>
              <span className="dropdown-indicator-arrow">⌄</span>
            </div>
          </div>

          <p className="dropdown-guidance-note">
            Choose the country where your business is based. If you’re a casual seller, choose the country where you live.
          </p>

          <div className="contact-phone-grid">
            <div className="dialcode-select-container">
              <label htmlFor="phone-code" className="dropdown-field-title">
                Code
              </label>
              <div className="dialcode-control-shell">
                <span className="country-flag-icon" role="img" aria-label="India flag">
                  🇮🇳
                </span>
                <select
                  id="phone-code"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  className="dialcode-input-native"
                >
                  <option value="+91">+91</option>
                  <option value="+1">+1</option>
                  <option value="+44">+44</option>
                  <option value="+61">+61</option>
                </select>
                <span className="dropdown-indicator-arrow">⌄</span>
              </div>
            </div>

            <div className="input-field-wrapper phonenumber-field-wrapper">
              <input
                type="number"
                placeholder="Phone number"
                id="phno"
                className="text-entry-field"
                required
              />
            </div>
          </div>

          <div className="input-field-wrapper">
            <input
              type="email"
              placeholder="Email address"
              id="email"
              className="text-entry-field"
              required
            />
          </div>

          <div className="input-field-wrapper secure-field-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Create password"
              id="pass"
              className="text-entry-field secure-password-control"
              required
            />
            <button
              type="button"
              className="visibility-toggle-btn"
              onClick={() => setShowPassword(!showPassword)}
              aria-label="Toggle password visibility"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx="12" cy="12" r="3" />
                {showPassword && <line x1="1" y1="1" x2="23" y2="23" />}
              </svg>
            </button>
          </div>

          <button type="submit" className="registration-submit-trigger">
            Agree and Create Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default AccountRegistration;

