import React from "react";
import { FaWhatsapp, FaFacebook, FaBehance, FaLinkedin } from "react-icons/fa";
import "./Footer.css";

const SOCIALS = [
  { icon: <FaWhatsapp />, href: "https://wa.me/+201011033409", label: "WhatsApp" },
  { icon: <FaFacebook />, href: "https://www.facebook.com/ahmed.meto.3150", label: "Facebook" },
  { icon: <FaBehance />, href: "https://www.behance.net/ahmedmeto4", label: "Behance" },
  { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/ahmed-metwlly-20804026b/", label: "LinkedIn" },
];

function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="footer">
      <div className="footer-logo" onClick={scrollTop}>
        A<span className="logo-accent">M</span>
      </div>

      <p className="footer-copy">
        © {new Date().getFullYear()} Ahmed Metwaly. All rights reserved.
      </p>

      <div className="footer-socials">
        {SOCIALS.map(({ icon, href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social"
            aria-label={label}
          >
            {icon}
          </a>
        ))}
      </div>
    </footer>
  );
}

export default Footer;
