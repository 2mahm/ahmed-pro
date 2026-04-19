import React, { useEffect, useRef, useCallback } from "react";
import "./CustomCursor.css";

function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const pos = useRef({ x: -100, y: -100 });
  const ring = useRef({ x: -100, y: -100 });
  const rafId = useRef(null);

  const animate = useCallback(() => {
    ring.current.x += (pos.current.x - ring.current.x) * 0.12;
    ring.current.y += (pos.current.y - ring.current.y) * 0.12;
    if (ringRef.current) {
      ringRef.current.style.transform = `translate(${ring.current.x}px, ${ring.current.y}px) translate(-50%, -50%)`;
    }
    rafId.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    const dot = dotRef.current;
    const ringEl = ringRef.current;
    if (!dot || !ringEl) return;

    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
      dot.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
    };

    const onEnter = () => {
      dot.classList.add("cursor-hover");
      ringEl.classList.add("cursor-hover");
    };

    const onLeave = () => {
      dot.classList.remove("cursor-hover");
      ringEl.classList.remove("cursor-hover");
    };

    const bindLinks = () => {
      document.querySelectorAll("a, button, [role='button']").forEach(el => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
        el.addEventListener("mouseenter", onEnter);
        el.addEventListener("mouseleave", onLeave);
      });
    };

    document.addEventListener("mousemove", onMove);
    const observer = new MutationObserver(bindLinks);
    observer.observe(document.body, { childList: true, subtree: true });
    bindLinks();
    rafId.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", onMove);
      observer.disconnect();
      cancelAnimationFrame(rafId.current);
    };
  }, [animate]);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
}

export default CustomCursor;
