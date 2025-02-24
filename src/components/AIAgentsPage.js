import React, { useState } from 'react';
import { 
  FaBrain, 
  FaComments, 
  FaMicrochip,
  FaBolt, 
  FaStar, 
  FaRobot,
  FaArrowRight,
  FaUserCircle
} from 'react-icons/fa';

const AIAgentsPage = () => {
  const [activeAgent, setActiveAgent] = useState(null);

  const agents = [
    {
      id: 2,
      name: "Voice Agent",
      icon: <FaComments className="w-8 h-8 mb-2 text-purple-400" />,
      description: "Engages in natural, context-aware conversations with users",
      capabilities: ["Natural Language Processing", "Context Understanding", "Multi-lingual Support", "Sentiment Analysis"],
      useCase: "Ideal for customer service and support automation"
    },
    {
      id: 3,
      name: "Task Automation Agent",
      icon: <FaMicrochip className="w-8 h-8 mb-2 text-blue-400" />,
      description: "Customize to handle various robotics taska such as autonomous vehicle, drones and others",
      capabilities: ["Process Automation", "Workflow Optimization", "Integration Support", "Error Handling"],
      useCase: "Streamlines business operations and increases productivity"
    }
  ];

  const features = [
    {
      icon: <FaBolt className="w-6 h-6 text-amber-400" />,
      title: "Lightning Fast",
      description: "Our agents process requests in milliseconds, ensuring low latency response times."
    },
    {
      icon: <FaStar className="w-6 h-6 text-purple-400" />,
      title: "Highly Accurate",
      description: "Advanced algorithms ensure precise and reliable results every time."
    },
    {
      icon: <FaRobot className="w-6 h-6 text-blue-400" />,
      title: "Feels like Human",
      description: "AI powered phone calls sound remarkably human like, engaging in natural conversations and providing responses with a conversational flow."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-indigo-900 mb-6">
              Next-Generation AI Agents
            </h1>
            <p className="text-xl text-indigo-700 mb-8 max-w-2xl mx-auto">
              Empower your business with intelligent AI agents that transform the way you work. 
              Experience the future of automation and decision-making.
            </p>
            <button className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-8 py-3 rounded-lg font-medium hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 inline-flex items-center">
              Get Started <FaArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100"
            >
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-indigo-900">{feature.title}</h3>
              <p className="text-indigo-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Agents Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-indigo-900">Our AI Agents</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {agents.map((agent) => (
            <div
              key={agent.id}
              className={`bg-white/80 backdrop-blur-sm p-6 rounded-xl transition-all duration-300 cursor-pointer
                ${activeAgent === agent.id 
                  ? 'border-2 border-indigo-400 shadow-lg shadow-indigo-100 transform scale-105' 
                  : 'border border-purple-100 shadow-md hover:shadow-lg hover:border-indigo-300'}`}
              onClick={() => setActiveAgent(agent.id)}
            >
              <div className="flex flex-col items-center text-center mb-4">
                {agent.icon}
                <h3 className="text-xl font-semibold mb-2 text-indigo-900">{agent.name}</h3>
                <p className="text-indigo-600 mb-4">{agent.description}</p>
              </div>
              <div className="space-y-2">
                <div className="text-sm font-medium text-indigo-900">Capabilities:</div>
                <div className="flex flex-wrap gap-2">
                  {agent.capabilities.map((capability, index) => (
                    <span
                      key={index}
                      className="bg-gradient-to-r from-purple-50 to-indigo-50 text-indigo-700 text-sm px-3 py-1 rounded-full border border-purple-100"
                    >
                      {capability}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-gradient-to-br from-purple-50/50 to-indigo-50/50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-indigo-900">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((testimonial) => (
              <div key={testimonial} className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-purple-100">
                <div className="flex items-center mb-4">
                  <FaUserCircle className="w-12 h-12 text-indigo-400" />
                  <div className="ml-4">
                    <div className="font-medium text-indigo-900">John Doe</div>
                    <div className="text-sm text-indigo-600">Tech Lead</div>
                  </div>
                </div>
                <p className="text-indigo-600">
                  "The AI agents have revolutionized our workflow. Tasks that used to take hours are now completed in minutes with better accuracy."
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 text-indigo-100">Start using our AI agents today and experience the difference.</p>
          <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-medium hover:bg-indigo-50 transition-all duration-300 inline-flex items-center">
            Get Started Now <FaArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIAgentsPage;