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
  FaHeadset,
} from "react-icons/fa";
import { db, collection, addDoc } from "../firebase.js";

const EnquiryPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    interests: [],
    message: "",
    budget: "25000-50000",
    requirements: [],
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [submitError, setSubmitError] = useState(null);

  const interests = [
    { id: "customer-service", label: "AI Customer Service", icon: FaHeadset },
    { id: "data-analytics", label: "Data Analytics", icon: FaChartLine },
    { id: "custom-ai", label: "Custom AI Solutions", icon: FaBrain },
    { id: "automation", label: "Workflow Automation", icon: FaCode },
    { id: "ai-chatbots", label: "AI Chatbots", icon: FaRobot },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setFormErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      requirements: checked
        ? [...prev.requirements, value]
        : prev.requirements.filter((item) => item !== value),
    }));
  };

  const handleInterestToggle = (interestId) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interestId)
        ? prev.interests.filter((id) => id !== interestId)
        : [...prev.interests, interestId],
    }));
    setFormErrors((prev) => ({ ...prev, interests: undefined }));
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.email.trim()) errors.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(formData.email)) errors.email = "Email is invalid";
    if (!formData.company.trim()) errors.company = "Company name is required";
    if (formData.interests.length === 0) errors.interests = "Select at least one interest";
    if (!formData.message.trim()) errors.message = "Tell us about your project";

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      console.log("Validation failed:", formErrors);
      return;
    }
  
    setSubmitting(true);
    setSubmitError(null);
  
    try {
      const enquiryData = {
        ...formData,
        timestamp: new Date().toISOString(),
      };

      // Add more detailed logging
    console.log("Attempting to submit data to Firestore:", enquiryData);
    
    // Make sure the collection exists first
    const enquiriesCollection = collection(db, "enquiries");
    
    // Add the document with explicit error handling
    const docRef = await addDoc(enquiriesCollection, enquiryData);
    console.log("Document successfully written with ID:", docRef.id);

    setSubmitting(false);
    setSubmitted(true);
    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      interests: [],
      message: "",
      budget: "25000-50000",
      requirements: [],
    });
  } catch (error) {
    console.error("Firestore submission error:", {
      code: error.code,
      message: error.message,
      stack: error.stack,
      details: error.toString()
    });
    setSubmitting(false);
    setSubmitError(`Failed to submit enquiry: ${error.message}. Please try again.`);
  }
};

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-purple-50 to-blue-50 py-6 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="fixed inset-0 pointer-events-none">
        <div className="w-full h-full opacity-20">
          <div className="absolute top-[-10%] left-[-10%] w-64 h-64 md:w-96 md:h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
          <div className="absolute top-[-5%] right-[-5%] w-64 h-64 md:w-96 md:h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
          <div className="absolute bottom-[-15%] left-[20%] w-64 h-64 md:w-96 md:h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
        </div>
      </div>

      <div className="relative max-w-5xl mx-auto">
        <button
          onClick={() => navigate("/")}
          className="flex items-center text-blue-600 hover:text-blue-800 transition-colors mb-6 sm:mb-8"
        >
          <FaArrowLeft className="mr-2" /> Back to Home
        </button>

        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">
            Let's Build Your <span className="text-blue-600">AI Future</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
            Share your vision, and we'll craft tailored AI solutions to elevate your business.
          </p>
        </div>

        <div className="w-full max-w-3xl mx-auto">
          {submitted ? (
            <div className="bg-white/95 rounded-2xl shadow-2xl p-6 sm:p-8 text-center animate-fade-in-up">
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <FaCheck className="text-green-500 text-2xl" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">Enquiry Submitted!</h2>
              <p className="text-gray-600 mb-6 text-sm sm:text-base">
                We've received your request. Our team will reach out soon to discuss your AI journey.
              </p>
              <button
                onClick={() => navigate("/")}
                className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg shadow-md hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Back to Home
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white/95 rounded-2xl shadow-2xl p-6 sm:p-8 backdrop-blur-sm">
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-1.5 text-sm sm:text-base" htmlFor="name">
                      Full Name
                    </label>
                    <div className="relative">
                      <FaUser className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        disabled={submitting}
                        className={`w-full pl-10 pr-3 py-2.5 border ${
                          formErrors.name ? "border-red-500" : "border-gray-300"
                        } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black placeholder-gray-500 text-sm sm:text-base`}
                        placeholder="Your name"
                      />
                    </div>
                    {formErrors.name && <p className="mt-1 text-red-500 text-xs sm:text-sm">{formErrors.name}</p>}
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-1.5 text-sm sm:text-base" htmlFor="email">
                      Email Address
                    </label>
                    <div className="relative">
                      <FaEnvelope className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        disabled={submitting}
                        className={`w-full pl-10 pr-3 py-2.5 border ${
                          formErrors.email ? "border-red-500" : "border-gray-300"
                        } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black placeholder-gray-500 text-sm sm:text-base`}
                        placeholder="Your email"
                      />
                    </div>
                    {formErrors.email && <p className="mt-1 text-red-500 text-xs sm:text-sm">{formErrors.email}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-1.5 text-sm sm:text-base" htmlFor="company">
                      Company Name
                    </label>
                    <div className="relative">
                      <FaBuilding className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        disabled={submitting}
                        className={`w-full pl-10 pr-3 py-2.5 border ${
                          formErrors.company ? "border-red-500" : "border-gray-300"
                        } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black placeholder-gray-500 text-sm sm:text-base`}
                        placeholder="Your company"
                      />
                    </div>
                    {formErrors.company && (
                      <p className="mt-1 text-red-500 text-xs sm:text-sm">{formErrors.company}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-1.5 text-sm sm:text-base" htmlFor="phone">
                      Phone <span className="text-gray-400 text-xs sm:text-sm">(Optional)</span>
                    </label>
                    <div className="relative">
                      <FaPhone className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        disabled={submitting}
                        className="w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black placeholder-gray-500 text-sm sm:text-base"
                        placeholder="Your phone"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">
                    Estimated Budget (Rs)
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4">
                    {["25,000-50,000", "50,000-1,00,000", "> 1,00,000"].map((budget, index) => (
                      <label key={index} className="flex items-center cursor-pointer">
                        <input
                          type="radio"
                          name="budget"
                          value={budget.replace(/\s/g, "")}
                          checked={formData.budget === budget.replace(/\s/g, "")}
                          onChange={handleChange}
                          disabled={submitting}
                          className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="ml-2 text-gray-700 text-sm sm:text-base">{budget}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">
                    Areas of Interest
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {interests.map((interest) => (
                      <div
                        key={interest.id}
                        className={`relative cursor-pointer rounded-lg border p-3 sm:p-4 text-center transition-all ${
                          formData.interests.includes(interest.id)
                            ? "border-blue-500 bg-blue-50 text-blue-700"
                            : "border-gray-200 hover:border-blue-300 hover:bg-blue-50"
                        } ${submitting ? "pointer-events-none opacity-60" : ""}`}
                        onClick={() => !submitting && handleInterestToggle(interest.id)}
                      >
                        <interest.icon className="mx-auto text-xl sm:text-2xl mb-2" />
                        <p className="text-xs sm:text-sm font-medium text-black">{interest.label}</p>
                        {formData.interests.includes(interest.id) && (
                          <FaCheck className="absolute top-2 right-2 text-blue-500" />
                        )}
                      </div>
                    ))}
                  </div>
                  {formErrors.interests && (
                    <p className="mt-2 text-red-500 text-xs sm:text-sm">{formErrors.interests}</p>
                  )}
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">
                    What do you need?
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {[
                      "Proof of concept",
                      "Full solution implementation",
                      "Integration with existing systems",
                      "Consultation services",
                      "Training for team",
                      "Ongoing support",
                    ].map((req, index) => (
                      <label key={index} className="flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          name="requirements"
                          value={req}
                          checked={formData.requirements.includes(req)}
                          onChange={handleCheckboxChange}
                          disabled={submitting}
                          className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="ml-2 text-gray-700 text-sm sm:text-base">{req}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-1.5 text-sm sm:text-base" htmlFor="message">
                    Project Details
                  </label>
                  <div className="relative">
                    <FaLightbulb className="absolute top-3 left-3 text-gray-400" />
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      disabled={submitting}
                      rows="4"
                      className={`w-full pl-10 pr-3 py-2.5 border ${
                        formErrors.message ? "border-red-500" : "border-gray-300"
                      } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black placeholder-gray-500 text-sm sm:text-base`}
                      placeholder="Tell us about your AI needs"
                    />
                  </div>
                  {formErrors.message && (
                    <p className="mt-1 text-red-500 text-xs sm:text-sm">{formErrors.message}</p>
                  )}
                </div>
              </div>

              {submitError && (
                <div className="mt-4 text-center">
                  <p className="text-red-500 text-sm">{submitError}</p>
                  <button
                    onClick={handleSubmit}
                    className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
                  >
                    Retry
                  </button>
                </div>
              )}

              <div className="mt-6 sm:mt-8 text-center">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg shadow-md hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {submitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin mr-2 h-5 w-5 text-white" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Submitting...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center">
                      <FaPaperPlane className="mr-2" /> Send Enquiry
                    </span>
                  )}
                </button>
              </div>

              <p className="mt-4 text-center text-gray-500 text-xs sm:text-sm">
                By submitting, you agree to our privacy policy and terms.
              </p>
            </form>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% { transform: scale(1) translate(0, 0); }
          33% { transform: scale(1.05) translate(20px, -30px); }
          66% { transform: scale(0.95) translate(-15px, 15px); }
          100% { transform: scale(1) translate(0, 0); }
        }

        .animate-blob {
          animation: blob 8s infinite;
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
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 640px) {
          .grid-cols-3 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .grid-cols-2 { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
};

export default EnquiryPage;