import React from "react";
import { FaTwitter, FaLinkedinIn, FaFacebook } from "react-icons/fa";
import { MdMail, MdPhone } from "react-icons/md";
import { GiAnimalSkull } from "react-icons/gi";

const AboutUs = () => {
  return (
    <section className="bg-[#EAF6FF] text-gray-800 py-16 relative">
      
      <div className="flex flex-col items-center mb-12">
        <GiAnimalSkull className="text-4xl text-blue-600 opacity-80 mb-2" />
        <h1 className="text-2xl font-bold text-blue-600">FOX AI</h1>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Sales:</h3>
              <a
                href="mailto:sales@fox.ai"
                className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
              >
                <MdMail className="w-5 h-5 mr-2" />
                sales@fox.ai
              </a>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Contact:</h3>
              <a
                href="tel:+919999999999"
                className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
              >
                <MdPhone className="w-5 h-5 mr-2" />
                +91 99999 99999
              </a>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Socials:</h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                >
                  <FaTwitter className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                >
                  <FaLinkedinIn className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                >
                  <FaFacebook className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">About FOX AI</h3>
            <p className="text-lg leading-relaxed">
              At FOX AI, we are committed to empowering businesses with
              cutting-edge AI solutions tailored to their unique needs. Our
              team specializes in data collection, labeling, and the
              development of custom AI models to help you achieve your goals
              with efficiency and precision.
            </p>
            <p className="text-lg leading-relaxed">
              Whether you're looking to streamline your operations, enhance
              decision-making, or create innovative solutions, FOX AI has the
              expertise to guide you every step of the way. We pride ourselves
              on delivering exceptional quality and unparalleled support.
            </p>
            <p className="text-lg leading-relaxed">
              Let's work together to shape the future of AI.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
