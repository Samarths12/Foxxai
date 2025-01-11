import React from "react";
import { FaProjectDiagram, FaRegComment, FaUsers } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="bg-black py-20 text-center text-white relative overflow-hidden">
      
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

      
      <div className="container mx-auto px-4 relative z-20">
        <h1 className="text-6xl font-bold mb-6 animate-[slideDown_1s_ease-out] bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">
          <span className="block animate-[fadeIn_1s_ease-out]">Own your AI,</span>
          <span className="block mt-2 animate-[fadeIn_1.2s_ease-out]">Own your Data</span>
        </h1>
        <p className="text-lg mb-6 animate-[slideUp_1s_ease-out] max-w-3xl mx-auto">
          <span className="block">Fox.AI taps into the full potential</span>
          <span className="block">of enterprise data to develop reliable Generative AI Solutions you can count on.</span>
        </p>
        <div className="flex gap-4 justify-center animate-[fadeIn_1.5s_ease-out]">
          <button className="bg-gray-600 text-white px-8 py-3 rounded-xl hover:bg-gray-700 transition-all duration-300 hover:scale-105">
            Get Started
          </button>
          <button className="bg-blue-500 text-white px-8 py-3 rounded-xl hover:bg-blue-600 transition-all duration-300 hover:scale-105">
            Talk to Fox
          </button>
        </div>
      </div>

      
      <div className="relative z-20 mt-10 animate-[fadeIn_2s_ease-out]">
        <div className="relative w-[90%] h-[40rem] overflow-hidden mx-auto">
          <img
            src="https://as1.ftcdn.net/v2/jpg/05/85/13/86/1000_F_585138628_gHYaMUVJobKI3mT1DvYACH99FZHedVpx.jpg"
            alt="AI in action"
            className="h-full w-full object-cover opacity-50"
          />
          
          
          <div className="absolute top-[28%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-20">
            <h2 className="text-6xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text animate-[slideUp_1.5s_ease-out]">
              AI AI Everywhere, <br /> Not an AI that works!
            </h2>
            <p className="text-lg mt-4 animate-[fadeIn_2s_ease-out]">
              Whether you're building custom large language models or using pre-built, Fox.AI <br /> makes you the key maker; where data is the key.
            </p>
          </div>

          
          <div className="absolute top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white z-20 flex justify-center w-full px-4 space-x-20">
            <div className="text-center flex flex-col items-center animate-[slideUp_1.8s_ease-out] hover:scale-110 transition-transform duration-300">
              <FaProjectDiagram className="text-5xl mb-2" />
              <p className="text-4xl font-bold">500+ <br />Projects</p>
            </div>
            <div className="text-center flex flex-col items-center animate-[slideUp_2s_ease-out] hover:scale-110 transition-transform duration-300">
              <FaRegComment className="text-5xl mb-2" />
              <p className="text-4xl font-bold">1,700,000+<br /> Annotations</p>
            </div>
            <div className="text-center flex flex-col items-center animate-[slideUp_2.2s_ease-out] hover:scale-110 transition-transform duration-300">
              <FaUsers className="text-5xl mb-2" />
              <p className="text-4xl font-bold">100+<br /> Clients</p>
            </div>
          </div>
        </div>
      </div>
       
       <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-black to-transparent"></div>


<style>
  {`
    @keyframes slideDown {
      from {
        opacity: 0;
        transform: translateY(-100px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes slideUp {
      from {
        opacity: 0;
        transform: translateY(100px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  `}
</style>
</section>
);
};

export default Hero;




