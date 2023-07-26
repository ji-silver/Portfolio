import React from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const data = [
  {
    view: true,
    nview: true,
    demo: "http://ppvoca.p-e.kr/book/list",
    notion:
      "https://amenable-colby-ae6.notion.site/408553854c1d4f7ba9f5ed007ca53653?pvs=4",
    title: "<뿅뿅 단어장>",
    desc: "나만의 단어장을 만들어 단어를 학습하고 퀴즈를 풀며 단어를 복습할 수 있는 한/영 단어장",
    image: [
      `${process.env.PUBLIC_URL}/images/voca3.png`,
      `${process.env.PUBLIC_URL}/images/voca1.jpg`,
      `${process.env.PUBLIC_URL}/images/voca2.png`,
    ],
  },
  {
    view: false,
    nview: true,
    notion:
      "https://www.notion.so/FANHANA-f5987be483cc47dda492b91b2ecf9026?pvs=4",
    title: "<팬하나(FANHANA)>",
    desc: "국내 스포츠(K리그, KBO, LoL)팬을 위한 세상에 단 하나뿐인 스포츠 커뮤니티 팬하나(FANHANA)",
    image: [
      `${process.env.PUBLIC_URL}/images/fanhana3.png`,
      `${process.env.PUBLIC_URL}/images/fanhana1.jpg`,
      `${process.env.PUBLIC_URL}/images/fanhana2.png`,
    ],
  },
  {
    view: false,
    nview: true,
    notion:
      "https://www.notion.so/WanderStay-cceabb1c716040b88bc5977640a02168?pvs=4",
    title: "<WanderStay>",
    desc: "국내 여행 준비에 가장 중요한 호텔 및 숙박 예약 웹 서비스 WanderStay",
    image: [
      `${process.env.PUBLIC_URL}/images/wanderstay4.png`,
      `${process.env.PUBLIC_URL}/images/wanderstay1.jpg`,
      `${process.env.PUBLIC_URL}/images/wanderstay2.png`,
    ],
  },
  {
    view: true,
    nview: false,
    demo: "https://ji-silver.github.io/React-TodoList/",
    title: "<TO DO LIST>",
    desc: (
      <>
        리액트로 구현한 TO DO LIST 입니다.
        <br />
        localStorage에 목록을 저장해두어 새로고침해도 사라지지 않습니다.
      </>
    ),
    image: [
      `${process.env.PUBLIC_URL}/images/todo1.png`,
      `${process.env.PUBLIC_URL}/images/todo3.png`,
      `${process.env.PUBLIC_URL}/images/todo2.png`,
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
              <div className="w-[90%] h-[full] mx-auto pb-10 px-5">
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
                        {slide.view && (
                          <>
                            <a
                              target="_blank"
                              rel="noreferrer"
                              href={slide.demo}
                            >
                              <button className="text-sm h-[48px] mr-3 font-medium px-10 rounded-full border-[1px] border-[#fcac00] hover:bg-[#fcac00] hover:text-white">
                                View
                              </button>
                            </a>
                          </>
                        )}
                        {slide.nview && (
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href={slide.notion}
                          >
                            <button className="text-sm h-[48px] font-medium px-10 rounded-full border-[1px] border-[#fcac00] hover:bg-[#fcac00] hover:text-white">
                              Notion
                            </button>
                          </a>
                        )}
                      </div>
                    </div>
                    <div className="relative overflow-hidden border-[1px] border-black/50 rounded-xl">
                      <img
                        className=" w-full hover:scale-125 transition-all duration-500 h-[300px] mx-auto object-cover"
                        src={slide.image[0]}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col gap-y-10">
                    <div className="lg:block hidden relative overflow-hidden border-[1px] border-black/50 rounded-xl">
                      <img
                        className="hover:scale-125 transition-all duration-500 h-[300px] mx-auto object-cover"
                        src={slide.image[1]}
                        alt=""
                      />
                    </div>
                    <div className="lg:block hidden relative overflow-hidden border-[1px] border-black/50 rounded-xl">
                      <img
                        className="hover:scale-125 transition-all duration-500 h-[300px] mx-auto object-cover"
                        src={slide.image[2]}
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

export default Work;
