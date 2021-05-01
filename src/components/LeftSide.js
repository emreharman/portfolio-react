import React from "react";
import { motion } from "framer-motion";

const LeftSide = () => {
  return (
    <div className="left-side">
      <motion.div
        className="left-img"
        initial={{ y: "-200", opacity: 0 }}
        animate={{ y: 0, opacity: 0.7 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <img
          src="https://st3.myideasoft.com/idea/ct/82/myassets/blogs/fron-end-developer-becerileri.jpg"
          alt=""
        />
      </motion.div>
      <motion.div
        className="profile-img"
        initial={{ x: "-150", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <img
          src="https://emreharman.com/Template/img/Avatar-Maker.png"
          alt=""
        />
      </motion.div>
      <div className="job-name">
        <motion.h5
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          Frontend Developer
        </motion.h5>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <small>
            <i className="fas fa-map-marker-alt"></i>&nbsp;Turkey
          </small>
        </motion.p>
        <motion.div
          className="social-block"
          initial={{ y: "+100", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <motion.div
            className="social"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <a target="_blank" href="https://github.com/emreharman">
              <i className="fab fa-github"></i>
            </a>
          </motion.div>
          <motion.div
            className="social"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
          >
            <a target="_blank" href="https://twitter.com/yazilimci1baba">
              <i className="fab fa-twitter"></i>
            </a>
          </motion.div>
          <motion.div
            className="social"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 0.5 }}
          >
            <a
              target="_blank"
              href="https://www.linkedin.com/in/emre-harman-2671481a6/"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        className="skills"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <motion.div
          className="skills-img"
          initial={{ rotateZ: [0] }}
          animate={{ rotateZ: [0, 360] }}
          transition={{
            delay: 0,
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png"
            alt=""
          />
        </motion.div>
        <motion.div
          className="skills-img"
          initial={{ rotateZ: [360] }}
          animate={{ rotateZ: [360, 0] }}
          transition={{
            delay: 0,
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <img
            src="https://everyday.codes/wp-content/uploads/2020/01/0-U2DmhXYumRyXH6X1.png"
            alt=""
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default LeftSide;
