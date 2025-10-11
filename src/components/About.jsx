import React from "react";
import "./About.css";
import { useInView } from "react-intersection-observer";
import { SiAdobephotoshop, SiAdobeillustrator, SiAdobeaftereffects, SiAdobepremierepro } from "react-icons/si";
import  myimage from "../assest/ahmed.png";
function About() {
  const { ref, inView } = useInView({
    triggerOnce: true, // يشتغل مرة واحدة بس
    threshold: 0.3,    // يبدأ لما 30% من العنصر يبان
  });

  const skills = [
    { name: "Photoshop", level: "95%", icon: <SiAdobephotoshop className="icon photoshop" /> },
    { name: "Illustrator", level: "95%", icon: <SiAdobeillustrator className="icon illustrator" /> },
    { name: "After Effects", level: "95%", icon: <SiAdobeaftereffects className="icon aftereffects" /> },
    { name: "Premiere", level: "85%", icon: <SiAdobepremierepro className="icon premiere" /> },
  ];

  return (
    <section className="about" ref={ref}>
      <div className="about-container">
        {/* الصورة */}
        <div className={`about-image ${inView ? "show" : ""}`}>
          <img 
            src={myimage}  
            alt="about" 
          />
        </div>

        {/* النص + المهارات */}
        <div className="about-text">
          <h2>Hello 👋 I am Ahmed</h2>
          <p>
          Senior Graphic & Motion Designer with 5 years of experience across apparel prepress, advertising, and travel & tourism marketing. Led teams of 4–6 designers, standardized creative pipelines, and delivered Arabic/English campaigns for fashion, F&B, automotive, and tourism brands. Proficient in Photoshop, Illustrator, After Effects, Premiere Pro, and prepress (color separation, trapping, halftones).
          </p>

          <h3 className="skills-title">My Skills</h3>
          {skills.map((skill, i) => (
            <div key={i} className="skill">
              <div className="skill-info">
                {skill.icon}
                <span>{skill.name}</span>
              </div>
              <div className="progress">
                <div
                  className="progress-bar"
                  style={{ width: inView ? skill.level : "0%" }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
