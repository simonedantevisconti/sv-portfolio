import { motion } from "framer-motion";
import { HiSquares2X2 } from "react-icons/hi2";
import { BsBinocularsFill } from "react-icons/bs";
import {
  FaBars,
  FaCircle,
  FaCode,
  FaEnvelope,
  FaMoon,
  FaSun,
  FaXmark,
} from "react-icons/fa6";
import { useContext, useState } from "react";
import SocialLinks from "./SocialLinks";
import { ThemeContext } from "../context/ThemeContext.js";

const Sidebar = () => {
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (event, href) => {
    event.preventDefault();
    setMenuOpen(false);

    window.setTimeout(() => {
      const section = document.querySelector(href);
      const target =
        href === "#home" ? section : section?.querySelector("h2") || section;

      if (target) {
        const headerOffset = window.innerWidth <= 576 ? 68 : 76;
        const top =
          target.getBoundingClientRect().top +
          window.scrollY -
          headerOffset;

        window.scrollTo({
          top,
          behavior: "smooth",
        });

        window.history.replaceState(null, "", href);
      }
    }, 340);
  };

  const navItems = [
    {
      href: "#home",
      label: "Home",
      icon: <HiSquares2X2 />,
    },
    {
      href: "#servizi",
      label: "Servizi",
      icon: <FaCode />,
    },
    {
      href: "#progetti",
      label: "Progetti",
      icon: <BsBinocularsFill />,
    },
    {
      href: "#about",
      label: "Chi sono",
      icon: <FaCircle />,
    },
    {
      href: "#contatti",
      label: "Contatti",
      icon: <FaEnvelope />,
    },
  ];

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

        <div className="mobile-menu-head">
          <motion.h3
            className="profile-name"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }}
          >
            Simone Visconti
          </motion.h3>

          <button
            type="button"
            className="mobile-menu-toggle"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-expanded={menuOpen}
            aria-controls="main-navigation"
            aria-label={menuOpen ? "Chiudi menu" : "Apri menu"}
          >
            {menuOpen ? <FaXmark /> : <FaBars />}
          </button>
        </div>

        <div className={`mobile-menu-panel ${menuOpen ? "open" : ""}`}>
          <nav
            id="main-navigation"
            className="side-nav"
            aria-label="Navigazione principale"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="side-link"
                onClick={(event) => handleNavClick(event, item.href)}
              >
                <span className="side-icon">{item.icon}</span>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="mobile-theme-row">
            <div>
              <span className="mobile-theme-label">Tema</span>
              <span className="mobile-theme-value">
                {darkMode ? "Scuro" : "Chiaro"}
              </span>
            </div>

            <button
              type="button"
              className="theme-toggle mobile-theme-toggle"
              onClick={toggleTheme}
              aria-label="Cambia tema"
            >
              <div className={`toggle-switch ${darkMode ? "active" : ""}`}>
                <div className="toggle-thumb">
                  {darkMode ? <FaMoon /> : <FaSun />}
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>

      <div className="sidebar-middle">
        <button
          type="button"
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label="Cambia tema"
        >
          <div className={`toggle-switch ${darkMode ? "active" : ""}`}>
            <div className="toggle-thumb">
              {darkMode ? <FaMoon /> : <FaSun />}
            </div>
          </div>
        </button>
      </div>

      <div className="sidebar-bottom">
        <SocialLinks />
      </div>
    </motion.div>
  );
};

export default Sidebar;
