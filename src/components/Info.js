import React, { useEffect, useRef } from "react";

const Info = () => {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);

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
          observer.unobserve(entry.target); // Only animate once
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    // Observe each section
    if (section1Ref.current) observer.observe(section1Ref.current);
    if (section2Ref.current) observer.observe(section2Ref.current);
    if (section3Ref.current) observer.observe(section3Ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 bg-black text-white">
      {/* First Row - Image on the Right */}
      <div ref={section1Ref} className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between space-y-10 md:space-y-0 md:space-x-10 mb-20 opacity-0 not-animated">
        <div className="w-full md:w-1/2 text-left">
          <h2 className="text-5xl font-bold text-blue-600 mb-4">
            Determine the specific data needs of the client
          </h2>
          <p className="text-lg">
            An industry-specific consultant analyze your business and data requirements, define necessary tasks, and recruit suitable labelers from our crowdsourcing pool.
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <img
            src="https://rabbitt.ai/assets/p1i1.webp"
            alt="AI Technology"
            className="w-3/4 h-70 object-cover rounded-lg shadow-lg mx-auto hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>

      {/* Second Row - Image on the Left */}
      <div ref={section2Ref} className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center justify-between space-y-10 md:space-y-0 md:space-x-10 mb-20 opacity-0 not-animated">
        <div className="w-full md:w-1/2">
          <img
            src="https://rabbitt.ai/assets/p1i2.webp"
            alt="AI Solutions"
            className="w-3/4 h-70 object-cover rounded-lg shadow-lg mx-auto hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="w-full md:w-1/2 text-left">
          <h2 className="text-5xl font-bold text-blue-600 mb-4">
            Interactive Data Annotation & Smart Labeling
          </h2>
          <p className="text-lg">
            You can easily and quickly create a custom labeling project with our no-code solution.
          </p>
        </div>
      </div>

      {/* Third Row - Image on the Right */}
      <div ref={section3Ref} className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between space-y-10 md:space-y-0 md:space-x-10 mb-20 opacity-0 not-animated">
        <div className="w-full md:w-1/2 text-left">
          <h2 className="text-5xl font-bold text-blue-600 mb-4">
            AI-Assisted Quality Check
          </h2>
          <p className="text-lg">
            AI-assisted technologies let you perform more efficiently and precisely. The data labeler sets the annotation region, and the task is completed by the AI helper.
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <img
            src="https://rabbitt.ai/assets/p1i3.webp"
            alt="AI Models"
            className="w-3/4 h-70 object-cover rounded-lg shadow-lg mx-auto hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>

      {/* Animation Styles */}
      <style>
        {`
          .not-animated {
            transform: translateY(50px);
            transition: all 0.8s ease-out;
          }

          .animate-section {
            opacity: 1 !important;
            transform: translateY(0) !important;
          }

          @media (min-width: 768px) {
            .not-animated > div:first-child {
              transform: translateX(-50px);
            }
            .not-animated > div:last-child {
              transform: translateX(50px);
            }
            .animate-section > div {
              transform: translateX(0) !important;
            }
          }
        `}
      </style>
    </section>
  );
};

export default Info;