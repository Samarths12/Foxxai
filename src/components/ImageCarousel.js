import React, { useState, useEffect } from 'react';

const ImageCarousel = () => {
  
  const carouselContent = [
    {
      title: "Develop Unique LLM",
      description: "We use RAG, prompt-enginnering, and fine-tuning to create your unique LLM based on a base LLM. We make sure the chosen approach best serves your company's requirements.",
      image: "https://cdn.prod.website-files.com/63ca3d566352c27afde699d2/65f9456c01a882525a073b76_RAG%20(1).jpg"
    },
    {
      title: "Create a service aplication using LLM",
      description: "We create the finished goods, such chatbots, to assist clients and staff in utilising unique LLMs.",
      image: "https://www.netguru.com/hs-fs/hubfs/chatbot.jpg?width=1200&height=630&name=chatbot.jpg"
    },
    {
      title: "Evaluate Custom LLM",
      description: "We evaluate the LLM's performance and make any necessary adjustments to ensure it meets your company's requirements.",
      image: "https://images.prismic.io/turing/ZwUQioF3NbkBXAZW_LLMServices-Organic6__Hero_2560-1200.png?auto=format,compress"
    },
    {
      title: "Create high quality data for personalised LLM",
      description: "With your company goals in mind, we develop optimal data structures. This includes creating high-quality training datasets for fine-tuning and formatting internal documents for LLM-ready use in a RAG system.",
      image: "https://rabbitt.ai/assets/slide2.webp"
    },
    {
      title: "Determine your Business Problem",
      description: "In order to create the best LLM adoption plan that improves your goods and increases staff efficiency, we first identify your business challenge.",
      image: "https://cdn.analyticsvidhya.com/wp-content/uploads/2024/09/Anuu-09_Cfg4XtI.png"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === carouselContent.length - 1 ? 0 : prevIndex + 1
      );
    }, 2500); 

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-black py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">
        We offer consultation at every level of your LLM adoption journey
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-4">
            <h3 className="text-4xl font-bold mb-4 text-white">
              {carouselContent[currentIndex].title}
            </h3>
            <p className="text-gray-300 leading-relaxed transition-opacity duration-300">
              {carouselContent[currentIndex].description}
            </p>
          </div>

          
          <div className="relative h-[400px] overflow-hidden rounded-xl">
            {carouselContent.map((item, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-500 transform ${
                  index === currentIndex 
                    ? 'translate-x-0 opacity-100' 
                    : 'translate-x-full opacity-0'
                }`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-xl"
                />
                <div className="absolute inset-0 bg-black/20 rounded-xl"></div>
              </div>
            ))}
          </div>
        </div>

        
        <div className="flex justify-center space-x-2 mt-8">
          {carouselContent.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex ? 'bg-blue-500 w-4' : 'bg-gray-600'
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageCarousel;
