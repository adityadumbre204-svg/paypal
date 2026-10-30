import { useState } from "react";
import "./App.css";
import NavigationBar from "./components/NavigationBar";
import AccountRegistration from "./pages/AccountRegistration";

function App() {
  const [showAuth, setShowAuth] = useState(false);
  const [activeTab, setActiveTab] = useState("business");

  const openAuth = () => setShowAuth(true);
  const closeAuth = () => setShowAuth(false);

  return (
    <div className="application-root">
      {!showAuth ? (
        <>
          <NavigationBar onsignup={openAuth} onlogin={openAuth} />
          <main className="portal-main-body">
            <div className="switch-tab-segment">
              <button
                type="button"
                className={`switch-tab-item ${activeTab === "business" ? "is-selected" : ""}`}
                onClick={() => setActiveTab("business")}
              >
                Business
              </button>
              <button
                type="button"
                className={`switch-tab-item ${activeTab === "personal" ? "is-selected" : ""}`}
                onClick={() => setActiveTab("personal")}
              >
                Personal
              </button>
            </div>

            <section className="spotlight-hero-layout">
              {activeTab === "business" ? (
                <>
                  <h1 className="spotlight-hero-title">PayPal Open</h1>
                  <p className="spotlight-hero-subtitle">One platform for your business needs</p>
                  <p className="spotlight-hero-paragraph">
                    PayPal Open unifies your PayPal business solutions to help you get paid, get growing, and get ahead.
                  </p>
                  <div className="spotlight-hero-cta-group">
                    <button
                      type="button"
                      className="spotlight-primary-cta"
                      onClick={openAuth}
                    >
                      Sign Up
                    </button>
                    <a
                      href="https://www.paypal.com/in/home"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="spotlight-secondary-cta"
                    >
                      Contact Sales
                    </a>
                  </div>
                </>
              ) : (
                <>
                  <h1 className="spotlight-hero-title">PayPal Personal</h1>
                  <p className="spotlight-hero-subtitle">The simpler, safer way to pay and get paid</p>
                  <p className="spotlight-hero-paragraph">
                    Pay online, send money to friends, and manage your everyday spending with PayPal.
                  </p>
                  <div className="spotlight-hero-cta-group">
                    <button
                      type="button"
                      className="spotlight-primary-cta"
                      onClick={openAuth}
                    >
                      Sign Up
                    </button>
                    <a
                      href="https://www.paypal.com/in/home"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="spotlight-secondary-cta"
                    >
                      Contact Sales
                    </a>
                  </div>
                </>
              )}
            </section>
          </main>
        </>
      ) : (
        <AccountRegistration onBack={closeAuth} />
      )}
    </div>
  );
}

export default App;
