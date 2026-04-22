import { motion } from "framer-motion";
import { HiArrowDown } from "react-icons/hi";
import ProjectsSection from "./ProjectsSection";
import AboutSection from "./AboutSection";
import TypedText from "./TypedText";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const HeroSection = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <section className="hero-section" id="home">
      <div className="hero-inner container-fluid">
        <motion.div
          className="hero-mark"
          initial={{ scale: 0.7, opacity: 0, rotate: -12 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <img
            src={darkMode ? "/logo-grey-rounded.png" : "/logo-rounded.png"}
            alt="Logo Simone Visconti"
            className="hero-logo"
          />
        </motion.div>

        <div className="hero-copy">
          <div className="hero-line">
            <span className="line-number">01</span>
            <h1>
              <TypedText text="< Ciao, sono Simone />" speed={35} delay={200} />
            </h1>
          </div>

          <div className="hero-line">
            <span className="line-number">02</span>
            <h2>
              <TypedText text="< e sono un " speed={35} delay={1400} />
            </h2>
          </div>

          <div className="hero-line">
            <span className="line-number">03</span>
            <h2>
              <TypedText text="Web Developer />" speed={35} delay={2600} />
            </h2>
          </div>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.6, duration: 0.7 }}
          >
            Sviluppo siti web, landing page e interfacce React con attenzione a
            design, animazioni, responsive e identità visiva.
          </motion.p>

          <motion.div
            className="hero-cta-wrap"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.9, duration: 0.7 }}
          >
            <a href="#progetti" className="learn-more-btn">
              <span>Scopri di più</span>
              <span className="learn-icon">
                <HiArrowDown />
              </span>
            </a>
          </motion.div>
        </div>
      </div>

      <ProjectsSection />
      <AboutSection />
    </section>
  );
};

export default HeroSection;
