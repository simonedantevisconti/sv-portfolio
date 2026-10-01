import { motion } from "framer-motion";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const projects = [
  {
    id: 1,
    title: ".Matrimonio",
    image: "/matrimonio.png",
    link: "https://martaesimone.fun/",
    subtitle: "Landing / Evento",
    bg: "bg-gradient-1",
  },
  {
    id: 2,
    title: ".Quattro",
    image: "/quattro.png",
    link: "https://quattro-4.netlify.app/",
    subtitle: "Web app / UI",
    bg: "bg-gradient-2",
  },
  {
    id: 3,
    title: ".SpinTheGlobe",
    image: "/spin.png",
    link: "https://globespin.netlify.app/",
    subtitle: "Interactive / Map",
    bg: "bg-gradient-3",
  },
  {
    id: 4,
    title: ".Opus",
    image: "/opus.png",
    link: "https://opusmovie.xyz/",
    subtitle: "Cinema / Web app",
    description:
      "Una libreria dei miei film preferiti con recensioni, voti, trailer e mini strumenti per scegliere un film casuale. Gli utenti possono anche effettuare il login, salvare i titoli e lasciare un upvote.",
    bg: "bg-gradient-1",
  },
  {
    id: 5,
    title: ".Ligurio",
    image: "/ligurio.png",
    link: "https://ligurio.netlify.app/",
    subtitle: "Puzzle / Lateral thinking",
    description:
      "Un rompicapo sviluppato per allenare il pensiero laterale e imparare a pensare fuori dagli schemi: 20 livelli in cui trovare la risposta osservando ogni indizio da una prospettiva diversa.",
    bg: "bg-gradient-2",
  },
  {
    id: 6,
    title: ".Rebecca Guarnieri DVM",
    image: "/rebecca.png",
    link: "https://rebeccaguarnieridvm.it/",
    subtitle: "Sito professionale / Veterinaria",
    description:
      "Sito professionale realizzato per una veterinaria specializzata nella medicina degli animali acquatici, con particolare attenzione alla cura e alla salute dei pesci.",
    bg: "bg-gradient-3",
  },
];

const ProjectsSection = () => {
  return (
    <section className="projects-section" id="progetti">
      <div className="container-fluid">
        <motion.h2
          className="projects-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          I miei progetti
        </motion.h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className={`project-card ${project.bg}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <p className="project-title">{project.title}</p>

              <div className="project-image-wrap">
                <img src={project.image} alt={project.title} />
              </div>

              {project.description && (
                <p className="project-description">{project.description}</p>
              )}

              <div className="project-footer">
                <div className="project-link">
                  <FaArrowUpRightFromSquare />
                  <span>Vai al progetto</span>
                </div>

                <p className="project-sub">{project.subtitle}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
