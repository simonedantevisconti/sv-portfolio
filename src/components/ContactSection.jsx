import { motion } from "framer-motion";
import { FaEnvelope, FaLocationDot } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";

const ContactSection = () => {
  return (
    <section className="contact-section" id="contatti">
      <div className="container-fluid">
        <motion.div
          className="contact-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <div>
            <p className="contact-kicker">Hai un progetto?</p>
            <h2>Parliamone.</h2>
            <p className="contact-copy">
              Se hai bisogno di un sito web, una landing page o un'interfaccia
              React, raccontami cosa vuoi realizzare.
            </p>
          </div>

          <div className="contact-links">
            <a href="https://wa.me/393451287102" target="_blank" rel="noreferrer">
              <FaWhatsapp />
              <span>WhatsApp</span>
            </a>

            <a href="mailto:simone.visconti4@gmail.com">
              <FaEnvelope />
              <span>Email</span>
            </a>

            <a
              href="https://maps.app.goo.gl/PVzrZ8RJYVNAH6ia8"
              target="_blank"
              rel="noreferrer"
            >
              <FaLocationDot />
              <span>Busnago (MB)</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
