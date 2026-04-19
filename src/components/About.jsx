import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAdobeaftereffects,
  SiAdobepremierepro,
} from "react-icons/si";
import myImage from "../assest/ahmed.png";
import "./About.css";

const SKILLS = [
  { name: "Photoshop", pct: 95, icon: <SiAdobephotoshop />, color: "#31a8ff" },
  { name: "Illustrator", pct: 95, icon: <SiAdobeillustrator />, color: "#ff9a00" },
  { name: "After Effects", pct: 95, icon: <SiAdobeaftereffects />, color: "#9999ff" },
  { name: "Premiere Pro", pct: 85, icon: <SiAdobepremierepro />, color: "#ea77ff" },
];

const STATS = [
  { value: "5+", label: "Years Exp." },
  { value: "100+", label: "Projects" },
  { value: "50+", label: "Clients" },
];

function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.12 });

  return (
    <section id="about" className="about" ref={ref}>
      <div className="section-header">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-tag">About Me</p>
          <h2 className="section-title">
            The Story <span>Behind the Design</span>
          </h2>
        </motion.div>
      </div>

      <div className="about-grid">
        {/* Image */}
        <motion.div
          className="about-image-wrap"
          initial={{ opacity: 0, x: -48 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="about-image-frame">
            <div className="about-image-border" />
            <img src={myImage} alt="Ahmed Metwaly" />
          </div>
          <div className="about-image-glow" />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 48 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="about-bio">
            Senior Graphic &amp; Motion Designer with <strong>5+ years of experience</strong> across
            apparel prepress, advertising, and travel &amp; tourism marketing. I&apos;ve led teams of
            4–6 designers, standardized creative pipelines, and delivered bilingual campaigns
            for fashion, F&amp;B, automotive, and tourism brands. Proficient in prepress workflows
            including color separation, trapping, and halftone production.
          </p>

          <div className="about-stats">
            {STATS.map((s, i) => (
              <motion.div
                key={i}
                className="stat-card"
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
              >
                <div className="stat-number">{s.value}</div>
                <div className="stat-label">{s.label}</div>
              </motion.div>
            ))}
          </div>

          <div className="skill-bars">
            {SKILLS.map((skill, i) => (
              <div key={i} className="skill-item">
                <div className="skill-header">
                  <div className="skill-name">
                    <span
                      className="skill-icon-badge"
                      style={{ background: skill.color }}
                    >
                      {skill.icon}
                    </span>
                    {skill.name}
                  </div>
                  <span className="skill-pct">{skill.pct}%</span>
                </div>
                <div className="skill-track">
                  <motion.div
                    className="skill-fill"
                    initial={{ scaleX: 0 }}
                    animate={inView ? { scaleX: 1 } : {}}
                    transition={{
                      duration: 1.3,
                      delay: 0.5 + i * 0.1,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    style={{ width: `${skill.pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
