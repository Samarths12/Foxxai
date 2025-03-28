import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';
import { FaArrowRight } from 'react-icons/fa';

const Features = () => {
  const navigate = useNavigate();
  const features = [
    {
      id: 1,
      image: "https://www.shutterstock.com/image-photo/medical-technology-doctor-use-ai-600nw-2304284475.jpg",
      title: "Ways AI Agents Save Time and Lots of Money for SMEs",
      description: "For small and medium enterprises (SMEs) in industries like logistics, automotive, and retail, every minute...",
      bgColor: "#F3E5F5",
      readTime: "5 min read",
      category: "Healthcare"
    },
    {
      id: 2,
      image: "https://img.freepik.com/premium-photo/doctors-focused-hand-writes-prescription-symbolizing-precision-medical-care_1320055-12962.jpg",
      title: "Revolutionizing Logistics: How AI Agents Streamline Operations",
      description: "Logistics SMEs face a constant battle: managing complex operations while keeping costs low and...",
      bgColor: "#FFF8E5",
      readTime: "4 min read",
      category: "Technology"
    },
    {
      id: 3,
      image: "https://img.freepik.com/premium-photo/futuristic-laboratory-medical-professionals-conducting-advanced-tests_886588-32436.jpg",
      title: "Unlocking AI Power for SMEs: Auto-Improving Feedback Loops and Ultra-Low Latency",
      description: "For small and medium enterprises (SMEs) in logistics, automotive, and retail, adopting AI can feel like a big...",
      bgColor: "#E7FFEB",
      readTime: "6 min read",
      category: "AI"
    }
  ];

  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    let interval;
    if (isAutoPlaying && !isHovered) {
      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % features.length);
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, isHovered, features.length]);

  const handleSlide = (direction) => {
    setIsAutoPlaying(false);
    if (direction === 'right') {
      setCurrentIndex((prev) => (prev + 1) % features.length);
    } else {
      setCurrentIndex((prev) => (prev - 1 + features.length) % features.length);
    }
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const handleCardClick = (id) => {
    navigate(`/blog/${id}`);
  };

  const handleGetStarted = () => {
    navigate('/enquiry');
  };

  const getVisibleFeatures = () => {
    const result = [];
    for (let i = -1; i <= 1; i++) {
      const index = (currentIndex + i + features.length) % features.length;
      result.push({ ...features[index], position: i });
    }
    return result;
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50 py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 text-center">
        <h2 className={`text-4xl md:text-5xl font-bold text-gray-800 mb-16 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        } transition-all duration-700 ease-in-out`}>
          Blogs to{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500">
            know more
          </span>
        </h2>
        
        <p className={`text-gray-600 max-w-2xl mx-auto mb-16 font-medium ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        } transition-all duration-700 delay-200`}>
          Explore our collection of in-depth articles about AI, technology, and innovation
        </p>

        <div className="relative h-[600px] flex items-center justify-center perspective-1000">
          <button
            onClick={() => handleSlide('left')}
            className="absolute left-4 z-20 p-3 bg-white/95 rounded-full shadow-md hover:bg-white hover:shadow-lg hover:scale-110 transition-all duration-300 border border-blue-100"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <IoChevronBackOutline className="w-6 h-6 text-indigo-600" />
          </button>

          <div className="relative w-full h-full flex items-center justify-center">
            {getVisibleFeatures().map((feature, index) => {
              const isCenter = feature.position === 0;
              const transformValue = `translateX(${feature.position * 110}%) scale(${isCenter ? 1.1 : 0.85}) rotateY(${feature.position * 15}deg)`;
              const zIndex = isCenter ? 10 : 5;
              const opacity = isCenter ? 1 : 0.65;

              return (
                <div
                  key={`${feature.id}-${index}`}
                  onClick={() => handleCardClick(feature.id)}
                  className="absolute cursor-pointer shadow-xl rounded-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 bg-white border border-purple-100/50"
                  style={{
                    transform: transformValue,
                    zIndex,
                    opacity,
                    width: '420px',
                    transition: 'all 0.5s ease-in-out',
                  }}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <div className="relative w-full h-64 overflow-hidden rounded-t-xl">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-115"
                    />
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-indigo-500 to-purple-500 px-3 py-1 rounded-full text-sm font-medium text-white shadow-sm">
                      {feature.category}
                    </div>
                  </div>
                  <div className="p-6 bg-gradient-to-b from-white to-blue-50/30 rounded-b-xl">
                    <h3 className="text-xl md:text-2xl font-bold mb-3 text-gray-900 line-clamp-2 hover:text-indigo-600 transition-colors duration-200">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-base line-clamp-3 mb-4 font-light">
                      {feature.description}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span className="bg-blue-100/50 px-2 py-1 rounded-full text-blue-700">
                        {feature.readTime}
                      </span>
                      <span className="text-indigo-600 hover:text-indigo-700 font-medium transition-colors duration-200">
                        Read more →
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <button
            onClick={() => handleSlide('right')}
            className="absolute right-4 z-20 p-3 bg-white/95 rounded-full shadow-md hover:bg-white hover:shadow-lg hover:scale-110 transition-all duration-300 border border-blue-100"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <IoChevronForwardOutline className="w-6 h-6 text-indigo-600" />
          </button>
        </div>

        <div className="flex justify-center mt-12 gap-3">
          {features.map((_, index) => (
            <button
              key={index}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentIndex === index 
                  ? 'w-6 bg-gradient-to-r from-indigo-500 to-purple-500' 
                  : 'w-2 bg-gray-300/50 hover:bg-gray-400/50'
              }`}
              onClick={() => setCurrentIndex(index)}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            />
          ))}
        </div>
      </div>

      {/* CTA Section - Shifted Down and Full Width */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-500 mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
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
    </section>
  );
};

export default Features;