import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const navigate = useNavigate();

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What is ConvoLabs AI, and how can it help my business?",
      answer:
        "ConvoLabs AI provides AI chatbots and virtual assistants with 24/7 multichannel support (voice calls, emails, texts, payments, sales, marketing) and robotics integration, boosting efficiency and customer experience for SMEs in logistics, automotive, and retail.",
    },
    {
      question: "How does the feedback improvement process work for my business?",
      answer:
        "Our auto-improving feedback loop uses your input to refine AI performance over time, ensuring it evolves with your changing needs in customer support or robotics operations.",
    },
    {
      question: "Are the voices in ConvoLabs AI truly humanlike?",
      answer:
        "Yes, ConvoLabs AI offers advanced, humanlike voices in multiple styles—professional, friendly, or conversational tones in male and female voices across languages like English, Spanish, and Mandarin—enhancing natural interactions for voice calls and robotics interfaces.",
    },
    {
      question: "Is my data secure with ConvoLabs AI?",
      answer:
        "We prioritize data security and are working toward GDPR and HIPAA compliance, ensuring your customer data is protected across all channels.",
    },
  ];

  const handleGetStarted = () => {
    navigate('/enquiry');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="flex items-center justify-center p-6 min-h-[calc(100vh-256px)]">
        <div className="max-w-4xl w-full p-8">
          <h1 className="text-4xl font-bold text-purple-800 mb-8 text-center">
            Frequently Asked Questions
          </h1>
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div key={index} className="transition-all duration-300">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center p-6 focus:outline-none"
                >
                  <span
                    className={`text-lg font-semibold ${
                      activeIndex === index ? "text-pink-600" : "text-black"
                    }`}
                  >
                    {faq.question}
                  </span>
                  <span className={activeIndex === index ? "text-pink-600" : "text-black"}>
                    {activeIndex === index ? "−" : "+"}
                  </span>
                </button>
                {activeIndex === index && (
                  <div className="p-6">
                    <p className="text-black">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section - Full Width */}
      <div className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 text-indigo-100">Start using our AI agents today and experience the difference.</p>
          <button 
            onClick={handleGetStarted}
            className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-medium hover:bg-indigo-50 transition-all duration-300 inline-flex items-center"
          >
            Get Started Now <FaArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQ;