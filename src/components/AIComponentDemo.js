import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaCalendar, FaUsers, FaCommentDots, FaStar } from "react-icons/fa";
import { Card, CardContent, CardHeader, CardTitle } from "./Card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const AIComponentDemo = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const demoOptions = [
    {
      icon: <FaStar />,
      title: "AI Insights",
      description: "Discover actionable intelligence",
    },
    {
      icon: <FaCommentDots />,
      title: "Conversational AI",
      description: "Intelligent dialogue solutions",
    },
    {
      icon: <FaUsers />,
      title: "Team Collaboration",
      description: "Enhanced team productivity",
    },
  ];

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", company: "" });
    }, 2000); // Simulate API call delay
  };

  return (
    <motion.div
      id="ai-component-demo"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-sky-100 flex items-center justify-center p-4"
    >
      <div className="w-full max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl font-bold text-blue-600">DEMO</h2>
          <p className="text-gray-600 mt-2">Experience the power of AI solutions</p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Card className="w-full bg-white rounded-xl shadow-lg">
            <CardHeader className="text-center">
              <motion.div
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <CardTitle className="text-3xl font-semibold text-gray-900">
                  Book Your AI Component Demo
                </CardTitle>
                <p className="text-gray-600 mt-2">
                  Experience the future of intelligent solutions
                </p>
              </motion.div>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Our AI Solutions</h3>
                <div className="space-y-4">
                  {demoOptions.map((option, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-all"
                    >
                      <div className="mr-4 text-blue-600 text-2xl">
                        {option.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">{option.title}</h4>
                        <p className="text-gray-500 text-sm">{option.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.form
                onSubmit={handleSubmit}
                className="space-y-4"
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h3 className="text-xl font-semibold text-gray-800">
                  Schedule Your Personalized Demo
                </h3>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    className="border-gray-300 focus:ring-2 focus:ring-blue-500 text-gray-900"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    Work Email
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="you@company.com"
                    className="border-gray-300 focus:ring-2 focus:ring-blue-500 text-gray-900"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700">Company</label>
                  <Input
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Your company name"
                    className="border-gray-300 focus:ring-2 focus:ring-blue-500 text-gray-900"
                  />
                </div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                  >
                    {isSubmitting ? "Submitting..." : "Request Demo"}
                  </Button>
                </motion.div>
                {isSubmitted && (
                  <p className="text-green-600 text-center mt-4">
                    Demo request submitted! We'll contact you soon.
                  </p>
                )}
              </motion.form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AIComponentDemo;