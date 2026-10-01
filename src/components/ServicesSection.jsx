import { motion } from "framer-motion";
import { FaCode, FaLaptopCode, FaPalette, FaRocket } from "react-icons/fa6";

const services = [
  {
    id: 1,
    icon: <FaLaptopCode />,
    title: "Siti web",
    text: "Realizzo siti web responsive, veloci e curati per professionisti, attività e progetti personali.",
  },
  {
    id: 2,
    icon: <FaRocket />,
    title: "Landing page",
    text: "Creo landing page orientate alla conversione, con struttura chiara, call to action e attenzione alla user experience.",
  },
  {
    id: 3,
    icon: <FaCode />,
    title: "React e web app",
    text: "Sviluppo interfacce React e applicazioni web moderne, dinamiche e pensate per funzionare bene su ogni dispositivo.",
  },
  {
    id: 4,
    icon: <FaPalette />,
    title: "UI e identità digitale",
    text: "Trasformo un'idea in un'interfaccia coerente, accessibile e riconoscibile, dalla struttura al design finale.",
  },
];

const ServicesSection = () => {
  return (
    <section className="services-section" id="servizi">
      <div className="container-fluid">
        <motion.h2
          className="services-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Servizi
        </motion.h2>

        <motion.p
          className="services-intro"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Sviluppo siti web, landing page e interfacce React per professionisti,
          attività e progetti digitali, con attenzione a responsive, prestazioni
          e identità visiva.
        </motion.p>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.article
              className="service-card"
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
            >
              <span className="service-icon">{service.icon}</span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
