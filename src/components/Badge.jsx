import { motion } from "framer-motion";

export default function Badge({ caption }) {
  return <motion.span animate={{ scale: [1, 1.2] }} transition={{ duration: 0.3 }} className="badge">{caption}</motion.span>;
}
