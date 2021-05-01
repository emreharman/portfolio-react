import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <div className="header">
      <div className="header-item">
        <motion.div
          whileHover={{
            color: "#23049d",
            scale: 1.1,
            transition: { duration: 0.3 },
          }}
          whileTap={{ scale: 0.9 }}
        >
          <Link to="/">
            <i className="fas fa-user-tag"></i>&emsp; ABOUT
          </Link>
        </motion.div>
      </div>
      <div className="header-item">
        <motion.div
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.3 },
          }}
          whileTap={{ scale: 0.9 }}
        >
          <Link to="/works">
            <i className="fas fa-laptop-code"></i>&emsp;WORKS
          </Link>
        </motion.div>
      </div>
      <div className="header-item">
        <motion.div
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.3 },
          }}
          whileTap={{ scale: 0.9 }}
        >
          <Link to="/contact-me">
            <i className="fas fa-at"></i>&emsp;CONTACT ME
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Header;
