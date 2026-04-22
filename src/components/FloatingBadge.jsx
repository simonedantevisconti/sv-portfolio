import { motion } from "framer-motion";

const FloatingBadge = () => {
  return (
    <motion.div
      className="floating-badge"
      initial={{ x: 40, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.6, duration: 0.8 }}
    >
      <span className="floating-badge-top">SV.</span>
      <span className="floating-badge-bottom">Portfolio</span>
    </motion.div>
  );
};

export default FloatingBadge;
