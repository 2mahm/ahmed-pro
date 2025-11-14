import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import { FaWhatsapp } from "react-icons/fa";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Projects />
      {/* Fixed WhatsApp Button */}
      <a 
        href="https://wa.me/+201011033409" 
        target="_blank" 
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="Contact us on WhatsApp"
      >
        <FaWhatsapp />
      </a>
    </div>
  );
}

export default App;
