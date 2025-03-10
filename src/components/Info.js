import React, { useEffect, useRef } from "react";
import "./tailwindstyles.css"; // Import the CSS file
import { FaSearch, FaLightbulb, FaChartBar, FaRocket } from "react-icons/fa"; // Import React Icons

const Info = () => {
  const sectionRef = useRef(null);

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
          const boxes = entry.target.querySelectorAll('.animate-box');
          boxes.forEach((box, index) => {
            setTimeout(() => {
              box.classList.add('box-visible');
            }, index * 300); // Stagger the box animations
          });
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-indigo-50 text-gray-800 overflow-hidden">
      {/* Client Data Journey Header */}
      <div className="container mx-auto px-4 mb-16">
        <div className="text-center">
          <div className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2 px-6 py-1 rounded-full text-sm font-semibold">
            Our Process
          </div>
          <h2 className="text-5xl font-bold text-gray-800 mb-4 bg-gradient-to-r from-blue-700 to-indigo-700 bg-clip-text text-transparent">
            Client Data Journey
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our comprehensive approach to understanding and fulfilling your data needs through innovation and expertise
          </p>
        </div>
      </div>
      
      {/* 2×2 GRID OF SQUARE BOXES */}
      <div ref={sectionRef} className="container mx-auto px-4 mb-20">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              {
                title: "AI-Driven Customer Support",
                points: [
                  "Provide reliable, 24*7 assistance for routine tasks.",
                  "Tackle complex inquiries with advanced capabilities.",
                  "Maintain consistent, on-brand messaging."
                ],
                bgColor: "bg-purple-50", // Changed from bg-blue-50
                accentColor: "from-indigo-400 to-blue-400", // Changed from from-blue-400 to-indigo-400
                icon: <FaSearch size={28} />,
                number: "01"
              },
              {
                title: "Multi-Platform Data Synchronization",
                points: [
                  "Integrate effortlessly with WhatsApp, email, SMS, and voice calls.",
                  " Sync conversations and data in real time across all channels."
                ],
                bgColor: "bg-violet-50", // Changed from bg-indigo-50
                accentColor: "from-violet-400 to-indigo-400", // Changed from from-purple-400 to-indigo-400
                icon: <FaLightbulb size={28} />,
                number: "02"
              },
              {
                title: "Adaptive Responses with a Robust Feedback Loop",
                points: [
                  "Continuously refine AI responses based on real-time feedback.",
                  "Leverage advanced learning algorithms to optimize interactions."
                ],
                bgColor: "bg-purple-50",
                accentColor: "from-indigo-400 to-blue-400",
                icon: <FaChartBar size={28} />,
                number: "03"
              },
              {
                title: "Ultra-Low Latency",
                points: [
                  "Respond to customer queries at lightning speed.",
                  "Ensure high performance even during peak demand periods.",
                  "exact human-like voices."
                ],
                bgColor: "bg-violet-50",
                accentColor: "from-violet-400 to-indigo-400",
                icon: <FaRocket size={28} />,
                number: "04"
              }
            ].map((box, index) => (
              <div key={index} className="animate-box">
                <div className={`aspect-square ${box.bgColor} rounded-2xl shadow-lg border border-gray-100 overflow-hidden group relative transition-all duration-300 hover:shadow-xl hover:translate-y-[-4px]`}>
                  {/* Accent top border */}
                  <div className={`h-1.5 w-full bg-gradient-to-r ${box.accentColor}`}></div>
                  
                  {/* Big number watermark */}
                  <div className="absolute right-0 top-8 text-[140px] font-black text-gray-100 leading-none -mr-6 select-none">
                    {box.number}
                  </div>
                  
                  {/* Content container */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
                    {/* Top section with icon */}
                    <div>
                      <div className={`bg-gradient-to-r ${box.accentColor} w-16 h-16 rounded-xl flex items-center justify-center text-white shadow-md mb-6`}>
                        {box.icon}
                      </div>
                      
                      <h3 className="text-2xl font-bold text-gray-800 mb-3">
                        {box.title}
                      </h3>
                      <ul className="text-gray-600 leading-relaxed list-disc list-inside">
                        {box.points.map((point, idx) => (
                          <li key={idx} className="mb-1">{point}</li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Subtle indicator for hover effect */}
                    <div className="flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className={`h-1 w-8 bg-gradient-to-r ${box.accentColor} rounded-full mr-2`}></div>
                      <span className={`text-sm font-medium bg-gradient-to-r ${box.accentColor} bg-clip-text text-transparent`}>
                        Learn more
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;