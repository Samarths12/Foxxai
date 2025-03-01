import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  FaUser, 
  FaEnvelope, 
  FaBuilding, 
  FaPhone, 
  FaLightbulb, 
  FaPaperPlane, 
  FaArrowLeft, 
  FaCheck,
  FaBrain,
  FaRobot,
  FaChartLine,
  FaCode,
  FaHeadset
} from "react-icons/fa";

const EnquiryPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    interest: "",
    message: "",
    budget: "10000-50000",
    requirements: []
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const interests = [
    { id: "customer-service", label: "AI Customer Service", icon: FaHeadset },
    { id: "data-analytics", label: "Data Analytics", icon: FaChartLine },
    { id: "custom-ai", label: "Custom AI Solutions", icon: FaBrain },
    { id: "automation", label: "Workflow Automation", icon: FaCode },
    { id: "ai-chatbots", label: "AI Chatbots", icon: FaRobot }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData(prev => {
      if (checked) {
        return { ...prev, requirements: [...prev.requirements, value] };
      } else {
        return { 
          ...prev, 
          requirements: prev.requirements.filter(item => item !== value) 
        };
      }
    });
  };

  const validateForm = () => {
    const errors = {};
    
    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.email = "Email is invalid";
    }
    if (!formData.company.trim()) errors.company = "Company name is required";
    if (!formData.interest) errors.interest = "Please select an area of interest";
    if (!formData.message.trim()) errors.message = "Please tell us about your project";
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setSubmitting(true);
    
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          name: "",
          email: "",
          company: "",
          phone: "",
          interest: "",
          message: "",
          budget: "10000-50000",
          requirements: []
        });
      }, 5000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-purple-50 to-purple-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-full h-full opacity-30">
          <div className="absolute top-0 -left-4 w-48 md:w-72 h-48 md:h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-0 -right-4 w-48 md:w-72 h-48 md:h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-48 md:w-72 h-48 md:h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>
      </div>
      
      <div className="relative max-w-4xl mx-auto">
        <button 
          onClick={() => navigate("/")} 
          className="flex items-center text-blue-600 hover:text-blue-800 transition-colors mb-6"
        >
          <FaArrowLeft className="mr-2" /> Back to Home
        </button>
        
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            Let's Discuss Your <span className="text-blue-600">AI Solution</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tell us about your business needs and our team will help you discover the perfect AI solutions to transform your operations.
          </p>
        </div>
        
        {submitted ? (
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center max-w-xl mx-auto transform transition-all duration-500 animate-fade-in-up">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaCheck className="text-green-500 text-2xl" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Enquiry Received!</h2>
            <p className="text-gray-600 mb-6">
              Thank you for your interest! Our team will review your requirements and contact you shortly.
            </p>
            <button 
              onClick={() => navigate("/")}
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Return to Homepage
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-6 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name Field */}
              <div className="col-span-1">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
                  Full Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaUser className="text-gray-400 w-5 h-5" />
                  </div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full pl-12 pr-3 py-3 border ${formErrors.name ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-black placeholder-gray-500`}
                    placeholder="Enter your name"
                  />
                </div>
                {formErrors.name && <p className="mt-1 text-red-500 text-sm">{formErrors.name}</p>}
              </div>
              
              {/* Email Field */}
              <div className="col-span-1">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaEnvelope className="text-gray-400 w-5 h-5" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full pl-12 pr-3 py-3 border ${formErrors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-black placeholder-gray-500`}
                    placeholder="Enter your email"
                  />
                </div>
                {formErrors.email && <p className="mt-1 text-red-500 text-sm">{formErrors.email}</p>}
              </div>
              
              {/* Company Field */}
              <div className="col-span-1">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="company">
                  Company Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaBuilding className="text-gray-400 w-5 h-5" />
                  </div>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className={`w-full pl-12 pr-3 py-3 border ${formErrors.company ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-black placeholder-gray-500`}
                    placeholder="Enter company name"
                  />
                </div>
                {formErrors.company && <p className="mt-1 text-red-500 text-sm">{formErrors.company}</p>}
              </div>
              
              {/* Phone Field */}
              <div className="col-span-1">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="phone">
                  Phone Number <span className="text-gray-400 text-sm">(Optional)</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaPhone className="text-gray-400 w-5 h-5" />
                  </div>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full pl-12 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-black placeholder-gray-500"
                    placeholder="Enter phone number"
                  />
                </div>
              </div>
              
              {/* Budget Range */}
              <div className="col-span-2">
                <label className="block text-gray-700 font-medium mb-2">
                  Estimated Budget (Rs)
                </label>
                <div className="grid grid-cols-3 gap-4">
                  {["25,000-50,000", "50,000-1,00,000", "> 1,00,000"].map((budget, index) => (
                    <div key={index} className="flex items-center">
                      <input
                        type="radio"
                        id={`budget-${index}`}
                        name="budget"
                        value={budget.replace(/\s/g, '')}
                        checked={formData.budget === budget.replace(/\s/g, '')}
                        onChange={handleChange}
                        className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                      />
                      <label htmlFor={`budget-${index}`} className="ml-2 text-gray-700">
                        {budget}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Interest Area */}
              <div className="col-span-2">
                <label className="block text-gray-700 font-medium mb-3">
                  Area of Interest
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-2">
                  {interests.map((interest) => (
                    <div
                      key={interest.id}
                      className={`
                        cursor-pointer rounded-lg border p-4 text-center transition-all min-h-[100px] flex flex-col justify-center
                        ${formData.interest === interest.id
                          ? 'border-blue-500 bg-blue-50 text-blue-700'
                          : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50/50'}
                      `}
                      onClick={() => setFormData({...formData, interest: interest.id})}
                    >
                      <interest.icon className="mx-auto text-2xl mb-2" />
                      <p className="font-medium text-sm sm:text-base break-words text-black">{interest.label}</p>
                    </div>
                  ))}
                </div>
                {formErrors.interest && (
                  <p className="mt-2 text-red-500 text-sm">{formErrors.interest}</p>
                )}
              </div>
              
              {/* Requirements checkboxes */}
              <div className="col-span-2">
                <label className="block text-gray-700 font-medium mb-3">
                  What are you looking for? (Check all that apply)
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {["Proof of concept", "Full solution implementation", "Integration with existing systems", "Consultation services", "Training for team", "Ongoing support"].map((req, index) => (
                    <div key={index} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`req-${index}`}
                        name="requirements"
                        value={req}
                        checked={formData.requirements.includes(req)}
                        onChange={handleCheckboxChange}
                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <label htmlFor={`req-${index}`} className="ml-2 text-gray-700">
                        {req}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Message Field */}
              <div className="col-span-2">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="message">
                  Tell us about your project
                </label>
                <div className="relative">
                  <div className="absolute top-3 left-3 pointer-events-none">
                    <FaLightbulb className="text-gray-400 w-5 h-5" />
                  </div>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className={`w-full pl-12 pr-3 py-3 border ${formErrors.message ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-black placeholder-gray-500`}
                    placeholder="Describe your business needs and what you're looking to achieve with AI"
                  ></textarea>
                </div>
                {formErrors.message && <p className="mt-1 text-red-500 text-sm">{formErrors.message}</p>}
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <button
                type="submit"
                disabled={submitting}
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
              >
                {submitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </span>
                ) : (
                  <span className="flex items-center justify-center">
                    <FaPaperPlane className="mr-2" /> Submit Enquiry
                  </span>
                )}
              </button>
            </div>
            
            <p className="mt-6 text-center text-gray-500 text-sm">
              By submitting this form, you agree to our privacy policy and terms of service.
            </p>
          </form>
        )}
      </div>
      
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        
        @keyframes blob {
          0% { transform: scale(1) translate(0, 0); }
          33% { transform: scale(1.1) translate(30px, -50px); }
          66% { transform: scale(0.9) translate(-20px, 20px); }
          100% { transform: scale(1) translate(0, 0); }
        }
        
        .animate-blob {
          animation: blob 7s infinite alternate;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.5s ease-out;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default EnquiryPage;