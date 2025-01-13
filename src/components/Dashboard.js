import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { AiOutlineHome, AiOutlineSearch, AiOutlineBook } from 'react-icons/ai';
import { FaTags, FaUser, FaBook } from 'react-icons/fa';
import { Card, CardHeader, CardTitle, CardContent } from './Card';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [userName, setUserName] = useState('User');
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

  if (!isAuthenticated) {
    return <Navigate to="/signin" />;
  }

  const navItems = [
    { id: 'home', icon: AiOutlineHome, label: 'Home' },
    { id: 'search', icon: AiOutlineSearch, label: 'Search' },
    { id: 'library', icon: FaBook, label: 'Library' },
    { id: 'documentation', icon: AiOutlineBook, label: 'Documentation' },
    { id: 'pricing', icon: FaTags, label: 'Pricing' },
  ];

  const contentComponents = {
    home: (
      <div className="space-y-6">
        <Card className="bg-white shadow-lg border border-gray-100">
          <CardHeader className="border-b border-gray-100">
            <CardTitle className="text-2xl text-gray-800">Welcome Back!</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-indigo-50 p-6 rounded-xl shadow-sm border border-indigo-100 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-indigo-900 mb-2">Active Projects</h3>
                <p className="text-4xl font-bold text-indigo-600">12</p>
              </div>
              <div className="bg-emerald-50 p-6 rounded-xl shadow-sm border border-emerald-100 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-emerald-900 mb-2">Completed Tasks</h3>
                <p className="text-4xl font-bold text-emerald-600">48</p>
              </div>
              <div className="bg-violet-50 p-6 rounded-xl shadow-sm border border-violet-100 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-violet-900 mb-2">Team Members</h3>
                <p className="text-4xl font-bold text-violet-600">8</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-lg border border-gray-100">
            <CardHeader className="border-b border-gray-100">
              <CardTitle className="text-xl text-gray-800">Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center space-x-4 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                    <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
                    <div>
                      <p className="font-medium text-gray-800">Project Update #{i}</p>
                      <p className="text-sm text-gray-600">2 hours ago</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-lg border border-gray-100">
            <CardHeader className="border-b border-gray-100">
              <CardTitle className="text-xl text-gray-800">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <button className="p-6 text-left bg-indigo-50 rounded-xl hover:bg-indigo-100 transition-colors border border-indigo-100 group">
                  <h3 className="font-medium text-indigo-900 group-hover:text-indigo-700">New Project</h3>
                  <p className="text-sm text-indigo-600">Create a new project</p>
                </button>
                <button className="p-6 text-left bg-emerald-50 rounded-xl hover:bg-emerald-100 transition-colors border border-emerald-100 group">
                  <h3 className="font-medium text-emerald-900 group-hover:text-emerald-700">Add Task</h3>
                  <p className="text-sm text-emerald-600">Create a new task</p>
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    ),
    search: (
      <Card className="bg-white shadow-lg border border-gray-100">
        <CardHeader className="border-b border-gray-100">
          <CardTitle className="text-xl text-gray-800">Search</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search projects, documents, or team members..."
                className="text-black w-full p-4 pr-12 border border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
              <AiOutlineSearch className="absolute right-4 top-4 text-gray-400 text-xl" />
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-800">Recent Searches</h3>
              <div className="flex flex-wrap gap-2">
                {['Project Alpha', 'Documentation', 'Team Schedule'].map((term) => (
                  <span key={term} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors cursor-pointer">
                    {term}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    ),
    library: (
      <div className="space-y-6">
        <Card className="bg-white shadow-lg border border-gray-100">
          <CardHeader className="border-b border-gray-100">
            <CardTitle className="text-xl text-gray-800">Your Library</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {['Documents', 'Projects', 'Templates'].map((category) => (
                <div key={category} className="p-6 bg-indigo-50 rounded-xl shadow-sm border border-indigo-100 hover:shadow-md transition-all cursor-pointer group">
                  <h3 className="font-semibold text-indigo-900 mb-2 group-hover:text-indigo-700">{category}</h3>
                  <p className="text-sm text-indigo-600">Browse your {category.toLowerCase()}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card className="bg-white shadow-lg border border-gray-100">
          <CardHeader className="border-b border-gray-100">
            <CardTitle className="text-xl text-gray-800">Recent Files</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100 hover:bg-gray-100 transition-colors">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
                      <FaBook className="text-indigo-500 text-xl" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Document {i}</p>
                      <p className="text-sm text-gray-600">Updated 2 days ago</p>
                    </div>
                  </div>
                  <button className="px-4 py-2 text-indigo-600 hover:text-indigo-700 hover:bg-indigo-50 rounded-lg transition-colors">
                    View
                  </button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    ),
    documentation: (
      <div className="space-y-6">
        <Card className="bg-white shadow-lg border border-gray-100">
          <CardHeader className="border-b border-gray-100">
            <CardTitle className="text-xl text-gray-800">Documentation</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="prose max-w-none">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Getting Started</h2>
              <p className="text-gray-600 mb-6">Welcome to our comprehensive documentation. Here you'll find everything you need to know about using our platform effectively.</p>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Quick Links</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-indigo-50 rounded-xl border border-indigo-100 hover:shadow-md transition-all cursor-pointer group">
                  <h4 className="font-semibold text-indigo-900 mb-2 group-hover:text-indigo-700">Installation Guide</h4>
                  <p className="text-sm text-indigo-600">Learn how to set up and configure your environment</p>
                </div>
                <div className="p-6 bg-indigo-50 rounded-xl border border-indigo-100 hover:shadow-md transition-all cursor-pointer group">
                  <h4 className="font-semibold text-indigo-900 mb-2 group-hover:text-indigo-700">API Reference</h4>
                  <p className="text-sm text-indigo-600">Detailed documentation of our API endpoints</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    ),
    pricing: (
      <div className="space-y-6">
        <Card className="bg-white shadow-lg border border-gray-200 rounded-lg">
          <CardHeader className="border-b border-gray-200">
            <CardTitle className="text-2xl font-semibold text-gray-800">Pricing Plans</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Basic Plan */}
              <div className="p-6 bg-blue-50 rounded-lg border border-blue-200 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold mb-2 text-blue-800">Basic</h3>
                <p className="text-4xl font-extrabold mb-4 text-blue-600">$10</p>
                <ul className="space-y-3">
                  {['Feature 1', 'Feature 2', 'Feature 3'].map((feature) => (
                    <li key={feature} className="flex items-center space-x-2">
                      <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                      <span className="text-blue-700 font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full py-2 px-4 mt-6 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold shadow-sm">
                  Choose Plan
                </button>
              </div>
    
              {/* Pro Plan */}
              <div className="p-6 bg-purple-50 rounded-lg border border-purple-200 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold mb-2 text-purple-800">Pro</h3>
                <p className="text-4xl font-extrabold mb-4 text-purple-600">$25</p>
                <ul className="space-y-3">
                  {['All Basic features', 'Feature 4', 'Feature 5'].map((feature) => (
                    <li key={feature} className="flex items-center space-x-2">
                      <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
                      <span className="text-purple-700 font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full py-2 px-4 mt-6 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-semibold shadow-sm">
                  Choose Plan
                </button>
              </div>
    
              {/* Enterprise Plan */}
              <div className="p-6 bg-green-50 rounded-lg border border-green-200 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold mb-2 text-green-800">Enterprise</h3>
                <p className="text-4xl font-extrabold mb-4 text-green-600">Custom</p>
                <ul className="space-y-3">
                  {['All Pro features', 'Feature 6', 'Feature 7'].map((feature) => (
                    <li key={feature} className="flex items-center space-x-2">
                      <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                      <span className="text-green-700 font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full py-2 px-4 mt-6 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold shadow-sm">
                  Choose Plan
                </button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    ),
            
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-50">
      <div className="flex h-screen">
        {/* Sidebar */}
        <div className="w-64 bg-white border-r border-indigo-100 shadow-lg flex flex-col justify-between">
          {/* Main Navigation */}
          <nav className="p-4 space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                    activeTab === item.id
                      ? 'bg-indigo-50 text-indigo-600 shadow-sm'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-indigo-600'
                  }`}
                >
                  <Icon
                    size={20}
                    className={`transition-colors duration-200 ${
                      activeTab === item.id
                        ? 'text-indigo-500'
                        : 'text-gray-500 group-hover:text-indigo-500'
                    }`}
                  />
                  <span className="font-medium">{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* User Profile Section */}
          <div className="mt-auto p-4 border-t border-indigo-100 bg-white">
            <div className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors group cursor-pointer">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-100 to-blue-100 rounded-full overflow-hidden ring-2 ring-indigo-200">
                <img
                  src="https://www.instantaiprompt.com/wp-content/uploads/2023/12/simple-cartoon-from-photo.jpg"
                  alt="User avatar"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-sm text-gray-800 group-hover:text-indigo-600 transition-colors font-medium">
                  {userName}
                </span>
                <span className="text-xs text-gray-500 group-hover:text-gray-600">
                  View Profile
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-auto p-8">
          {contentComponents[activeTab]}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
