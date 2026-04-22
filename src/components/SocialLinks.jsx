import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";

const socials = [
  {
    id: 1,
    icon: <FaGithub />,
    href: "https://github.com/simonedantevisconti",
    label: "GitHub",
  },
  {
    id: 2,
    icon: <FaLinkedinIn />,
    href: "https://www.linkedin.com/in/simone-dante-visconti/",
    label: "LinkedIn",
  },
];

const SocialLinks = () => {
  return (
    <div className="social-links">
      {socials.map((social, index) => (
        <motion.a
          key={social.id}
          href={social.href}
          target="_blank"
          rel="noreferrer"
          aria-label={social.label}
          className="social-link"
          initial={{ y: 18, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.45 + index * 0.1, duration: 0.5 }}
          whileHover={{ y: -5, scale: 1.06 }}
          whileTap={{ scale: 0.95 }}
        >
          {social.icon}
        </motion.a>
      ))}
    </div>
  );
};

export default SocialLinks;
