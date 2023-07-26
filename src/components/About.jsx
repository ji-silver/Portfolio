import React, { useState } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaJs,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import { BiLogoMongodb, BiLogoTypescript } from "react-icons/bi";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const aboutData = [
  {
    title: "Skils",
    info: [
      {
        title: "Front-End",
        icons: [
          <FaHtml5 />,
          <FaCss3Alt />,
          <FaJs />,
          <FaSass />,
          <FaReact />,
          <BiLogoTypescript />,
        ],
      },
      {
        title: "Back-End",
        icons: [<FaNodeJs />, <BiLogoMongodb />],
      },
    ],
  },
  {
    title: "Education",
    info: [
      {
        title: "수원여자대학교 - 모바일미디어과 (전문학사)",
        stage: "2017 - 2019",
      },
      {
        title: "엘리스 SW엔지니어트랙 4기 (수료)",
        stage: "2023.02 - 2023.06",
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <section id="about" className="section h-screen overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row h-full text-center xl:text-start gap-x-9 justify-center items-center">
          <motion.div
            className="xl:flex-1 flex items-center justify-center mx-auto md:w-auto md:h-[500px] h-[230px] w-full mb-5 md:mb-0"
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
            className="flex-1 mx-auto flex flex-col justify-center h-full "
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
          >
            <div className="flex flex-col justify-center">
              <h2 className="text-[32px] mb-4 tracking-[10%] font-secondary font-semibold">
                #About Me
              </h2>
              <p>
                안녕하세요, <strong>김지은</strong>입니다. <br />
                저는 항상 새로운 시도를 하면서 실패하는 걸 두려워하지 않습니다.
                <br />
                처음 시작은 어렵지만 거기서 얻는 경험과 노력은
                <br /> 저를 빠르게 성장시킬 수 있는 원동력이 됩니다.
              </p>
              <p className="pt-5">
                이 포트폴리오를 더 멋지게 장식하기 위해서
                <br />
                도전하는 걸 즐기는 프론트엔드 개발자가 되고 싶습니다!
              </p>
              <hr className="my-2" />
            </div>
            <div className="flex flex-col items-center h-[210px] xl:items-start">
              <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4 pt-5 items-center xl:items-start">
                {aboutData.map((item, itemIndex) => {
                  return (
                    <button
                      onClick={() => setIndex(itemIndex)}
                      key={itemIndex}
                      className={`${
                        index === itemIndex &&
                        "text-[#fcac00] bg-[#fcac00] text-white"
                      } cursor-pointer xl:text-lg relative px-3 rounded-full `}
                    >
                      {item.title}
                    </button>
                  );
                })}
              </div>
              <div className="py-2 xl:py-3 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
                {aboutData[index].info.map((item, itemIndex) => {
                  return (
                    <div key={itemIndex} className="max-w-max gap-x-2">
                      <div className="mb-2 md:mb-0 font-semibold">
                        {item.title}
                      </div>
                      <div>{item.stage}</div>
                      <div className="flex gap-x-4 text-2xl">
                        {item.icons?.map((icon, itemIndex) => {
                          return <div className="text-2xl">{icon}</div>;
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
