import React, { useState } from "react";
import "./Projects.css";

// 🖼️ صور Social
import so1 from "../assest/so1.jpg";
import so2 from "../assest/so2.jpg";
import so3 from "../assest/so3.jpg";
import so4 from "../assest/so4.png";
import so6 from "../assest/so6.jpg";
import so7 from "../assest/so7.jpg";
import so8 from "../assest/so8.jpg";
import so9 from "../assest/so9.jpg";
import so10 from "../assest/so10.jpg";
import so11 from "../assest/so11.jpg";
import so12 from "../assest/so12.jpg";
import so13 from "../assest/so13.jpg";
import so14 from "../assest/so14.jpg";
import so15 from "../assest/so15.jpg";
import so16 from "../assest/so16.jpg";
import so17 from "../assest/so17.jpg";

// 🎬 فيديوهات Motion
import ved1 from "../motion/Ved1.mp4";
import ved2 from "../motion/Ved2.mp4";
import ved3 from "../motion/Ved3.mp4";
import ved4 from "../motion/Ved4.mp4";
import ved5 from "../motion/Ved5.mp4";

// 📄 ملفات PDF & فيديو للـ Branding
import brandPDF1 from "../branding/logo1.pdf";
import brandPDF2 from "../branding/logo2.pdf";
import brandVideo from "../branding/icone.mp4";

function Projects() {
  const [activeTab, setActiveTab] = useState("all");

  const projects = [
    // ✨ Branding
    { id: 1, title: "Brand PDF 1", category: "branding", type: "pdf", img: brandPDF1 },
    { id: 2, title: "Brand PDF 2", category: "branding", type: "pdf", img: brandPDF2 },
    { id: 3, title: "Branding Video", category: "branding", type: "video", img: brandVideo },

    // 🖼️ Social
    { id: 4, title: "Instagram Post", category: "social", type: "image", img: so1 },
    { id: 5, title: "Instagram Post", category: "social", type: "image", img: so2 },
    { id: 6, title: "Instagram Post", category: "social", type: "image", img: so3 },
    { id: 7, title: "Instagram Post", category: "social", type: "image", img: so4 },
    { id: 8, title: "Instagram Post", category: "social", type: "image", img: so6 },
    { id: 9, title: "Instagram Post", category: "social", type: "image", img: so7 },
    { id: 10, title: "Instagram Post", category: "social", type: "image", img: so8 },
    { id: 11, title: "Instagram Post", category: "social", type: "image", img: so9 },
    { id: 12, title: "Instagram Post", category: "social", type: "image", img: so10 },
    { id: 13, title: "Instagram Post", category: "social", type: "image", img: so11 },
    { id: 14, title: "Instagram Post", category: "social", type: "image", img: so12 },
    { id: 15, title: "Instagram Post", category: "social", type: "image", img: so13 },
    { id: 16, title: "Instagram Post", category: "social", type: "image", img: so14 },
    { id: 17, title: "Instagram Post", category: "social", type: "image", img: so15 },
    { id: 18, title: "Instagram Post", category: "social", type: "image", img: so16 },
    { id: 19, title: "Instagram Post", category: "social", type: "image", img: so17 },

    // 🎬 Motion Videos محليًا
    { id: 20, title: "Motion Video 1", category: "motion", type: "video", img: ved1 },
    { id: 21, title: "Motion Video 2", category: "motion", type: "video", img: ved2 },
    { id: 22, title: "Motion Video 3", category: "motion", type: "video", img: ved3 },
    { id: 23, title: "Motion Video 4", category: "motion", type: "video", img: ved4 },
    { id: 24, title: "Motion Video 5", category: "motion", type: "video", img: ved5 },
  ];

  const filteredProjects =
    activeTab === "all" ? projects : projects.filter((p) => p.category === activeTab);

  return (
    <section className="projects">
      <h2 className="projects-title">My Projects</h2>

      {/* التابات */}
      <div className="tabs">
        <button className={activeTab === "motion" ? "active" : ""} onClick={() => setActiveTab("motion")}>
          Motion Graphics
        </button>
        <button className={activeTab === "social" ? "active" : ""} onClick={() => setActiveTab("social")}>
          Social Media
        </button>
        <button className={activeTab === "branding" ? "active" : ""} onClick={() => setActiveTab("branding")}>
          Branding
        </button>
      </div>

      {/* عرض المشاريع */}
      <div className="projects-grid">
        {filteredProjects.map((project) => (
         <div
         key={project.id}
         className={`project-card ${project.category === "branding" ? "branding-card" : ""}`}
       >
            {project.type === "video" ? (
              <video controls width="100%">
                <source src={project.img} type="video/mp4" />
                متصفحك لا يدعم تشغيل الفيديو.
              </video>
            ) : project.type === "pdf" ? (
              <iframe
                src={project.img}
                width="100%"
                height="400px"
                title={project.title}
                style={{ border: "none" }}
              ></iframe>
            ) : (
              <img src={project.img} alt={project.title} />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
