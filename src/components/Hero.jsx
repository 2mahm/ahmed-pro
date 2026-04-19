import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { FaFacebook, FaWhatsapp, FaBehance, FaLinkedin } from "react-icons/fa";
import "./Hero.css";

const SOCIALS = [
  { icon: <FaWhatsapp />, href: "https://wa.me/+201011033409", label: "WhatsApp" },
  { icon: <FaFacebook />, href: "https://www.facebook.com/ahmed.meto.3150", label: "Facebook" },
  { icon: <FaBehance />, href: "https://www.behance.net/ahmedmeto4", label: "Behance" },
  { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/ahmed-metwlly-20804026b/", label: "LinkedIn" },
];

const up = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] },
});

function Hero() {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className="hero">
      <div className="hero-blobs">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
      </div>
      <div className="hero-particles">
        {Array.from({ length: 20 }).map((_, i) => (
          <span key={i} className="particle" style={{ '--i': i }} />
        ))}
      </div>
      <div className="hero-overlay" />

      <div className="hero-content">
        <motion.div {...up(0.2)} className="hero-badge">
          <span className="hero-badge-dot" />
          Available for new projects
        </motion.div>

        <motion.h1 {...up(0.35)} className="hero-title">
          Ahmed
          <br />
          <span className="hero-title-gradient">Metwaly</span>
        </motion.h1>

        <motion.div {...up(0.5)} className="hero-subtitle">
          <span className="hero-subtitle-prefix">I&apos;m a</span>
          <Typewriter
            options={{
              strings: [
                "Senior Graphic Designer",
                "Senior Motion Graphics ",
                
                
              ],
              autoStart: true,
              loop: true,
              deleteSpeed: 40,
              delay: 65,
            }}
          />
        </motion.div>

        <motion.div {...up(0.65)} className="hero-ctas">
          <button className="btn-primary" onClick={() => scrollTo("projects")}>
            View My Work
          </button>
          <button className="btn-outline" onClick={() => scrollTo("contact")}>
            Contact Me
          </button>
        </motion.div>

        <motion.div {...up(0.8)} className="hero-socials">
          {SOCIALS.map(({ icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-link"
              aria-label={label}
            >
              {icon}
            </a>
          ))}
        </motion.div>
      </div>

      <motion.div
        className="hero-scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.8 }}
        onClick={() => scrollTo("about")}
      >
        <div className="hero-scroll-line" />
        <span>scroll</span>
      </motion.div>
    </section>
  );
}

export default Hero;
