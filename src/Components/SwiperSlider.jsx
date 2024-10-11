import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
// import "swiper/css/pagination";
import "swiper/css/navigation";
// import { Navigation, Pagination } from 'swiper';

const SwiperSlider = () => {
  return (
    <div className="slider">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        navigation={true}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        scrollbar={{ draggable: true }}
        modules={[Navigation, Pagination, Autoplay]}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        // breakpoints={{

        //   1024: {
        //     slidesPerView: 1,
        //     spaceBetween: 1,
        //   },
        // }}
      >
        <SwiperSlide className="swiper-slider">
          <div
            style={{
              backgroundImage: "url('src/assets/solar-bg.png')",
            
            }}
            className="slide"
          >
            <div className="slide-inner">
              <div className="absolute left-[8%]  lg:top-[40%] top-[25%] flex flex-col gap-[25px] sm:w-[60%] w-[90%]">
                <div>
                  <h1
                    className="sm:text-[60px] text-[35px] font-[700] text-[--whiteColor] shadow sm:leading-[70px] leading-10"
                    style={{ textShadow: "5px 5px 15px black" }}
                  >
                    {" "}
                    Paving the way to a <span className="green"> Greener </span>
                    Solution
                  </h1>
                </div>

                <div>
                  <p className="text-[1.2rem] leading-[2rem] text-[--whiteColor]">
                    Our commitment to renewable energy paves the way for a
                    greener tomorrow, offering eco-conscious solutions for
                    today&nbsp; energy needs.
                  </p>
                </div>
                <div>
                  <button className="" style={{ marginRight: "10px" }}>
                    Our Services
                  </button>
                  <button className="">Contact Now</button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slider">
          {" "}
          <div
            style={{ backgroundImage: "url('src/assets/cabilng-pic.webp')" }}
            className="slide"
          >
            <div className="slide-inner">
              <div className="absolute left-[8%]  lg:top-[40%] top-[25%] flex flex-col gap-[25px] sm:w-[60%] w-[90%]">
                <div>
                  <h1
                    className="sm:text-[60px] text-[35px] font-[700] text-[--whiteColor] shadow sm:leading-[70px] leading-10"
                    style={{ textShadow: "5px 5px 15px black" }}
                  >
                    {" "}
                    Paving the way to a <span className="green"> Greener </span>
                    Solution
                  </h1>
                </div>

                <div>
                  <p className="text-[1.2rem] leading-[2rem] text-[--whiteColor]">
                    Our commitment to renewable energy paves the way for a
                    greener tomorrow, offering eco-conscious solutions for
                    today&nbsp; energy needs.
                  </p>
                </div>
                <div>
                  <button
                    className="bg-[--primaryColor] text-[--blackColor] px-10 py-4 rounded-full mr-4"
                    style={{ marginRight: "10px" }}
                  >
                    Our Services
                  </button>
                  <button className="bg-[--primaryColor] text-[--blackColor] px-10 py-4 rounded-full">
                    Contact Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slider">
          {" "}
          <div
            style={{ backgroundImage: "url('src/assets/building-pic.webp')" }}
            className="slide"
          >
            <div className="slide-inner">
              <div className="absolute left-[8%]  lg:top-[40%] top-[25%] flex flex-col gap-[25px] sm:w-[60%] w-[90%]">
                <div>
                  <h1
                    className="sm:text-[60px] text-[35px] font-[700] text-[--whiteColor] shadow sm:leading-[70px] leading-10"
                    style={{ textShadow: "5px 5px 15px black" }}
                  >
                    {" "}
                    Paving the way to a <span className="green"> Greener </span>
                    Solution
                  </h1>
                </div>

                <div>
                  <p className="text-[1.2rem] leading-[2rem] text-[--whiteColor]">
                    Our commitment to renewable energy paves the way for a
                    greener tomorrow, offering eco-conscious solutions for
                    today&nbsp; energy needs.
                  </p>
                </div>
                <div>
                  <button
                    className="bg-[--primaryColor] text-[--blackColor] px-10 py-4 rounded-full mr-4"
                    style={{ marginRight: "10px" }}
                  >
                    Our Services
                  </button>
                  <button className="bg-[--primaryColor] text-[--blackColor] px-10 py-4 rounded-full">
                    Contact Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
export default SwiperSlider;
