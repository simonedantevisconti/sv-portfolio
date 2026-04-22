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
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <p className="project-title">{project.title}</p>

              <div className="project-image-wrap">
                <img src={project.image} alt={project.title} />
              </div>

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