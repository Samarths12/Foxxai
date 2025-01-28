import React, { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import logo from "./logo.jpg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = () => {
      const authStatus = localStorage.getItem("isAuthenticated");
      setIsAuthenticated(authStatus === "true");
    };

    checkAuth();

    window.addEventListener("storage", checkAuth);

    return () => {
      window.removeEventListener("storage", checkAuth);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#llm", label: "LLM" },
    { href: "#data", label: "Data" },
    { href: "#resources", label: "Resources" },
    { href: "#features", label: "Blogs" },
    { href: "/careers", label: "Careers", isExternal: true },
  ];

  const handleScrollToSection = (id) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const handleDashClick = () => {
    navigate("/dashboard");
  };

  const handleSignOut = () => {
    setIsAuthenticated(false);
    localStorage.setItem("isAuthenticated", "false");
    navigate("/signin");
  };

  const handleLogoClick = () => {
    navigate("/");
  };

  const handleBookDemo = () => {
    const demoSection = document.querySelector("#ai-component-demo");
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <header
      className={`relative top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "shadow-lg" : ""
      }`}
      style={{
        background: scrolled
          ? "linear-gradient(to right, #ffffff, #f3e5f5)"
          : "linear-gradient(to right, #ffffff, #f3e5f5)",
      }}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div
            className="flex items-center space-x-2 group cursor-pointer"
            onClick={handleLogoClick}
          >
            <img
              src={logo}
              alt="Logo"
              className="w-8 h-8 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110"
            />
            <div className="text-xl font-bold text-[#3d9bcb] hover:text-[#0078a6] transition-colors duration-300">
              Convolabs
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            <ul className="flex space-x-10">
              {navItems.map((item) => (
                <li key={item.label}>
                  {item.isExternal ? (
                    <Link
                      to={item.href}
                      className="text-[#4f9fb8] text-lg font-semibold hover:text-[#0078a6] transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#0078a6] hover:after:w-full after:transition-all after:duration-300"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <a
                      href={item.href}
                      className="text-[#4f9fb8] text-lg font-semibold hover:text-[#0078a6] transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#0078a6] hover:after:w-full after:transition-all after:duration-300"
                      onClick={(e) => {
                        e.preventDefault();
                        handleScrollToSection(item.href);
                      }}
                    >
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated ? (
              <div className="flex space-x-4">
                <button
                  onClick={handleDashClick}
                  className="bg-[#0078a6] text-white text-sm font-semibold px-3 py-1.5 rounded-lg hover:bg-[#00628a] transition-colors duration-300 hover:scale-105 transform"
                >
                  Dash
                </button>
                <button
                  onClick={handleSignOut}
                  className="bg-[#0078a6] text-white text-sm font-semibold px-3 py-1.5 rounded-lg hover:bg-red-500 transition-colors duration-300 hover:scale-105 transform"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <Link
                to="/signin"
                className="bg-[#eaf6ff] border border-[#0078a6] text-[#0078a6] text-sm font-semibold px-3 py-1.5 rounded-lg hover:bg-[#0078a6] hover:text-white transition-colors duration-300 hover:scale-105 transform"
              >
                Sign In
              </Link>
            )}
            <button
              onClick={handleBookDemo}
              className="bg-[#0078a6] text-white text-sm font-semibold px-3 py-1.5 rounded-lg hover:bg-[#00628a] transition-colors duration-300 hover:scale-105 transform"
            >
              Book a Demo
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-[#4f9fb8] text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="pt-4">
            <ul className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <li key={item.label}>
                  {item.isExternal ? (
                    <Link
                      to={item.href}
                      className="text-[#4f9fb8] text-lg font-semibold hover:text-[#0078a6] transition-colors duration-300 block"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <a
                      href={item.href}
                      className="text-[#4f9fb8] text-lg font-semibold hover:text-[#0078a6] transition-colors duration-300 block"
                      onClick={(e) => {
                        e.preventDefault();
                        handleScrollToSection(item.href);
                      }}
                    >
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
              <li className="pt-2 flex flex-col space-y-2">
                {isAuthenticated ? (
                  <>
                    <button
                      onClick={() => {
                        handleDashClick();
                        setIsOpen(false);
                      }}
                      className="bg-[#0078a6] text-white text-sm font-semibold px-3 py-1.5 rounded-lg hover:bg-[#00628a] transition-colors duration-300 block text-center"
                    >
                      Dash
                    </button>
                    <button
                      onClick={() => {
                        handleSignOut();
                        setIsOpen(false);
                      }}
                      className="bg-red-500 text-white text-sm font-semibold px-3 py-1.5 rounded-lg hover:bg-red-600 transition-colors duration-300 block text-center"
                    >
                      Sign Out
                    </button>
                  </>
                ) : (
                  <Link
                    to="/signin"
                    className="bg-[#eaf6ff] border border-[#0078a6] text-[#0078a6] text-sm font-semibold px-3 py-1.5 rounded-lg hover:bg-[#0078a6] hover:text-white transition-colors duration-300 block text-center"
                    onClick={() => setIsOpen(false)}
                  >
                    Sign In
                  </Link>
                )}
                <button
                  onClick={() => {
                    handleBookDemo();
                    setIsOpen(false);
                  }}
                  className="bg-[#0078a6] text-white text-sm font-semibold px-3 py-1.5 rounded-lg hover:bg-[#00628a] transition-colors duration-300 block text-center"
                >
                  Book a Demo
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;