import React from "react";
import { FaProjectDiagram, FaRegComment, FaUsers } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="relative overflow-hidden min-h-screen bg-gradient-to-b from-white via-purple-50 to-purple-200">
      
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full opacity-30">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
          <div className="absolute -top-16 right-1/4 w-96 h-96 bg-indigo-300 rounded-full mix-blend-multiply filter blur-2xl animate-pulse animation-delay-1000"></div>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 pt-20 pb-32">
        
        <div className="text-center max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 animate-slide-up">
            <span className="block animate-fade-in-delay">All AI Agents</span>
            <span className="block mt-2 animate-fade-in-quick">need to run your Business</span>
          </h1>
          
          <p className="text-lg md:text-xl mb-10 text-gray-700 leading-relaxed animate-slide-up">
            <span className="block">Fox.AI taps into the full potential</span>
            <span className="block">of enterprise data to develop reliable Generative AI Solutions you can count on.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <button className="px-8 py-4 text-lg font-semibold rounded-xl bg-blue-600 text-white hover:bg-blue-700 transform hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-blue-300/50 animate-bounce">
              Get Started
            </button>
            <button className="px-8 py-4 text-lg font-semibold rounded-xl bg-purple-600 text-white hover:bg-purple-700 transform hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-purple-300/50 animate-bounce animation-delay-500">
              Talk to Fox
            </button>
          </div>

          <div className="mt-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 animate-fade-in">
              AI AI Everywhere, <br /> Not an AI that works!
            </h2>
            <p className="text-lg md:text-xl text-gray-700 mb-12 leading-relaxed animate-slide-up">
              Whether you're building custom large language models or using pre-built, Fox.AI <br /> 
              makes you the key maker; where data is the key.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-4xl mx-auto">
              <div className="p-8 rounded-2xl bg-gradient-to-br from-white/80 to-purple-100/80 backdrop-blur-sm hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-blue-300/50 border border-purple-200 animate-fade-in">
                <FaProjectDiagram className="text-4xl mb-4 mx-auto text-blue-600 animate-spin-slow" />
                <p className="text-2xl font-bold text-gray-800">500+</p>
                <p className="text-lg text-gray-600">Projects</p>
              </div>
              <div className="p-8 rounded-2xl bg-gradient-to-br from-white/80 to-purple-100/80 backdrop-blur-sm hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-purple-300/50 border border-purple-200 animate-fade-in animation-delay-500">
                <FaRegComment className="text-4xl mb-4 mx-auto text-purple-600 animate-spin-slow" />
                <p className="text-2xl font-bold text-gray-800">1,700,000+</p>
                <p className="text-lg text-gray-600">Annotations</p>
              </div>
              <div className="p-8 rounded-2xl bg-gradient-to-br from-white/80 to-purple-100/80 backdrop-blur-sm hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-indigo-300/50 border border-purple-200 animate-fade-in animation-delay-1000">
                <FaUsers className="text-4xl mb-4 mx-auto text-indigo-600 animate-spin-slow" />
                <p className="text-2xl font-bold text-gray-800">100+</p>
                <p className="text-lg text-gray-600">Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
