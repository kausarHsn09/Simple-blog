import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import { Autoplay } from "swiper/modules";

const FeturedBlog = ({ bloglist }) => {
  return (
    <div className="flex justify-center items-center w-[1500px] h-[520px] bg-primary rounded-md 	mt-20 mx-auto	">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="flex w-full justify-center items-center">
            <div className="img_left w-5/12">
              <img
                src={bloglist[1].image}
                className="block w-[560px] h-[430] ml-10"
              />
            </div>
            <div className="content-slider-right w-7/12 px-10">
              <h3 className="font-bold text-4xl font-josefin">
                {bloglist[1].title}
              </h3>
              <p className="mt-2 font-medium text-lg font-josefin">
                {bloglist[1].description}
              </p>
              <Link to={`/blog/${1}`}>
                <button className=" mt-2 font-josefin bg-btnColor text-primary rounded-full px-10 py-3 text-lg">
                  More
                </button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex w-full justify-center items-center">
            <div className="img_left w-5/12">
              <img
                src={bloglist[2].image}
                className="block w-[560px] h-[430] ml-10"
              />
            </div>
            <div className="content-slider-right w-7/12 px-10">
              <h3 className="font-bold text-4xl font-josefin">
                {bloglist[2].title}
              </h3>
              <p className="mt-2 font-medium text-lg font-josefin">
                {bloglist[2].description}
              </p>
              <Link to={`/blog/${2}`}>
                <button className=" mt-2 font-josefin bg-btnColor text-primary rounded-full px-10 py-3 text-lg">
                  More
                </button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex w-full justify-center items-center">
            <div className="img_left w-5/12">
              <img
                src={bloglist[3].image}
                className="block w-[560px] h-[430] ml-10"
              />
            </div>
            <div className="content-slider-right w-7/12 px-10">
              <h3 className="font-bold text-4xl font-josefin">
                {bloglist[3].title}
              </h3>
              <p className="mt-2 font-medium text-lg font-josefin">
                {bloglist[3].description}
              </p>
              <Link to={`/blog/${3}`}>
                <button className=" mt-2 font-josefin bg-btnColor  text-white rounded-full px-10 py-3 text-lg">
                  More
                </button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default FeturedBlog;
