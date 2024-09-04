"use client";
import { motion } from "framer-motion";

export default function HostelListingsPage() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {
          scale: 0.8,
          opacity: 0,
        },
        visible: {
          scale: 1,
          opacity: 1,
          transition: {
            delay: 0.4,
          },
        },
      }}
    >
      <h1>Hostel Page</h1>
    </motion.div>
  );
}
