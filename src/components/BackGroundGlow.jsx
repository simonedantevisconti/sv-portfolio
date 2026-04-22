import { motion } from "framer-motion";

const BackgroundGlow = () => {
  return (
    <>
      <motion.div
        className="bg-orb orb-one"
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -20, 25, 0],
          scale: [1, 1.08, 0.96, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="bg-orb orb-two"
        animate={{
          x: [0, -25, 15, 0],
          y: [0, 18, -22, 0],
          scale: [1, 0.95, 1.1, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="bg-grid"
        animate={{ opacity: [0.35, 0.5, 0.35] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
    </>
  );
};

export default BackgroundGlow;
