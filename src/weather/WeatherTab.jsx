import { motion } from "motion/react";

export default function WeatherTab({ children, onClick, isSelected }) {
  return (
    <motion.div
      className={isSelected ? "tab-selected" : "tab"}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
}
