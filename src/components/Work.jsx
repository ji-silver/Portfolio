import React from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import img1 from "../images/voca1.png";
import img3 from "../images/voca3.png";
import img4 from "../images/voca4.png";

const data = [
  {
    view: true,
    demo: "http://ppvoca.p-e.kr/book/list",
    notion:
      "https://amenable-colby-ae6.notion.site/408553854c1d4f7ba9f5ed007ca53653?pvs=4",
    title: "<뿅뿅 단어장>",
    desc: "나만의 단어장을 만들어 단어를 학습하고 퀴즈를 풀며 단어를 복습할 수 있는 한/영 단어장",
    image: [
      "../images/voca4.png",
      "../images/voca1.png",
      "../images/voca3.png",
    ],
  },
  {
    view: false,
    notion:
      "https://www.notion.so/FANHANA-f5987be483cc47dda492b91b2ecf9026?pvs=4",
    title: "<팬하나(FANHANA)>",
    desc: "국내 스포츠(K리그, KBO, LoL)팬을 위한 세상에 단 하나뿐인 스포츠 커뮤니티 팬하나(FANHANA)",
    image: [
      "../images/voca4.png",
      "../images/voca1.png",
      "../images/voca3.png",
    ],
  },
  {
    view: false,
    notion:
      "https://www.notion.so/WanderStay-cceabb1c716040b88bc5977640a02168?pvs=4",
    title: "<WanderStay>",
    desc: "국내 여행 준비에 가장 중요한 호텔 및 숙박 예약 웹 서비스 WanderStay",
    image: [
      "../images/voca4.png",
      "../images/voca1.png",
      "../images/voca3.png",
    ],
  },
];

const Work = () => {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {data.map((slide, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="w-[90%] h-[full] mx-auto">
                <div className="flex flex-col lg:flex-row gap-x-10">
                  <div className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0">
                    <div className="flex-1 flex flex-col justify-center">
                      <h2 className="text-[25px] mb-6 font-bold leading-tight text-center lg:text-start">
                        {slide.title}
                      </h2>
                      <p className="lg:max-w-sm mb-16 text-center lg:text-start">
                        {slide.desc}
                      </p>
                      <div className=" text-center lg:text-start">
                        <a target="_blank" rel="noreferrer" href={slide.demo}>
                          <button className="text-sm h-[48px] mr-3 font-medium px-10 rounded-full border-[1px] border-[#fcac00] hover:bg-[#fcac00] hover:text-white">
                            View
                          </button>
                        </a>
                        <a target="_blank" rel="noreferrer" href={slide.notion}>
                          <button className="text-sm h-[48px] font-medium px-10 rounded-full border-[1px] border-[#fcac00] hover:bg-[#fcac00] hover:text-white">
                            Notion
                          </button>
                        </a>
                      </div>
                    </div>
                    <div className="relative overflow-hidden border-[1px] border-black/50 rounded-xl">
                      <img
                        className=" w-full hover:scale-125 transition-all duration-500 h-[300px] mx-auto object-cover"
                        src={img4}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col gap-y-10">
                    <div className="lg:block hidden relative overflow-hidden border-[1px] border-black/50 rounded-xl">
                      <img
                        className="hover:scale-125 transition-all duration-500 h-[300px] mx-auto object-cover"
                        src={img1}
                        alt=""
                      />
                    </div>
                    <div className="lg:block hidden relative overflow-hidden border-[1px] border-black/50 rounded-xl">
                      <img
                        className="hover:scale-125 transition-all duration-500 h-[300px] mx-auto object-cover"
                        src={img3}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

{
  /* <motion.div
        variants={fadeIn("right", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0"
      >
        <div className="flex-1 flex flex-col justify-center">
          <h2 className="text-[25px] mb-6 font-bold leading-tight text-center lg:text-start">
            뿅뿅 단어장
          </h2>
          <p className="lg:max-w-sm mb-16 text-center lg:text-start">
            나만의 단어장을 만들어 단어를 학습하고 퀴즈를 풀며 단어를 복습할 수
            있는 한/영 단어장입니다.
          </p>
          <div className=" text-center lg:text-start">
            <a
              target="_blank"
              rel="noreferrer"
              href="http://ppvoca.p-e.kr/book/list"
            >
              <button className="text-sm h-[48px] mr-3 font-medium px-10 rounded-full border-[1px] border-[#fcac00] hover:bg-[#fcac00] hover:text-white">
                View
              </button>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://amenable-colby-ae6.notion.site/408553854c1d4f7ba9f5ed007ca53653?pvs=4"
            >
              <button className="text-sm h-[48px] font-medium px-10 rounded-full border-[1px] border-[#fcac00] hover:bg-[#fcac00] hover:text-white">
                Notion
              </button>
            </a>
          </div>
        </div>
        <div className="relative overflow-hidden border-[1px] border-black/50 rounded-xl">
          <img
            className=" w-full hover:scale-125 transition-all duration-500 h-[300px] mx-auto object-cover"
            src={img4}
            alt=""
          />
        </div>
      </motion.div>
      <motion.div
        variants={fadeIn("left", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="flex-1 flex flex-col gap-y-10"
      >
        <div className="lg:block hidden relative overflow-hidden border-[1px] border-black/50 rounded-xl">
          <img
            className="hover:scale-125 transition-all duration-500 h-[300px] mx-auto object-cover"
            src={img1}
            alt=""
          />
        </div>
        <div className="lg:block hidden relative overflow-hidden border-[1px] border-black/50 rounded-xl">
          <img
            className="hover:scale-125 transition-all duration-500 h-[300px] mx-auto object-cover"
            src={img3}
            alt=""
          />
        </div>
      </motion.div> */
}

export default Work;
