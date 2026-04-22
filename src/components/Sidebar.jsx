import { motion } from "framer-motion";
import { HiSquares2X2 } from "react-icons/hi2";
import { BsBinocularsFill } from "react-icons/bs";
import { FaCircle, FaMoon, FaSun } from "react-icons/fa6";
import { useContext } from "react";
import SocialLinks from "./SocialLinks";
import { ThemeContext } from "../context/ThemeContext";

const Sidebar = () => {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <motion.div
      className="sidebar-card"
      initial={{ x: -40, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="sidebar-top">
        <motion.div
          className="profile-wrap"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.7 }}
        >
          <img
            src="/foto-round.png"
            alt="Simone Dante Visconti"
            className="profile-image"
          />
        </motion.div>

        <motion.h3
          className="profile-name"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.6 }}
        >
          Simone Visconti
        </motion.h3>

        <nav className="side-nav">
          <a href="#home" className="side-link active">
            <span className="side-icon">
              <HiSquares2X2 />
            </span>
            Home
          </a>

          <a href="#progetti" className="side-link">
            <span className="side-icon">
              <BsBinocularsFill />
            </span>
            Progetti
          </a>

          <a href="#about" className="side-link">
            <span className="side-icon">
              <FaCircle />
            </span>
            Chi sono
          </a>
        </nav>
      </div>

      <div className="sidebar-middle">
        <div className="theme-toggle" onClick={toggleTheme}>
          <div className={`toggle-switch ${darkMode ? "active" : ""}`}>
            <div className="toggle-thumb">
              {darkMode ? <FaMoon /> : <FaSun />}
            </div>
          </div>
        </div>
      </div>

      <div className="sidebar-bottom">
        <SocialLinks />
      </div>
    </motion.div>
  );
};

export default Sidebar;
