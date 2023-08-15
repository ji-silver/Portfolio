import React from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { projectsData } from "../datatable.js";

const Work = () => {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {projectsData.map((slide, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="w-[85%] h-full mx-auto pb-5 lg:pb-10 px-5">
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
