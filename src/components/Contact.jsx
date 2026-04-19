import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaWhatsapp, FaFacebook, FaBehance, FaLinkedin } from "react-icons/fa";
import { FiMail, FiPhone, FiCheckCircle } from "react-icons/fi";
import "./Contact.css";

const SOCIALS = [
  { icon: <FaWhatsapp />, href: "https://wa.me/+201011033409", label: "WhatsApp" },
  { icon: <FaFacebook />, href: "https://www.facebook.com/ahmed.meto.3150", label: "Facebook" },
  { icon: <FaBehance />, href: "https://www.behance.net/ahmedmeto4", label: "Behance" },
  { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/ahmed-metwlly-20804026b/", label: "LinkedIn" },
];

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const handleChange = (e) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSent(true);
    }, 1200);
  };

  return (
    <section id="contact" className="contact" ref={ref}>
      <div className="section-header">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-tag">Contact</p>
          <h2 className="section-title">
            Let&apos;s Work <span>Together</span>
          </h2>
        </motion.div>
      </div>

      <div className="contact-inner">
        {/* Quick contact pills */}
        <motion.div
          className="contact-info-row"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <a href="mailto:ahmed.metwaly@email.com" className="contact-info-pill">
            <FiMail /> ahmed.metwaly@email.com
          </a>
          <a href="https://wa.me/+201011033409" target="_blank" rel="noopener noreferrer" className="contact-info-pill">
            <FiPhone /> +20 101 103 3409
          </a>
        </motion.div>

        {/* Form / Success */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          {sent ? (
            <div className="form-success">
              <div className="success-icon">
                <FiCheckCircle />
              </div>
              <p className="success-title">Message sent!</p>
              <p className="success-sub">Thank you for reaching out. I&apos;ll get back to you soon.</p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="form-row">
                <div className="field-wrap">
                  <label className="field-label" htmlFor="name">Name</label>
                  <input
                    id="name"
                    name="name"
                    className="field-input"
                    type="text"
                    placeholder="Your name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="field-wrap">
                  <label className="field-label" htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    className="field-input"
                    type="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="field-wrap">
                <label className="field-label" htmlFor="subject">Subject</label>
                <input
                  id="subject"
                  name="subject"
                  className="field-input"
                  type="text"
                  placeholder="Project inquiry, collaboration..."
                  value={form.subject}
                  onChange={handleChange}
                />
              </div>

              <div className="field-wrap">
                <label className="field-label" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="field-textarea"
                  placeholder="Tell me about your project..."
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button
                type="submit"
                className="submit-btn"
                disabled={sending}
              >
                {sending ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </motion.div>

        {/* Social links */}
        <motion.div
          className="contact-socials"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {SOCIALS.map(({ icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-social-link"
              aria-label={label}
            >
              {icon}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
