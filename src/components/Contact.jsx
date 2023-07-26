import React from "react";
import { FiMail } from "react-icons/fi";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Contact = () => {
  return (
    <motion.section
      id="contact"
      className="section h-screen relative bg"
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.7 }}
    >
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row">
          <div className="flex-1">
            <div>
              <motion.img
                className="w-[130px]"
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                src={process.env.PUBLIC_URL + "/images/logo1.png"}
                alt=""
              />
              <motion.h2
                className="mb-3 text-[32px] font-secondary font-semibold text-white"
                variants={fadeIn("up", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
              >
                #Contact Me
              </motion.h2>
              <motion.p
                className="pb-10 text-white"
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
              >
                포트폴리오를 끝까지 봐주셔서 감사합니다!
              </motion.p>
              <motion.a
                className="inline-block text-sm z-10 font-medium py-4 px-4 mb-5 rounded-full bg-[#fcac00] hover:bg-[#e3a520] text-white shadow"
                href="mailto:jisilver.kim@gmail.com"
                variants={fadeIn("up", 0.5)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
              >
                <span>
                  <FiMail className="inline mr-2 text-[18px]" />
                </span>
                <span>jisilver.kim@gmail.com</span>
              </motion.a>
            </div>
          </div>
          <div className="flex-1">
            <div
              variants={fadeIn("right", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
            ></div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
