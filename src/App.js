import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Info from "./components/Info";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Form from "./components/Form";
import About from "./components/About";
import ImageCarousel from "./components/ImageCarousel";

const App = () => {
  return (
    <div className="bg-black">
      <Header />
      <Hero />
      <Info />
      <ImageCarousel />
      <Features />
      <Form />
      <About />
      <Footer />
    </div>
  );
};

export default App;