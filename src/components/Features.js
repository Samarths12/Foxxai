import React, { useEffect, useState } from "react";

const Features = () => {
  const features = [
    {
      image: "https://res.cloudinary.com/dnztdqczk/image/upload/v1721373864/TCImages/gzk7dms8x5q1uufjxygf.jpg",
      title: "Transforming healthcare with 'Customized AI voice a...",
      description: "In today's fast-paced healthcare environment, efficient patient interaction and administrative automation are crucial. Our client, a top-tier global h...",
      bgColor: "#F3E5F5", // Soft Lavender
    },
    {
      image: "https://i.ibb.co/m0Y61b3/9e2dd011cc61.jpg",
      title: "Elevating AI accuracy with Advanced Data Annotatio...",
      description: "In the rapidly evolving world of artificial intelligence, the accuracy and reliability of AI models heavily depend on the quality of the annotated dat...",
      bgColor: "#FFF8E5", // Soft Yellow
    },
    {
      image: "https://i.ibb.co/2WPhL34/35df419bd61a.jpg",
      title: "Achieving 80% Reduction in Hallucinations and 50% ...",
      description: "In the competitive landscape of technology, efficiency and accuracy in AI-generated content are paramount. Our client, a prominent global tech giant, ...",
      bgColor: "#E7FFEB", // Soft Green
    },
  ];

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("features");
      const rect = element.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="features" className="py-20 bg-sky-100">
      <div className="container mx-auto text-center">
        <h2
          className={`text-4xl font-bold text-gray-800 mb-12 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          } transition-all duration-700`}
        >
          Blogs to{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
            know more
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`shadow-lg p-6 rounded-lg transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{
                backgroundColor: feature.bgColor,
              }}
            >
              <div className="relative w-full h-[45%]">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover"
                  style={{ margin: "2px auto 0 auto" }}
                />
              </div>

              <h3 className="text-2xl font-bold mt-6 mb-4 text-gray-900">
                {feature.title}
              </h3>

              <p className="text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
