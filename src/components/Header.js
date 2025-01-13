import React, { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom"; 

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
    
    window.addEventListener('storage', checkAuth);
    
    return () => {
      window.removeEventListener('storage', checkAuth);
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
    { href: "#aipool", label: "AIPool" },
    { href: "#ainama", label: "AINama" },
  ];

  const handleDashClick = () => {
    navigate('/dashboard'); 
  };

  const handleSignOut = () => {
    setIsAuthenticated(false);
    localStorage.setItem("isAuthenticated", "false");
    navigate("/");
  };

  return (
    <header
      className={`relative top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-[#eaf6ff]/90 backdrop-blur-sm shadow-lg" : "bg-[#eaf6ff]"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2 group">
            <img
              src="https://img.freepik.com/premium-photo/visual-fox_931878-695311.jpg"
              alt="Logo"
              className="w-8 h-8 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110"
            />
            <div className="text-3xl font-bold text-[#3d9bcb] hover:text-[#0078a6] transition-colors duration-300">
              Fox
            </div>
          </div>

          <nav className="hidden md:block">
            <ul className="flex space-x-10">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-[#4f9fb8] text-lg font-semibold hover:text-[#0078a6] transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#0078a6] hover:after:w-full after:transition-all after:duration-300"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden md:flex space-x-4">
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
                  className="bg-[#0078a6] text-white text-sm font-semibold px-3 py-1.5 rounded-lg hover:bg-[#00628a] transition-colors duration-300 hover:scale-105 transform"
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
            <a
              href="#book-demo"
              className="bg-[#0078a6] text-white text-sm font-semibold px-3 py-1.5 rounded-lg hover:bg-[#00628a] transition-colors duration-300 hover:scale-105 transform"
            >
              Book a Demo
            </a>
          </div>

          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>

        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-96 opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-4 pointer-events-none"
          }`}
        >
          <nav className="pt-4">
            <ul className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-[#4f9fb8] text-lg font-semibold hover:text-[#0078a6] transition-colors duration-300 block"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
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
                <a
                  href="#book-demo"
                  className="bg-[#0078a6] text-white text-sm font-semibold px-3 py-1.5 rounded-lg hover:bg-[#00628a] transition-colors duration-300 block text-center"
                  onClick={() => setIsOpen(false)}
                >
                  Book a Demo
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;