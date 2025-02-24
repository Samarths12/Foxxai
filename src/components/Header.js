import React, { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signOut } from 'firebase/auth';
import logo from "./logo.jpg";
import "./tailwindstyles.css";

const Header = ({ isAuthenticated }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [userEmail, setUserEmail] = useState(null);
  const navigate = useNavigate();
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUserEmail(user?.email);
    });

    return () => unsubscribe();
  }, [auth]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDashClick = () => {
    navigate("/dashboard");
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem("isAuthenticated");
      localStorage.removeItem("userEmail");
      navigate("/signin");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  const handleLogoClick = () => {
    navigate("/");
  };

  const handleAuthAction = () => {
    navigate("/signin");
  };

  // Navigate to Features page instead of scrolling
  const handleFeatures = () => {
    navigate("/features");
    setIsOpen(false); // Close mobile menu after clicking
  };

  return (
    <header className={`header-container ${scrolled ? "shadow" : ""}`}>
      <div className="header-wrapper">
        <div className="header-content">
          <div className="logo-group" onClick={handleLogoClick}>
            <img src={logo} alt="Logo" className="logo w-10 h-10 rounded-lg" />
            <div className="logo-text">ConvolabsAI</div>
          </div>

          {/* Desktop Navigation */}
          <nav className="nav-menu">
            <ul className="nav-list">
              {[
                { href: "/aiagents", label: "AIAgents" },
                { href: "/pricing", label: "Pricing" },
                { href: "/docs", label: "Docs" },
                { label: "Blogs", onClick: handleFeatures }, // Updated to use navigation
                { href: "/careers", label: "Careers", isExternal: true },
              ].map((item) => (
                <li key={item.label}>
                  {item.isExternal ? (
                    <Link to={item.href} className="nav-link">
                      {item.label}
                    </Link>
                  ) : item.onClick ? (
                    <button
                      onClick={item.onClick}
                      className="nav-link"
                    >
                      {item.label}
                    </button>
                  ) : (
                    <Link to={item.href} className="nav-link">
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop Buttons */}
          <div className="button-group">
            {isAuthenticated ? (
              <>
                <button 
                  onClick={handleDashClick} 
                  className="btn-primary"
                  title={userEmail}
                >
                  Dash
                </button>
                <button onClick={handleSignOut} className="btn-danger">
                  Sign Out
                </button>
              </>
            ) : (
              <button onClick={handleAuthAction} className="btn-primary">
                Sign In
              </button>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`mobile-nav ${isOpen ? "open" : ""}`}>
          <nav>
            <ul className="mobile-nav-list">
              {[
                { href: "/aiagents", label: "AIAgents" },
                { href: "/pricing", label: "Pricing" },
                { href: "/docs", label: "Docs" },
                { label: "Blogs", onClick: handleFeatures }, // Updated to use navigation
                { href: "/careers", label: "Careers", isExternal: true },
              ].map((item) => (
                <li key={item.label}>
                  {item.isExternal ? (
                    <Link to={item.href} className="nav-link">
                      {item.label}
                    </Link>
                  ) : item.onClick ? (
                    <button
                      onClick={item.onClick}
                      className="nav-link"
                    >
                      {item.label}
                    </button>
                  ) : (
                    <Link to={item.href} className="nav-link">
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
              <li className="mobile-button-group">
                {isAuthenticated ? (
                  <>
                    <button onClick={handleDashClick} className="btn-primary">
                      Dash
                    </button>
                    <button onClick={handleSignOut} className="btn-danger">
                      Sign Out
                    </button>
                  </>
                ) : (
                  <button onClick={handleAuthAction} className="btn-primary">
                    Join the Waitlist
                  </button>
                )}
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;