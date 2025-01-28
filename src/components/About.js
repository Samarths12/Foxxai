import React from "react";
import { FaTwitter, FaLinkedinIn, FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
import { MdMail, MdPhone, MdLocationOn, MdAccessTime } from "react-icons/md";
import logo from "./logo.jpg";

const AboutUs = () => {
  return (
    <section className="bg-gradient-to-b from-[#EAF6FF] to-white text-gray-800 py-32 relative">
      <div className="container mx-auto px-6 md:px-12">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-start">
          {/* Left Section: Logo, Company Name, and Contact Info */}
          <div className="md:col-span-4 space-y-10">
            {/* Logo and Company Name */}
            <div className="transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center space-x-4 mb-6">
                <img src={logo} alt="ConvolabsAI Logo" className="w-10 h-10 rounded-lg" />
                <h1 className="text-3xl  text-blue-600">ConvolabsAI</h1>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Pioneering the future of artificial intelligence with innovative solutions 
                that transform businesses and enhance human potential.
              </p>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <div className="flex items-center text-gray-700 hover:text-blue-600 transition-all group">
                <MdLocationOn className="w-6 h-6 mr-3 text-blue-500 group-hover:scale-110 transform transition-transform" />
                <p className="text-base">123 AI Innovation Drive,<br />Tech City, India</p>
              </div>
              <div className="flex items-center text-gray-700 hover:text-blue-600 transition-all group">
                <MdAccessTime className="w-6 h-6 mr-3 text-blue-500 group-hover:scale-110 transform transition-transform" />
                <p className="text-base">Mon - Fri: 9:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>

          {/* Spacer */}
          <div className="hidden md:block md:col-span-1"></div>

          {/* Right Section: Three Columns */}
          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-12">
            {/* Column 1: Company */}
            <div className="space-y-8">
              <h3 className="text-xl font-semibold text-gray-900 border-b-2 border-blue-500 pb-2">
                Company
              </h3>
              <ul className="space-y-4">
                {['Careers', 'About Us', 'Blog', 'Partners', 'Developers'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors hover:translate-x-2 transform inline-block">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Legal */}
            <div className="space-y-8">
              <h3 className="text-xl font-semibold text-gray-900 border-b-2 border-blue-500 pb-2">
                Legal
              </h3>
              <ul className="space-y-4">
                {['Terms', 'Privacy', 'Security', 'Compliance', 'Support'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors hover:translate-x-2 transform inline-block">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Contact and Socials */}
            <div className="space-y-8">
              <h3 className="text-xl font-semibold text-gray-900 border-b-2 border-blue-500 pb-2">
                Connect
              </h3>
              <ul className="space-y-6">
                <li>
                  <a href="mailto:sales@convolabs.ai" 
                     className="flex items-center text-gray-700 hover:text-blue-600 transition-all group">
                    <MdMail className="w-6 h-6 mr-3 text-blue-500 group-hover:scale-110 transform transition-transform" />
                    <span>sales@convolabs.ai</span>
                  </a>
                </li>
                <li>
                  <a href="tel:+919999999999" 
                     className="flex items-center text-gray-700 hover:text-blue-600 transition-all group">
                    <MdPhone className="w-6 h-6 mr-3 text-blue-500 group-hover:scale-110 transform transition-transform" />
                    <span>+91 99999 99999</span>
                  </a>
                </li>
                <li>
                  <div className="flex items-center space-x-4">
                    {[FaTwitter, FaLinkedinIn, FaFacebook, FaGithub, FaInstagram].map((Icon, index) => (
                      <a key={index} 
                         href="#" 
                         className="text-gray-700 hover:text-blue-600 transition-all hover:scale-110 transform">
                        <Icon className="w-6 h-6" />
                      </a>
                    ))}
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-100 rounded-full filter blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-100 rounded-full filter blur-3xl opacity-30 translate-x-1/2 translate-y-1/2"></div>
      </div>
    </section>
  );
};

export default AboutUs;