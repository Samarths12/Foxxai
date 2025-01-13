import React, { useEffect, useRef } from "react";

const Info = () => {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2
    };

    const handleIntersect = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-section');
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    if (section1Ref.current) observer.observe(section1Ref.current);
    if (section2Ref.current) observer.observe(section2Ref.current);
    if (section3Ref.current) observer.observe(section3Ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-sky-50 to-blue-100 text-gray-800">
      {/* First Section - Data Needs Assessment */}
      <div ref={section1Ref} className="container mx-auto px-4 mb-20 opacity-0 not-animated">
        <div className="text-center mb-10">
          <h2 className="text-5xl font-bold text-blue-700 mb-4">
            Client Data Journey
          </h2>
          <p className="text-lg text-gray-600">
            Our comprehensive approach to understanding and fulfilling your data needs
          </p>
        </div>

        <div className="flex flex-col items-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
            {/* Step 1 */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="h-16 w-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4 mx-auto">
                1
              </div>
              <h3 className="text-xl font-semibold text-blue-700 mb-3 text-center">
                Requirements Analysis
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Business needs assessment
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Data scope definition
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Resource planning
                </li>
              </ul>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="h-16 w-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4 mx-auto">
                2
              </div>
              <h3 className="text-xl font-semibold text-blue-700 mb-3 text-center">
                Expert Consultation
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Industry specialist assignment
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Task definition
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Team selection
                </li>
              </ul>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="h-16 w-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4 mx-auto">
                3
              </div>
              <h3 className="text-xl font-semibold text-blue-700 mb-3 text-center">
                Implementation Plan
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Timeline creation
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Resource allocation
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Quality metrics setup
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Second Section - Data Annotation Process */}
      <div ref={section2Ref} className="container mx-auto px-4 mb-20 opacity-0 not-animated">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-blue-700 mb-8 text-center">
            Interactive Data Annotation Workflow
          </h2>
          
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="w-full md:w-1/3 bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-700 mb-3">Project Setup</h3>
                <p className="text-gray-600">Custom project creation using our no-code solution</p>
              </div>
              <div className="hidden md:block text-blue-500 text-4xl">→</div>
              <div className="w-full md:w-1/3 bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-700 mb-3">Data Processing</h3>
                <p className="text-gray-600">Automated data preprocessing and organization</p>
              </div>
              <div className="hidden md:block text-blue-500 text-4xl">→</div>
              <div className="w-full md:w-1/3 bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-700 mb-3">Quality Assurance</h3>
                <p className="text-gray-600">Multi-level validation and verification process</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Third Section - AI Quality Check */}
      <div ref={section3Ref} className="container mx-auto px-4 mb-20 opacity-0 not-animated">
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl shadow-xl p-8 max-w-6xl mx-auto text-white">
          <h2 className="text-4xl font-bold mb-8 text-center">
            AI-Assisted Quality Check System
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Initial Scan</h3>
              <p className="text-blue-100">AI performs preliminary data analysis</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Region Detection</h3>
              <p className="text-blue-100">Automated annotation region identification</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Smart Assistance</h3>
              <p className="text-blue-100">AI suggestions and auto-corrections</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Final Verification</h3>
              <p className="text-blue-100">Human expert review and approval</p>
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
          .not-animated {
            transform: translateY(50px);
            transition: all 0.8s ease-out;
          }

          .animate-section {
            opacity: 1 !important;
            transform: translateY(0) !important;
          }

          @media (min-width: 768px) {
            .not-animated > div:first-child {
              transform: translateX(-50px);
            }
            .not-animated > div:last-child {
              transform: translateX(50px);
            }
            .animate-section > div {
              transform: translateX(0) !important;
            }
          }
        `}
      </style>
    </section>
  );
};

export default Info;