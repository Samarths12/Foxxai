import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';

const Features = () => {
  const navigate = useNavigate();
  const features = [
    {
      id: 1,
      image: "https://www.shutterstock.com/image-photo/medical-technology-doctor-use-ai-600nw-2304284475.jpg",
      title: "Revolutionizing Healthcare: AI Voice Technology's Transformative Impact",
      description: "The healthcare landscape is undergoing a radical transformation, driven by artificial intelligence's unprecedented capabilities...",
      bgColor: "#F3E5F5",
      readTime: "5 min read",
      category: "Healthcare"
    },
    {
      id: 2,
      image: "https://img.freepik.com/premium-photo/doctors-focused-hand-writes-prescription-symbolizing-precision-medical-care_1320055-12962.jpg",
      title: "Precision in AI: The Critical Role of Advanced Data Annotation",
      description: "Data annotation is the unsung hero of artificial intelligence—a meticulous craft that transforms raw, unstructured data into intelligence...",
      bgColor: "#FFF8E5",
      readTime: "4 min read",
      category: "Technology"
    },
    {
      id: 3,
      image: "https://img.freepik.com/premium-photo/futuristic-laboratory-medical-professionals-conducting-advanced-tests_886588-32436.jpg",
      title: "Breakthrough AI Content Generation: Beyond Speed to Meaningful Communication",
      description: "Content generation powered by artificial intelligence transcends mere text production. It's about crafting meaningful...",
      bgColor: "#E7FFEB",
      readTime: "6 min read",
      category: "AI"
    },
    {
      id: 4,
      image: "https://elearningindustry.com/wp-content/uploads/2019/12/4-Benefits-Of-AI-In-Personalized-Learning.jpg",
      title: "The education sector is on the brink of a revolution, with artificial intelligence paving the way for personalized learning experience...",
      description: "As AI becomes increasingly integrated into healthcare systems, addressing ethical considerations and maintaining transparency has become paramount. Explore how healthcare providers are balancing innovation with patient trust...",
      bgColor: "#E3F2FD",
      readTime: "3 min read",
      category: "Education"
    },
    {
      id: 5,
      image: "https://media.licdn.com/dms/image/D4D12AQGjuZbRz71a7A/article-cover_image-shrink_720_1280/0/1715692030331?e=2147483647&v=beta&t=v__SrpVtFwYZnGu-ETmaA7R0czEdBJ5zw7Hl3gKFer0",
      title: "Traditional education systems often struggle to address the diverse learning needs of students. One-size-fits-all approaches can ...",
      description: "Discover how artificial intelligence is revolutionizing personalized medicine by analyzing vast amounts of patient data to create tailored treatment plans that consider individual genetic profiles, lifestyle factors, and medical history...",
      bgColor: "#F3E5F5",
      readTime: "7 min read",
      category: "Education"
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
    </section>
  );
};

export default Features;