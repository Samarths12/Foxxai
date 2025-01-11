import React, { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      console.log('Form submitted:', formData);
      setFormData({ name: '', email: '', message: '' }); 
    } else {
      setErrors(newErrors);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  return (
    <section className="bg-black py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div className="text-white pr-8">
            <h2 className="text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">
              Create Custom AI Effortlessly
            </h2>
            <p className="text-lg mb-4">
              Request a labeling/data collection project.
            </p>
            <p className="text-lg mb-4">
              Build custom LLM.
            </p>
            <p className="text-lg mb-4">
              Download the company overview.
            </p>
          </div>

          <div className="flex justify-start">
            <form onSubmit={handleSubmit} className="space-y-6 w-4/5 mr-8">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  placeholder="Your Name"
                  className={`w-full bg-gray-700 p-3 rounded-xl text-white ${errors.name ? 'border-red-500 border' : ''}`}
                  onChange={handleChange}
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  placeholder="Your Email"
                  className={`w-full bg-gray-700 p-3 rounded-xl text-white ${errors.email ? 'border-red-500 border' : ''}`}
                  onChange={handleChange}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  placeholder="Your Message"
                  rows="4"
                  className={`w-full bg-gray-700 p-3 rounded-xl text-white ${errors.message ? 'border-red-500 border' : ''}`}
                  onChange={handleChange}
                />
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white px-8 py-3 rounded-xl hover:bg-blue-600 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      
      <div className="mt-12">
        <div className="mx-auto w-[70%]">
          <div className="border-t-2 border-white"></div>
        </div>
      </div>
    </section>
  );
};

export default Form;
