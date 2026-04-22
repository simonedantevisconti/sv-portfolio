import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section className="about-section" id="about">
      <div className="container-fluid">
        <motion.h2
          className="about-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Chi sono
        </motion.h2>

        <motion.div
          className="about-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h3 className="about-headline">
            Sviluppo esperienze web moderne, intuitive e performanti.
          </h3>

          <p>
            Ciao sono <strong>Simone Visconti</strong> e sono web developer
            appassionato e dinamico, un vero internet kid cresciuto tra i pixel
            e le connessioni digitali fin da giovane.
          </p>

          <p>
            Oggi porto questa esperienza comunicativa nel mondo dello sviluppo
            web, realizzando siti responsive e user-friendly con HTML, CSS,
            JavaScript, React, Express-Node e altri framework moderni.
          </p>

          <p className="about-location">📍 Busnago (MB), Italia</p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
