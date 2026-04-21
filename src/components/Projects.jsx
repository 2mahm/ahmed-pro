import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiMaximize2, FiX, FiChevronDown } from "react-icons/fi";

import so1 from "../assest/so1.jpg";
import so2 from "../assest/so2.jpg";
import so3 from "../assest/so3.png";
import so4 from "../assest/so4.png";
import so6 from "../assest/so6.jpg";
import so7 from "../assest/so7.jpg";
import so8 from "../assest/so8.png";
import so9 from "../assest/so9.png";
import so10 from "../assest/so10.jpg";
import so11 from "../assest/so11.jpg";
import so12 from "../assest/so12.png";
import so13 from "../assest/so13.jpg";
import so14 from "../assest/so14.png";
import so15 from "../assest/so15.jpg";
import so16 from "../assest/so16.jpg";
import so17 from "../assest/so17.png";
import so18 from "../assest/so18.jpg";
import so19 from "../assest/so19.jpg";
import so20 from "../assest/so20.jpg";
import so21 from "../assest/so21.png";
import so22 from "../assest/so22.png";
import so23 from "../assest/so23.jpg";
import so24 from "../assest/so24.png";
import so25 from "../assest/so25.jpg";
import so26 from "../assest/so26.jpg";
import so27 from "../assest/so27.png";
import so28 from "../assest/so28.png";
import so30 from "../assest/so30.png";

import "./Projects.css";

const MOTION_VIDS = Array.from({ length: 17 }, (_, i) => `/motion/Ved${i + 1}.mp4`);
const BRAND_PDFS = ["/branding/logo1.pdf", "/branding/logo2.pdf"];
const BRAND_VID = "/branding/icone.mp4";

const SOCIAL_IMGS = [
  so1, so2, so3, so4, so6, so7, so8, so9, so10,
  so11, so12, so13, so14, so15, so16, so17, so18, so19,so20,so21,so22,so23,so24,so25,so26,so27,so28,so30
];

const ALL_PROJECTS = [
  ...MOTION_VIDS.map((src, i) => ({
    id: `m${i}`, category: "motion", type: "video", src,
  })),
  ...SOCIAL_IMGS.map((src, i) => ({
    id: `s${i}`, category: "social", type: "image", src,
  })),
  ...BRAND_PDFS.map((src, i) => ({
    id: `bp${i}`, category: "branding", type: "pdf", src,
  })),
  { id: "bv0", category: "branding", type: "video", src: BRAND_VID },
];

const TABS = ["All", "Motion", "Social", "Branding"];

function Projects() {
  const [tab, setTab] = useState("All");
  const [lightbox, setLightbox] = useState(null);
  const [showMore, setShowMore] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.08 });

  const filtered = tab === "All"
    ? ALL_PROJECTS
    : ALL_PROJECTS.filter(p => p.category === tab.toLowerCase());

  return (
    <section id="projects" className="projects" ref={ref}>
      <div className="section-header">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-tag">Portfolio</p>
          <h2 className="section-title">
            My <span>Creative Work</span>
          </h2>
        </motion.div>
      </div>

      <div className="projects-inner">

        {/* Featured main video */}
        <motion.div
          className="main-video-wrap"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <video
            className="main-video"
            controls
            preload="metadata"
          >
            <source src="/motion/Main.mp4" type="video/mp4" />
          </video>
          <span className="main-video-label">Featured Work</span>
        </motion.div>

        {/* See More button */}
        {!showMore && (
          <motion.div
            className="see-more-wrap"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <button className="btn-see-more" onClick={() => setShowMore(true)}>
              See More
              <FiChevronDown className="see-more-icon" />
            </button>
          </motion.div>
        )}

        {/* Tabs + grid revealed on click */}
        <AnimatePresence>
          {showMore && (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Filter tabs */}
              <div className="filter-row">
                {TABS.map(t => (
                  <button
                    key={t}
                    className={`filter-btn${tab === t ? " active" : ""}`}
                    onClick={() => setTab(t)}
                  >
                    {t}
                  </button>
                ))}
              </div>

              {/* Grid */}
              <motion.div className="proj-grid" layout>
                <AnimatePresence mode="popLayout">
                  {filtered.length === 0 && (
                    <motion.div
                      key="empty"
                      className="proj-empty"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      No items in this category.
                    </motion.div>
                  )}

                  {filtered.map((proj, i) => (
                    <motion.div
                      key={proj.id}
                      className={`proj-card${proj.type === "video" ? " proj-card--video" : ""}`}
                      layout
                      initial={{ opacity: 0, y: 24, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.92 }}
                      transition={{ duration: 0.4, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
                      onClick={() => {
                        if (proj.type === "image") setLightbox(proj.src);
                      }}
                    >
                      {proj.type === "image" && (
                        <div className="proj-media">
                          <img src={proj.src} alt="" loading="lazy" />
                          <div className="proj-overlay">
                            <div className="proj-expand"><FiMaximize2 /></div>
                          </div>
                          <span className="proj-badge">{proj.category}</span>
                        </div>
                      )}

                      {proj.type === "video" && (
                        <div className="proj-media">
                          <video controls preload="metadata">
                            <source src={proj.src} type="video/mp4" />
                          </video>
                          <span className="proj-badge">{proj.category}</span>
                        </div>
                      )}

                      {proj.type === "pdf" && (
                        <div className="proj-iframe-box">
                          <iframe src={proj.src} title={proj.id} />
                          <span className="proj-badge">{proj.category}</span>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setLightbox(null)}
          >
            <motion.div
              className="lightbox-content"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              onClick={e => e.stopPropagation()}
            >
              <button className="lightbox-close" onClick={() => setLightbox(null)} aria-label="Close">
                <FiX />
              </button>
              <img src={lightbox} alt="Preview" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Projects;
