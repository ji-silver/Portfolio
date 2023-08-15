import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Work from "./Work";

const Projects = () => {
  return (
    <div id="projects" className="section h-screen">
      <div className="container mx-auto">
        <motion.h2
          className="text-center mb-6 text-[32px] font-secondary font-semibold"
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
        >
          #Projects
        </motion.h2>
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
        >
          <Work />
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
