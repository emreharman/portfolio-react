import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import LeftSide from "./components/LeftSide";
import About from "./components/About";
import Works from "./components/Works";
import Contact from "./components/Contact";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  return (
    <Router>
      <motion.div
        className="App"
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
        transition={{ ease: "easeInOut", duration: 0.5 }}
      >
        <div className="header-container">
          <Header />
        </div>
        <div className="content-container">
          <LeftSide />
          <div className="right-side">
            <Switch>
              <Route path="/" exact>
                <About />
              </Route>
              <Route path="/works">
                <Works />
              </Route>
              <Route path="/contact-me">
                <Contact />
              </Route>
            </Switch>
          </div>
        </div>
      </motion.div>
    </Router>
  );
}

export default App;
