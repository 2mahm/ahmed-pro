import React from "react";
import "./Hero.css";
import { FaFacebook, FaWhatsapp, FaBehance, FaLinkedin } from "react-icons/fa";
import Typewriter from "typewriter-effect";
import videoBg from "../assest/77.mp4";

function Hero() {
  return (
    <section className="hero">
      {/* فيديو الخلفية */}
      <video autoPlay loop muted playsInline className="hero-video">
        <source src={videoBg} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* المحتوى فوق الفيديو */}
      <div className="hero-content">
        <h1 className="hero-title">
          <Typewriter
            options={{
              strings: ["AHMED METWALY PORTFOLIO"],
              autoStart: true,
              loop: true,
              deleteSpeed: 80,
            }}
          />
        </h1>
        <h3 className="hero-sub">
          <Typewriter
            options={{
              strings: ["ENJOY"],
              autoStart: true,
              loop: true,
              deleteSpeed: 50,
            }}
          />
        </h3>

        <div className="hero-socials">
          <a href="https://wa.me/+201011033409" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
          <a href="https://www.facebook.com/ahmed.meto.3150" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          <a href="https://www.behance.net/ahmedmeto4" target="_blank" rel="noopener noreferrer"><FaBehance /></a>
          <a href="https://www.linkedin.com/in/ahmed-metwlly-20804026b/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
