import React, { useEffect } from "react";
import { motion } from "framer-motion";
import "./LoadingScreen.css";

function LoadingScreen({ onComplete }) {
  useEffect(() => {
    const t = setTimeout(onComplete, 2700);
    return () => clearTimeout(t);
  }, [onComplete]);

  return (
    <motion.div
      className="loading-screen"
      exit={{ opacity: 0, transition: { duration: 0.7, ease: "easeInOut" } }}
    >
      <motion.div
        className="loading-logo"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <span>A</span>
        <span className="accent">M</span>
      </motion.div>

      <motion.div
        className="loading-bar-wrap"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.35, duration: 0.3 }}
      >
        <motion.div
          className="loading-bar-fill"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ delay: 0.55, duration: 1.7, ease: "easeInOut" }}
        />
      </motion.div>

      <motion.p
        className="loading-label"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.65, duration: 0.4 }}
      >
        Loading Portfolio
      </motion.p>
    </motion.div>
  );
}

export default LoadingScreen;
