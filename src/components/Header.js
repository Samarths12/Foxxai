import React, { useState, useEffect } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#llm', label: 'LLM' },
    { href: '#data', label: 'Data' },
    { href: '#resources', label: 'Resources' },
    { href: '#aipool', label: 'AIPool' },
    { href: '#ainama', label: 'AINama' },
  ];

  return (
    <header className={`relative top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-black/90 backdrop-blur-sm shadow-lg' : 'bg-black'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          
          <div className="flex items-center space-x-2 group">
            <img 
              src="https://lh3.googleusercontent.com/9PjELqRSeEMi34Kb_lM921SMfS0VepXV2A-DwXJaEoJuXDoLi4mEnjXlrqcJwdOFuX1KHgFHUh6-t0WyyQVHjAPQtts=s1280-w1280-h800"
              alt="Logo" 
              className="w-8 h-8 transition-transform duration-300 group-hover:rotate-12" 
            />
            <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 transition-colors duration-300">
              Fox
            </div>
          </div>

          
          <nav className="hidden md:block">
            <ul className="flex space-x-10">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a 
                    href={item.href}
                    className="text-gray-300 text-lg font-semibold hover:text-blue-500 transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-500 hover:after:w-full after:transition-all after:duration-300"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          
          <div className="hidden md:block">
            <a 
              href="#contact" 
              className="bg-blue-500 text-white text-lg font-semibold px-4 py-2 rounded-xl hover:bg-blue-600 transition-colors duration-300 hover:scale-105 transform"
            >
              Contact Us
            </a>
          </div>

          
          <button 
            className="md:hidden text-white text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>

        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen 
            ? 'max-h-96 opacity-100 translate-y-0' 
            : 'max-h-0 opacity-0 -translate-y-4 pointer-events-none'
        }`}>
          <nav className="pt-4">
            <ul className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a 
                    href={item.href}
                    className="text-gray-300 text-lg font-semibold hover:text-blue-500 transition-colors duration-300 block"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a 
                  href="#contact"
                  className="bg-blue-500 text-white text-lg font-semibold px-4 py-2 rounded-xl hover:bg-blue-600 transition-colors duration-300 block text-center"
                  onClick={() => setIsOpen(false)}
                >
                  Contact Us
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