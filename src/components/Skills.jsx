import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAdobeindesign,
  SiAdobelightroom,
  SiAdobeaftereffects,
  SiAdobepremierepro,
  SiFigma,
} from "react-icons/si";
import { FaLayerGroup, FaFont, FaInstagram, FaPrint, FaRobot } from "react-icons/fa";
import "./Skills.css";

const CATEGORIES = [
  {
    label: "Design Tools",
    items: [
      { name: "Photoshop", icon: <SiAdobephotoshop />, color: "#31a8ff" },
      { name: "Illustrator", icon: <SiAdobeillustrator />, color: "#ff9a00" },

      { name: "AI Tools", icon: <FaRobot />, color: "#10b981" },
      { name: "Figma", icon: <SiFigma />, color: "#f24e1e" },
    ],
  },
  {
    label: "Motion & Video",
    items: [
      { name: "After Effects", icon: <SiAdobeaftereffects />, color: "#9999ff" },
      { name: "Premiere Pro", icon: <SiAdobepremierepro />, color: "#ea77ff" },
    ],
  },
  {
    label: "Creative Skills",
    items: [
      { name: "Brand Identity", icon: <FaLayerGroup />, color: "#8b5cf6" },
      { name: "Typography", icon: <FaFont />, color: "#ec4899" },
      { name: "Social Media", icon: <FaInstagram />, color: "#e1306c" },
      { name: "Print & Prepress", icon: <FaPrint />, color: "#f59e0b" },
    ],
  },
];

function Skills() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="skills" className="skills" ref={ref}>
      <div className="section-header">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-tag">Skills</p>
          <h2 className="section-title">
            Tools &amp; <span>Expertise</span>
          </h2>
        </motion.div>
      </div>

      <div className="skills-wrapper">
        <div className="skills-categories">
          {CATEGORIES.map((cat, ci) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: ci * 0.12 }}
            >
              <div className="category-label">{cat.label}</div>
              <div className="skills-row">
                {cat.items.map((item, ii) => (
                  <motion.div
                    key={item.name}
                    className="skill-card"
                    initial={{ opacity: 0, scale: 0.75 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      duration: 0.4,
                      delay: ci * 0.12 + ii * 0.055,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <span className="sc-icon" style={{ color: item.color }}>
                      {item.icon}
                    </span>
                    <span className="sc-name">{item.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
