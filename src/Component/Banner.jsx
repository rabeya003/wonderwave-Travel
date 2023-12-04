// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../assets/images/Rectangle 1.png";
import img2 from "../assets/images/Sreemongol.png";
import img3 from "../assets/images/Sajek.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Import required modules
import { Pagination } from "swiper/modules";
import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";

const Banner = () => {
  const [travelInfo, setTravelInfo] = useState();
  useEffect(() => {
    fetch("http://localhost:5000/travel")
      .then((res) => res.json())
      .then((data) => setTravelInfo(data));
  }, []);
  const travel = travelInfo?.map((t) => t._id);

  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://i.ibb.co/59B2vGg/Getty-Images-1438954277-HEADER-Saint-Martin-Michelin.jpg)",
      }}
    >
      <div>
        <div className="flex items-center gap-11 justify-between">
          <div>
            <h1 className="text-4xl text-white">
              <Typewriter
                cursor
                cursorBlinking
                delaySpeed={1000}
                deleteSpeed={25}
                loop={0}
                typeSpeed={75}
                words={[
                  "Welcome to Wanderwave Travel",
                  "Cox's Bazar",
                  "Shajek",
                  "Saintmartin",
                  "To make easy your journey",
                ]}
              />
            </h1>
            <Link to="/bookings">
              <button className="btn mt-5 btn-primary">Bookings</button>
            </Link>
          </div>
          <div className="swiper-container">
            <Swiper
              style={{ maxWidth: "800px" }}
              slidesPerView={3}
              spaceBetween={30}
              centeredSlides={true}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide className="relative">
                <img src={img1} className="w-80 h-56" alt="Image 1" />
                <p className="text-2xl p-2 drop-shadow-2xl  top-[35%] bg-sky-400 bg-opacity-40 mx-6 absolute text-white rounded-xl">
                  Cox&apos;s Bazar
                </p>
              </SwiperSlide>
              <SwiperSlide className="relative">
                <img src={img3} className="w-80 h-56" alt="Image 1" />
                <p className="text-2xl p-2 drop-shadow-2xl  top-[35%] bg-sky-900 bg-opacity-40 mx-6 absolute text-white rounded-xl">
                  Saintmartin
                </p>
              </SwiperSlide>
              <SwiperSlide className="relative">
                <img src={img2} className="w-80 h-56" alt="Image 1" />
                <p className="text-2xl p-2 drop-shadow-2xl  top-[35%] bg-lime-900 bg-opacity-40 mx-6 absolute text-white rounded-xl">
                  Sajek
                </p>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
