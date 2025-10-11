import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import logo from "./assest/11.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Projects />
      {/* <div className="fixed-image">
        <img src={logo} alt="Floating" />
      </div> */}
    </div>
  );
}

export default App;
