import React from "react";
import { FaGithub } from "react-icons/fa";
import { SiTistory } from "react-icons/si";
import { GrInstagram } from "react-icons/gr";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import line from "../line.svg";
import logo from "../images/logo.png";

const Banner = () => {
  return (
    <section
      id="home"
      className="min-h-[85vh] lg:min-h-[80vh] flex items-center"
    >
      <div className="container text-center mx-auto">
        <div>
          <div className="flex-1 text-center items-center">
            <motion.img
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              src={logo}
              className="w-[130px] mx-auto"
              alt=""
            />
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[55px] font-bold lg:text-[80px]"
            >
              지은이: 김지은
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="relative flex mx-auto items-center justify-center"
            >
              <img
                className="absolute w-[300px] bottom-[0px] xl:right-[27%] -z-50"
                src={line}
                alt=""
              />
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 lg:text-[30px]"
            >
              <p>안녕하세요! 프론트엔드 개발자를 꿈꾸는 김지은입니다.</p>
            </motion.div>

            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[20px] gap-x-6 max-w-max mx-auto text-gray-700"
            >
              <a
                href="https://github.com/ji-silver"
                rel="noreferrer"
                target="_blank"
                className="hover:text-[#fcac00]"
              >
                <FaGithub />
              </a>
              <a
                href="https://jisilver-k.tistory.com/"
                target="_blank"
                className="hover:text-[#fcac00]"
              >
                <SiTistory />
              </a>
              <a
                href="https://www.instagram.com/jisilver.k/"
                target="_blank"
                className="hover:text-[#fcac00]"
              >
                <GrInstagram />
              </a>
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mt-6 text-gray-400 font-[300]"
            >
              © 2023 JIEUN PORTFOLIO
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
