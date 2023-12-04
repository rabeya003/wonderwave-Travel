import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../assets/images/Rectangle 1.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://i.ibb.co/59B2vGg/Getty-Images-1438954277-HEADER-Saint-Martin-Michelin.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-50"></div>
      <div>
        <div className="flex justify-between">
          <div>
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <button className="btn btn-primary">Get Started</button>
          </div>
          <div>
            {" "}
            <Swiper
              slidesPerView={4}
              spaceBetween={30}
              centeredSlides={true}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img className="w-32 h-32" src={img1} alt="" />
              </SwiperSlide>
              <SwiperSlide>Slide 2</SwiperSlide>
              <SwiperSlide>Slide 3</SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
