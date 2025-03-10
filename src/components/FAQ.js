import React, { useState } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

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
        "Yes, ConvoLabs AI offers advanced, humanlike voices in multiple styles—professional, friendly, or conversational tones in male and female voices across languages like English, Spanish, and Mandarin—enhancing natural interactions for voice calls and robotics interfaces.",
    },
    {
      question: "Is my data secure with ConvoLabs AI?",
      answer:
        "We prioritize data security and are working toward GDPR and HIPAA compliance, ensuring your customer data is protected across all channels.",
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-blue-50 p-6">
      <div className="max-w-4xl w-full bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-bold text-purple-800 mb-8 text-center">
          Frequently Asked Questions
        </h1>
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="border border-purple-200 rounded-lg overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-6 bg-purple-50 hover:bg-purple-100 focus:outline-none"
              >
                <span className="text-lg font-semibold text-purple-800">
                  {faq.question}
                </span>
                <span className="text-purple-800">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>
              {activeIndex === index && (
                <div className="p-6 bg-white">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;