import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const About = () => {
  return (
    <section id="about" className="section h-screen overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row h-full text-center xl:text-start gap-x-9 justify-center items-center">
          <motion.div
            className="xl:flex-1 flex items-center justify-center mx-auto lg:w-auto lg:h-full md:h-[250px] h-[200px] w-full mb-5 md:mb-0"
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
          >
            <img
              className="w-full h-full object-cover object-bottom overflow-hidden"
              src={`${process.env.PUBLIC_URL}/images/about.jpg`}
              alt=""
            />
          </motion.div>

          <motion.div
            className="flex-1 mx-auto h-full "
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
          >
            <div className="flex flex-col justify-center">
              <h2 className="text-[32px] mb-4 tracking-[10%] font-secondary font-semibold md:pt-5">
                #About Me
              </h2>
              <p className="text-[16px] lg:text-[18px]">
                안녕하세요, <span className="bg-[#fcac003f]">김지은</span>
                입니다. <br />
                저는 새로운 도전을 통해 끊임없이 성장하며 지속적인 학습과 <br />
                <span className="underline">다양한 프로젝트 참여</span>를 통해
                더 나은 개발자로 나아가고자 합니다.
              </p>
              <p className="pt-5 text-[16px] lg:text-[18px]">
                소통과 협업을 통해 주어진 업무에 대한{" "}
                <span className="underline">책임감</span>을 가지고 끊임없이
                성장하며,
                <br />{" "}
                <span className="underline">
                  동료들과 함께 지식을 공유하고 배우는 것
                </span>
                을 좋아합니다.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
