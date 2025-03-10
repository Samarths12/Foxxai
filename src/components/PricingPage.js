import React from "react";

const PricingPage = () => {
  return (
    <div className="bg-gray-50 py-8 px-4 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-semibold text-gray-800">Find Your Perfect Plan</h1>
          <p className="text-gray-500 mt-1">Tailored pricing to match your needs and goals</p>
        </div>

        {/* Pricing Table */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          {/* Header Row */}
          <div className="grid grid-cols-3 border-b">
            <div className="p-6 font-medium text-gray-800">Features, Support & Integrations</div>
            <div className="p-6 font-medium text-gray-800 border-l">Starter</div>
            <div className="p-6 font-medium text-gray-800 border-l">Professional</div>
          </div>

          {/* Automation Section */}
          <div className="border-b">
            <div className="p-6 border-b bg-gray-50">
              <span className="font-medium text-gray-800">Automation</span>
            </div>
            
            <div className="grid grid-cols-3 border-b">
              <div className="p-4 pl-6 text-gray-600">No. of agents</div>
              <div className="p-4 border-l text-gray-800">5</div>
              <div className="p-4 border-l text-gray-800">10</div>
            </div>
            
            <div className="grid grid-cols-3 border-b">
              <div className="p-4 pl-6 text-gray-600">Hand off to Support Team</div>
              <div className="p-4 border-l">
                <div className="text-green-500 flex justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M8 12l2 2 4-4"></path>
                  </svg>
                </div>
              </div>
              <div className="p-4 border-l">
                <div className="text-green-500 flex justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M8 12l2 2 4-4"></path>
                  </svg>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-3 border-b">
              <div className="p-4 pl-6 text-gray-600">Article suggestions</div>
              <div className="p-4 border-l">
                <div className="text-green-500 flex justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M8 12l2 2 4-4"></path>
                  </svg>
                </div>
              </div>
              <div className="p-4 border-l">
                <div className="text-green-500 flex justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M8 12l2 2 4-4"></path>
                  </svg>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-3 border-b">
              <div className="p-4 pl-6 text-gray-600">Multi lingual support</div>
              <div className="p-4 border-l">
                <div className="text-green-500 flex justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M8 12l2 2 4-4"></path>
                  </svg>
                </div>
              </div>
              <div className="p-4 border-l">
                <div className="text-green-500 flex justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M8 12l2 2 4-4"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Support Channels Section */}
          <div className="border-b">
            <div className="p-6 border-b bg-gray-50">
              <span className="font-medium text-gray-800">Support Channels</span>
            </div>
            
            <div className="grid grid-cols-3 border-b">
              <div className="p-4 pl-6 text-gray-600">Intercom(voice)</div>
              <div className="p-4 border-l">
                <div className="text-green-500 flex justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M8 12l2 2 4-4"></path>
                  </svg>
                </div>
              </div>
              <div className="p-4 border-l">
                <div className="text-green-500 flex justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M8 12l2 2 4-4"></path>
                  </svg>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-3 border-b">
              <div className="p-4 pl-6 text-gray-600">Customizable chat widget</div>
              <div className="p-4 border-l">
                <div className="text-green-500 flex justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M8 12l2 2 4-4"></path>
                  </svg>
                </div>
              </div>
              <div className="p-4 border-l">
                <div className="text-green-500 flex justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M8 12l2 2 4-4"></path>
                  </svg>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-3 border-b">
              <div className="p-4 pl-6 text-gray-600">Email</div>
              <div className="p-4 border-l">
                <div className="">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M8 12l2 2 4-4"></path>
                  </svg>
                </div>
              </div>
              <div className="p-4 border-l">
                <div className="text-green-500 flex justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M8 12l2 2 4-4"></path>
                  </svg>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-3 border-b">
              <div className="p-4 pl-6 text-gray-600">Text</div>
              <div className="p-4 border-l">
                <div className="">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M8 12l2 2 4-4"></path>
                  </svg>
                </div>
              </div>
              <div className="p-4 border-l">
                <div className="text-green-500 flex justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M8 12l2 2 4-4"></path>
                  </svg>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-3 border-b">
              <div className="p-4 pl-6 text-gray-600">Payment</div>
              <div className="p-4 border-l">
                <div className="">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M8 12l2 2 4-4"></path>
                  </svg>
                </div>
              </div>
              <div className="p-4 border-l">
                <div className="text-green-500 flex justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M8 12l2 2 4-4"></path>
                  </svg>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 border-b">
              <div className="p-4 pl-6 text-gray-600">WhatsApp</div>
              <div className="p-4 border-l">
                <div className="">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M8 12l2 2 4-4"></path>
                  </svg>
                </div>
              </div>
              <div className="p-4 border-l">
                <div className="text-green-500 flex justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M8 12l2 2 4-4"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Ticketing Section */}
          <div className="border-b">
            <div className="p-6 border-b bg-gray-50">
              <span className="font-medium text-gray-800">Ticketing</span>
            </div>
            
            <div className="grid grid-cols-3 border-b">
              <div className="p-4 pl-6 text-gray-600">Zendesk</div>
              <div className="p-4 border-l"></div>
              <div className="p-4 border-l">
                <div className="text-green-500 flex justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M8 12l2 2 4-4"></path>
                  </svg>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-3 border-b">
              <div className="p-4 pl-6 text-gray-600">Freshdesk</div>
              <div className="p-4 border-l"></div>
              <div className="p-4 border-l">
                <div className="text-green-500 flex justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M8 12l2 2 4-4"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Apps Section */}
          <div className="border-b">
            <div className="p-6 border-b bg-gray-50">
              <span className="font-medium text-gray-800">Apps</span>
            </div>
            
            <div className="grid grid-cols-3 border-b">
              <div className="p-4 pl-6 text-gray-600">Zapier</div>
              <div className="p-4 border-l"></div>
              <div className="p-4 border-l">
                <div className="text-green-500 flex justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M8 12l2 2 4-4"></path>
                  </svg>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-3 border-b">
              <div className="p-4 pl-6 text-gray-600">Slack</div>
              <div className="p-4 border-l"></div>
              <div className="p-4 border-l">
                <div className="text-green-500 flex justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M8 12l2 2 4-4"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Training Section */}
          <div className="border-b">
            <div className="p-6 border-b bg-gray-50">
              <span className="font-medium text-gray-800">Training</span>
            </div>
            
            <div className="grid grid-cols-3 border-b">
              <div className="p-4 pl-6 text-gray-600">God's eye</div>
              <div className="p-4 border-l">
                <div className="text-green-500 flex justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M8 12l2 2 4-4"></path>
                  </svg>
                </div>
              </div>
              <div className="p-4 border-l">
                <div className="text-green-500 flex justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M8 12l2 2 4-4"></path>
                  </svg>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-3 border-b">
              <div className="p-4 pl-6 text-gray-600">PDF file import</div>
              <div className="p-4 border-l">
                <div className="text-green-500 flex justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M8 12l2 2 4-4"></path>
                  </svg>
                </div>
              </div>
              <div className="p-4 border-l">
                <div className="text-green-500 flex justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M8 12l2 2 4-4"></path>
                  </svg>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-3 border-b">
              <div className="p-4 pl-6 text-gray-600">Bulk links import</div>
              <div className="p-4 border-l">
                <div className="text-green-500 flex justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M8 12l2 2 4-4"></path>
                  </svg>
                </div>
              </div>
              <div className="p-4 border-l">
                <div className="text-green-500 flex justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M8 12l2 2 4-4"></path>
                  </svg>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-3 border-b">
              <div className="p-4 pl-6 text-gray-600">Write articles</div>
              <div className="p-4 border-l">
                <div className="text-green-500 flex justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M8 12l2 2 4-4"></path>
                  </svg>
                </div>
              </div>
              <div className="p-4 border-l">
                <div className="text-green-500 flex justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M8 12l2 2 4-4"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Contacts Section */}
          <div className="border-b">
            <div className="p-6 border-b bg-gray-50">
              <span className="font-medium text-gray-800">Contacts</span>
            </div>
            
            <div className="grid grid-cols-3 border-b">
              <div className="p-4 pl-6 text-gray-600">Storage</div>
              <div className="p-4 border-l text-gray-800">5,000</div>
              <div className="p-4 border-l text-gray-800">50,000</div>
            </div>
            
            <div className="grid grid-cols-3 border-b">
              <div className="p-4 pl-6 text-gray-600">Create custom attributes</div>
              <div className="p-4 border-l text-gray-800">Unlimited</div>
              <div className="p-4 border-l text-gray-800">Unlimited</div>
            </div>
            
            <div className="grid grid-cols-3 border-b">
              <div className="p-4 pl-6 text-gray-600">Export Contacts</div>
              <div className="p-4 border-l">
                <div className="text-green-500 flex justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M8 12l2 2 4-4"></path>
                  </svg>
                </div>
              </div>
              <div className="p-4 border-l">
                <div className="text-green-500 flex justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M8 12l2 2 4-4"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Shared Inbox Section */}
          <div className="border-b">
            <div className="p-6 border-b bg-gray-50">
              <span className="font-medium text-gray-800">Shared Inbox</span>
            </div>
            
            <div className="grid grid-cols-3 border-b">
              <div className="p-4 pl-6 text-gray-600">History</div>
              <div className="p-4 border-l text-gray-800">Unlimited</div>
              <div className="p-4 border-l text-gray-800">Unlimited</div>
            </div>
          </div>

          {/* Analytics and Reporting Section */}
          <div className="border-b">
            <div className="p-6 border-b bg-gray-50">
              <span className="font-medium text-gray-800">Analytics and Reporting</span>
            </div>
            
            <div className="grid grid-cols-3 border-b">
              <div className="p-4 pl-6 text-gray-600">Conversation volume report</div>
              <div className="p-4 border-l">
                <div className="text-green-500 flex justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M8 12l2 2 4-4"></path>
                  </svg>
                </div>
              </div>
              <div className="p-4 border-l">
                <div className="text-green-500 flex justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M8 12l2 2 4-4"></path>
                  </svg>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-3 border-b">
              <div className="p-4 pl-6 text-gray-600">CSV export</div>
              <div className="p-4 border-l">
                <div className="text-green-500 flex justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M8 12l2 2 4-4"></path>
                  </svg>
                </div>
              </div>
              <div className="p-4 border-l">
                <div className="text-green-500 flex justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M8 12l2 2 4-4"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* API Access Section */}
          <div className="border-b">
            <div className="p-6 border-b bg-gray-50">
              <span className="font-medium text-gray-800">API Access</span>
            </div>
            
            <div className="grid grid-cols-3 border-b">
              <div className="p-4 pl-6 text-gray-600">API access</div>
              <div className="p-4 border-l"></div>
              <div className="p-4 border-l">
                <div className="text-green-500 flex justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M8 12l2 2 4-4"></path>
                  </svg>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-3 border-b">
              <div className="p-4 pl-6 text-gray-600">Rate limit</div>
              <div className="p-4 border-l">
                <div className="text-green-500 flex justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M8 12l2 2 4-4"></path>
                  </svg>
                </div>
              </div>
              <div className="p-4 border-l"></div>
            </div>
          </div>

        </div>

        
      </div>
    </div>
  );
};

export default PricingPage;