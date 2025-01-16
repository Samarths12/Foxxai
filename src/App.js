import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Info from "./components/Info";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Form from "./components/Form";
import About from "./components/About";
import ImageCarousel from "./components/ImageCarousel";
import AuthForm from "./components/AuthForm";
import Dashboard from "./components/Dashboard";
import People from "./components/People";

// Layout component with handleLogin prop
const AppLayout = ({ handleLogin }) => {
  const location = useLocation();
  const isDashboardRoute = location.pathname === '/dashboard';

  return (
    <div className="bg-black">
      {!isDashboardRoute && <Header />}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Info />
              <ImageCarousel />
              <Features />
              <Form />
              <People />
              <About />
              <Footer />
            </>
          }
        />
        <Route
          path="/signin"
          element={<AuthForm onLogin={handleLogin} />}
        />
        <Route 
          path="/dashboard" 
          element={<Dashboard />} 
        />
      </Routes>
    </div>
  );
};

// Main App component
const App = () => {
  // Define handleLogin at the top level
  const handleLogin = () => {
    localStorage.setItem("isAuthenticated", "true");
    window.dispatchEvent(new Event('storage')); // Trigger storage event
  };

  return (
    <Router>
      <AppLayout handleLogin={handleLogin} />
    </Router>
  );
};

export default App;