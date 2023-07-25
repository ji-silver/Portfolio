import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Work from "./Work";

const Projects = () => {
  return (
    <div id="projects" className="section h-screen">
      <div className="container mx-auto ">
        <h2 className="text-center mb-10 text-[32px] uppercase font-secondary font-semibold">
          Projects
        </h2>
        <Work />
      </div>
    </div>
  );
};

export default Projects;
