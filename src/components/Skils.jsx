import React from "react";
import { skilsData } from "../datatable.js";
import { CircularProgressBar } from "@tomickigrzegorz/react-circular-progress-bar";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Skils = () => {
  const props = {
    colorSlice: "#fcac00",
    colorCircle: "#ede5d0",
    round: "true",
    size: "9rem",
    styles: {
      display: "flex",
      position: "relative",
      alignItems: "center",
      justifyContent: "center",
    },
  };
  return (
    <div id="skils" className="section h-screen">
      <div className="container mx-auto">
        <motion.h2
          className="text-[32px] font-secondary font-semibold pb-10 text-center"
          variants={fadeIn("down", 0.3)}
          initial="hidden"
          whileInView={"show"}
        >
          #Skils
        </motion.h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 lg:gap-12 gap-6 justify-items-center">
          {skilsData.map(({ title, percentage }, index) => {
            return (
              <div key={index}>
                <motion.div
                  variants={fadeIn("up", 0.4)}
                  initial="hidden"
                  whileInView={"show"}
                >
                  <CircularProgressBar
                    {...props}
                    percent={percentage}
                    number={false}
                  >
                    <div className="w-full flex justify-center items-center absolute">
                      <img
                        src={title}
                        className="w-[40px] lg:w-[60px]"
                        alt=""
                      />
                    </div>
                  </CircularProgressBar>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skils;
