import React from 'react';
import { FaTwitter, FaLinkedinIn, FaFacebook } from 'react-icons/fa';
import { MdMail, MdPhone } from 'react-icons/md';
import { GiAnimalSkull } from "react-icons/gi"; 

const AboutUs = () => {
  return (
    <section className="bg-black text-white py-16 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Sales:</h3>
              <a href="mailto:sales@fox.ai" className="flex items-center text-gray-400 hover:text-blue-400 transition-colors">
                <MdMail className="w-5 h-5 mr-2" />
                sales@fox.ai
              </a>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Contact:</h3>
              <a href="tel:+919999999999" className="flex items-center text-gray-400 hover:text-blue-400 transition-colors">
                <MdPhone className="w-5 h-5 mr-2" />
                +91 99999 99999
              </a>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Socials:</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <FaTwitter className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <FaLinkedinIn className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <FaFacebook className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Pages:</h3>
            <nav className="space-y-2">
              <a href="#" className="block text-gray-400 hover:text-blue-400 transition-colors">Home</a>
              <a href="#" className="block text-gray-400 hover:text-blue-400 transition-colors">Blog</a>
              <a href="#" className="block text-gray-400 hover:text-blue-400 transition-colors">Consulting</a>
              <a href="#" className="block text-gray-400 hover:text-blue-400 transition-colors">Services</a>
              <a href="#" className="block text-gray-400 hover:text-blue-400 transition-colors">About</a>
              <a href="#" className="block text-gray-400 hover:text-blue-400 transition-colors">Contact</a>
              <a href="#" className="block text-gray-400 hover:text-blue-400 transition-colors">Privacy Policy</a>
            </nav>
          </div>
        </div>
      </div>

      
      <div className="absolute top-1/2 right-20 transform -translate-y-1/2 flex items-center space-x-2 text-blue-400 opacity-70">
      <GiAnimalSkull  className="text-4xl" /> 
        <span className="text-2xl font-bold">FOX</span>
      </div>
    </section>
  );
};

export default AboutUs;
