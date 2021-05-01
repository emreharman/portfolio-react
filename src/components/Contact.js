import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.div
      className="content"
      initial={{ rotateY: "-90", x: "-200" }}
      animate={{ rotateY: 0, x: 0 }}
      transition={{ delay: 0.5, duration: 0.5, type: "spring" }}
    >
      <h2 style={{ marginBottom: "0.5rem" }}>Contact Me</h2>
      <hr />
      <div className="contact">
        <div className="contact-item">
          <p>Follow me on Twitter</p>
          <p>
            <a
              target="_blank"
              href="https://twitter.com/yazilimci1baba"
              style={{ color: "#1DA1F2" }}
            >
              <motion.i
                className="fab fa-twitter"
                whileHover={{ y: [0, -10, 0, -10, 0] }}
                transition={{
                  duration: 1,
                }}
              ></motion.i>
            </a>
          </p>
        </div>
        <div className="contact-item">
          <p>Follow me on LinkedIn</p>
          <p>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/emre-harman-2671481a6/"
              style={{ color: "#0072b1" }}
            >
              <motion.i
                className="fab fa-linkedin"
                whileHover={{ y: [0, -10, 0, -10, 0] }}
                transition={{
                  duration: 1,
                }}
              ></motion.i>
            </a>
          </p>
        </div>
        <div className="contact-item">
          <p>Follow me on GitHub</p>
          <p>
            <a
              target="_blank"
              href="https://github.com/emreharman"
              style={{ color: "#211F1F" }}
            >
              <motion.i
                className="fab fa-github"
                whileHover={{ y: [0, -10, 0, -10, 0] }}
                transition={{
                  duration: 1,
                }}
              ></motion.i>
            </a>
          </p>
        </div>
        <div className="contact-item">
          <p>Send me e-mail</p>
          <p>
            <a href="mailto:emrehrmn@gmail.com" style={{ color: "#6a737b" }}>
              <motion.i
                className="fas fa-paper-plane"
                whileHover={{ y: [0, -10, 0, -10, 0] }}
                transition={{
                  duration: 1,
                }}
              ></motion.i>
            </a>
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
