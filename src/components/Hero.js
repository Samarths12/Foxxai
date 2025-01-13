import React from "react";
import { FaProjectDiagram, FaRegComment, FaUsers } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="bg-sky-100 py-20 text-center text-[#111827] relative overflow-hidden">
      {/* Animated SVG Background */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 flex items-center justify-center opacity-20 z-10">
        <div className="relative w-[800px] h-[800px]">
          <svg
            className="absolute inset-0 animate-[spin_30s_linear_infinite] z-10"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M50 5 L95 50 L50 95 L5 50 Z"
              stroke="url(#outerGradient)"
              strokeWidth="0.5"
              fill="none"
            />
            <defs>
              <linearGradient id="outerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#93C5FD" />
                <stop offset="100%" stopColor="#2563EB" />
              </linearGradient>
            </defs>
          </svg>

          <svg
            className="absolute inset-0 animate-[spin_20s_linear_infinite] z-10"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M50 15 L85 50 L50 85 L15 50 Z"
              stroke="url(#middleGradient)"
              strokeWidth="0.5"
              fill="none"
            />
            <defs>
              <linearGradient id="middleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#60A5FA" />
                <stop offset="100%" stopColor="#3B82F6" />
              </linearGradient>
            </defs>
          </svg>

          <svg
            className="absolute inset-0 animate-[spin_15s_linear_infinite] z-10"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M50 25 L75 50 L50 75 L25 50 Z"
              stroke="url(#innerGradient)"
              strokeWidth="0.5"
              fill="none"
            />
            <defs>
              <linearGradient id="innerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3B82F6" />
                <stop offset="100%" stopColor="#1D4ED8" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 relative z-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">
          <span className="text-[#111827] block animate-fade-in">Own your AI,</span>
          <span className="text-[#111827] block mt-2 animate-fade-in animate-delay-500ms">Own your Data</span>
        </h1>
        <p className="text-lg mb-6 animate-slide-up max-w-3xl mx-auto">
          <span className="block">Fox.AI taps into the full potential</span>
          <span className="block">of enterprise data to develop reliable Generative AI Solutions you can count on.</span>
        </p>
        <div className="flex gap-4 justify-center animate-fade-in animate-delay-1000ms">
          <button className="bg-[#0078a6] text-white px-8 py-3 rounded-xl hover:bg-[#00628a] transition-all duration-300 hover:scale-105">
            Get Started
          </button>
          <button className="bg-[#00628a] text-white px-8 py-3 rounded-xl hover:bg-[#00507a] transition-all duration-300 hover:scale-105">
            Talk to Fox
          </button>
        </div>
      </div>

      {/* Image Background and Stats */}
      <div className="relative z-20 mt-10 animate-fade-in animate-delay-1500ms">
        <div className="relative w-full h-[40rem] overflow-hidden mx-auto">
          {/* Image Background */}
          <img
            src="https://as1.ftcdn.net/v2/jpg/05/85/13/86/1000_F_585138628_gHYaMUVJobKI3mT1DvYACH99FZHedVpx.jpg"
            alt="AI in action"
            className="h-full w-[85%] object-cover absolute left-1/2 transform -translate-x-1/2 z-0"
          />
          
          <div className="absolute top-[28%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-20">
            <h2 className="text-white text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text animate-slide-up">
              AI AI Everywhere, <br /> Not an AI that works!
            </h2>
            <p className="text-lg mt-4 animate-fade-in animate-delay-2000ms">
              Whether you're building custom large language models or using pre-built, Fox.AI <br /> makes you the key maker; where data is the key.
            </p>
          </div>

          <div className="absolute top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white z-20 flex justify-center w-full px-4 space-x-20">
            <div className="text-center flex flex-col items-center animate-fade-in animate-delay-2500ms hover:scale-110 transition-transform duration-300">
              <FaProjectDiagram className="text-5xl mb-2" />
              <p className="text-3xl font-bold">500+ <br />Projects</p>
            </div>
            <div className="text-center flex flex-col items-center animate-fade-in animate-delay-3000ms hover:scale-110 transition-transform duration-300">
              <FaRegComment className="text-5xl mb-2" />
              <p className="text-3xl font-bold">1,700,000+<br /> Annotations</p>
            </div>
            <div className="text-center flex flex-col items-center animate-fade-in animate-delay-3500ms hover:scale-110 transition-transform duration-300">
              <FaUsers className="text-5xl mb-2" />
              <p className="text-3xl font-bold">100+<br /> Clients</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
