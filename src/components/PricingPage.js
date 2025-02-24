import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const PricingPage = () => {
  const plans = [
    {
      name: "Starter",
      price: "$9",
      period: "per month",
      features: [
        "Basic features included",
        "Up to 10 users",
        "2GB storage",
        "Email support",
        "Basic analytics"
      ],
      highlighted: false
    },
    {
      name: "Professional",
      price: "$29",
      period: "per month",
      features: [
        "All Starter features",
        "Up to 50 users",
        "10GB storage",
        "Priority support",
        "Advanced analytics",
        "Custom integrations"
      ],
      highlighted: true
    },
    {
      name: "Enterprise",
      price: "$99",
      period: "per month",
      features: [
        "All Professional features",
        "Unlimited users",
        "Unlimited storage",
        "24/7 phone support",
        "Custom solutions",
        "Dedicated account manager",
        "SLA guarantees"
      ],
      highlighted: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Choose Your Perfect Plan
          </h1>
          <p className="text-xl text-gray-600">
            Simple, transparent pricing that grows with your business
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-8 ${
                plan.highlighted
                  ? "bg-white shadow-xl scale-105 border-2 border-purple-200"
                  : "bg-white/80 shadow-lg"
              } transition-all hover:shadow-xl`}
            >
              <div className="text-center mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                  {plan.name}
                </h2>
                <div className="flex items-baseline justify-center">
                  <span className="text-5xl font-bold text-gray-900">
                    {plan.price}
                  </span>
                  <span className="text-gray-500 ml-2">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <FaCheckCircle
                      className="h-5 w-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0"
                    />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                  plan.highlighted
                    ? "bg-purple-600 text-white hover:bg-purple-700"
                    : "bg-purple-100 text-purple-600 hover:bg-purple-200"
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-600">
            Have questions? Contact our sales team at{" "}
            <a href="mailto:sales@example.com" className="text-purple-600 hover:text-purple-700">
              convolabsai@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;