import React from "react";
import { motion } from "framer-motion";

const Works = () => {
  return (
    <motion.div
      className="content"
      initial={{ rotateY: "-90", x: "-200" }}
      animate={{ rotateY: 0, x: 0 }}
      transition={{ delay: 0.5, duration: 0.5, type: "spring" }}
    >
      <h3 style={{ marginBottom: "0.5rem", textAlign: "center" }}>
        These are some of my works. You can find more in my{" "}
        <a
          target="_blank"
          href="https://github.com/emreharman"
          style={{ textDecoration: "underline", color: "orange" }}
        >
          {" "}
          GitHub profile
        </a>
      </h3>
      <div className="works">
        <div className="works-item">
          <div className="works-item-img">
            <img
              src="https://raw.githubusercontent.com/emreharman/e-commerce-with-react-redux/master/src/img/e-commerce.gif"
              alt=""
            />
          </div>
          <div className="works-item-header">
            <a
              target="_blank"
              href="https://github.com/emreharman/e-commerce-with-react-redux"
              style={{ padding: "0 4px", textAlign: "center" }}
            >
              E- Commerce with React and Redux
            </a>
          </div>
          <div className="works-item-button">
            <a
              target="_blank"
              href="https://github.com/emreharman/e-commerce-with-react-redux"
            >
              <i className="fas fa-code"></i>&ensp;Source Code
            </a>
          </div>
        </div>
        <div className="works-item">
          <div className="works-item-img">
            <img
              src="https://raw.githubusercontent.com/emreharman/my-bookshelf/master/src/img/bookshelf.gif"
              alt=""
            />
          </div>
          <div className="works-item-header">
            <a
              target="_blank"
              href="https://github.com/emreharman/my-bookshelf"
              style={{ padding: "0 4px", textAlign: "center" }}
            >
              My Bookshelf with React and Redux
            </a>
          </div>
          <div className="works-item-button">
            <a
              target="_blank"
              href="https://github.com/emreharman/my-bookshelf"
            >
              <i className="fas fa-code"></i>&ensp;Source Code
            </a>
          </div>
        </div>
        <div className="works-item">
          <div className="works-item-img">
            <img
              src="https://raw.githubusercontent.com/emreharman/my-dentist/master/src/img/my-dentist-preview.gif"
              alt=""
            />
          </div>
          <div className="works-item-header">
            <a
              target="_blank"
              href="https://github.com/emreharman/my-dentist"
              style={{ padding: "0 4px", textAlign: "center" }}
            >
              My Dentist with React
            </a>
          </div>
          <div className="works-item-button">
            <a target="_blank" href="https://github.com/emreharman/my-dentist">
              <i className="fas fa-code"></i>&ensp;Source Code
            </a>
          </div>
        </div>
        <div className="works-item">
          <div className="works-item-img">
            <img
              src="https://raw.githubusercontent.com/emreharman/weather-app-react/master/src/img/weather-app.gif"
              alt=""
            />
          </div>
          <div className="works-item-header">
            <a
              target="_blank"
              href="https://github.com/emreharman/weather-app-react"
              style={{ padding: "0 4px", textAlign: "center" }}
            >
              Weather App with React
            </a>
          </div>
          <div className="works-item-button">
            <a
              target="_blank"
              href="https://github.com/emreharman/weather-app-react"
            >
              <i className="fas fa-code"></i>&ensp;Source Code
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Works;
