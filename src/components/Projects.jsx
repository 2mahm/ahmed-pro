import React, { useState } from "react";
import "./Projects.css";

// 🖼️ صور Social
import so1 from "../assest/so1.png";
import so2 from "../assest/so2.jpg";
import so3 from "../assest/so3.jpg";
import so4 from "../assest/so4.jpg";
import so6 from "../assest/so6.jpg";
import so7 from "../assest/so7.jpg";
import so8 from "../assest/so8.png";
import so9 from "../assest/so9.png";
import so10 from "../assest/so10.png";
import so11 from "../assest/so11.jpg";
import so12 from "../assest/so12.jpg";
import so13 from "../assest/so13.jpg";
import so14 from "../assest/so14.jpg";
import so15 from "../assest/so15.jpg";
import so16 from "../assest/so16.jpg";
import so17 from "../assest/so17.png";
import so18 from "../assest/so18.jpg";
import so19 from "../assest/so19.png";

// 🎬 فيديوهات Motion - استخدام المسارات العامة
const Ved1 = "/motion/Ved1.mp4";
const Ved2 = "/motion/Ved2.mp4";
const Ved3 = "/motion/Ved3.mp4";
const Ved4 = "/motion/Ved4.mp4";
const Ved5 = "/motion/Ved5.mp4";
const Ved6 = "/motion/Ved6.mp4";
const Ved7 = "/motion/Ved7.mp4";
const Ved8 = "/motion/Ved8.mp4";
const Ved9 = "/motion/Ved9.mp4";
const Ved10 = "/motion/Ved10.mp4";
const Ved11 = "/motion/Ved11.mp4";
const Ved12 = "/motion/Ved12.mp4";
const Ved13 = "/motion/Ved13.mp4";

// 📄 ملفات PDF & فيديو للـ Branding - استخدام المسارات العامة
const brandPDF1 = "/branding/logo1.pdf";
const brandPDF2 = "/branding/logo2.pdf";
const brandVideo = "/branding/icone.mp4";

function Projects() {
  const [activeTab, setActiveTab] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

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
    { id: 20, title: "Instagram Post", category: "social", type: "image", img: so18 },
    { id: 21, title: "Instagram Post", category: "social", type: "image", img: so19 },

    // 🎬 Motion Videos محليًا
    { id: 22, title: "Motion Video 1", category: "motion", type: "video", img: Ved1 },
    { id: 23, title: "Motion Video 2", category: "motion", type: "video", img: Ved2 },
    { id: 24, title: "Motion Video 3", category: "motion", type: "video", img: Ved3 },
    { id: 25, title: "Motion Video 4", category: "motion", type: "video", img: Ved4 },
    { id: 26, title: "Motion Video 5", category: "motion", type: "video", img: Ved5 },
    { id: 27, title: "Motion Video 6", category: "motion", type: "video", img: Ved6 },
    { id: 28, title: "Motion Video 7", category: "motion", type: "video", img: Ved7 },
    { id: 29, title: "Motion Video 8", category: "motion", type: "video", img: Ved8 },
    { id: 30, title: "Motion Video 9", category: "motion", type: "video", img: Ved9 },
    { id: 31, title: "Motion Video 10", category: "motion", type: "video", img: Ved10 },
    { id: 32, title: "Motion Video 11", category: "motion", type: "video", img: Ved11 },
    { id: 33, title: "Motion Video 12", category: "motion", type: "video", img: Ved12 },
    { id: 34, title: "Motion Video 13", category: "motion", type: "video", img: Ved13 },
  ];

  const filteredProjects = activeTab 
    ? projects.filter((p) => p.category === activeTab)
    : [];

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
      {activeTab && (
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
                height="300px"
                title={project.title}
                style={{ border: "none" }}
              ></iframe>
            ) : (
              <img 
                src={project.img} 
                alt={project.title}
                loading="lazy"
                onClick={() => setSelectedImage(project.img)}
                style={{ cursor: 'pointer' }}
              />
            )}
          </div>
        ))}
        </div>
      )}

      {/* Modal for full-size image */}
      {selectedImage && (
        <div className="image-modal" onClick={() => setSelectedImage(null)}>
          <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="image-modal-close" onClick={() => setSelectedImage(null)}>&times;</span>
            <img src={selectedImage} alt="Full size" />
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
