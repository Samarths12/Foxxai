import React, { useState } from 'react';
import { 
  FaBook, 
  FaRocket, 
  FaCode, 
  FaLightbulb,
  FaPuzzlePiece,
  FaQuestionCircle,
  FaSearch,
  FaArrowRight
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const DocsPage = () => {
  const [activeSection, setActiveSection] = useState('getting-started');
  const navigate = useNavigate();

  const docSections = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      icon: <FaRocket className="w-6 h-6 text-indigo-400" />,
      description: 'Begin your journey with our AI Agents platform',
      items: [
        'Quick Start Guide',
        'Installation Steps',
        'Basic Configuration',
        'First Integration'
      ]
    },
    {
      id: 'api-reference',
      title: 'API Reference',
      icon: <FaCode className="w-6 h-6 text-purple-400" />,
      description: 'Detailed API documentation and examples',
      items: [
        'Authentication',
        'Endpoints Overview',
        'Response Formats',
        'Rate Limits'
      ]
    },
    {
      id: 'guides',
      title: 'Guides & Tutorials',
      icon: <FaBook className="w-6 h-6 text-blue-400" />,
      description: 'Step-by-step tutorials and implementation guides',
      items: [
        'Integration Patterns',
        'Best Practices',
        'Advanced Features',
        'Troubleshooting'
      ]
    }
  ];

  const quickLinks = [
    {
      icon: <FaLightbulb className="w-5 h-5" />,
      title: "Examples",
      description: "View implementation examples"
    },
    {
      icon: <FaPuzzlePiece className="w-5 h-5" />,
      title: "SDK Tools",
      description: "Download official SDKs"
    },
    {
      icon: <FaQuestionCircle className="w-5 h-5" />,
      title: "FAQ",
      description: "Common questions answered"
    }
  ];

  const handleGetStarted = () => {
    navigate('/enquiry');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50">
      {/* Search Header */}
      <div className="bg-gradient-to-r from-white to-blue-50 border-b border-purple-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-center text-indigo-900 mb-8">
              Documentation
            </h1>
            <div className="relative">
              <input
                type="text"
                placeholder="Search documentation..."
                className="w-full px-4 py-3 rounded-lg border border-purple-100 shadow-sm focus:ring-2 focus:ring-indigo-400 focus:border-transparent pl-12"
              />
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-indigo-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {quickLinks.map((link, index) => (
            <div key={index} className="bg-white/70 backdrop-blur-sm rounded-lg p-4 flex items-center space-x-4 border border-purple-100 hover:shadow-md transition-all duration-300 cursor-pointer">
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-3 rounded-lg text-indigo-500">
                {link.icon}
              </div>
              <div>
                <h3 className="font-medium text-indigo-900">{link.title}</h3>
                <p className="text-sm text-indigo-600">{link.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Documentation Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {docSections.map((section) => (
            <div
              key={section.id}
              className={`bg-white/80 backdrop-blur-sm p-6 rounded-xl transition-all duration-300
                ${activeSection === section.id 
                  ? 'border-2 border-indigo-400 shadow-lg shadow-indigo-100 transform scale-105' 
                  : 'border border-purple-100 shadow-md hover:shadow-lg hover:border-indigo-300'}`}
              onClick={() => setActiveSection(section.id)}
            >
              <div className="flex items-center space-x-3 mb-4">
                {section.icon}
                <h2 className="text-xl font-semibold text-indigo-900">{section.title}</h2>
              </div>
              <p className="text-indigo-600 mb-4">{section.description}</p>
              <ul className="space-y-2">
                {section.items.map((item, index) => (
                  <li key={index} className="flex items-center text-indigo-700 hover:text-indigo-900 cursor-pointer">
                    <FaArrowRight className="w-4 h-4 mr-2 text-indigo-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section (Replaced "Need more help?" section) */}
      <div className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
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

export default DocsPage;