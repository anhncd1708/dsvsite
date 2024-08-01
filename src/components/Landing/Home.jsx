import React from "react";
import { Carousel } from "flowbite-react";

import banner from "../../assets/banner.jpg";
import banner2 from "../../assets/banner2.jpg";
import banner3 from "../../assets/banner3.jpg";

const Home = () => {
  return (
    <div className=" bg-neutralWhite" id="home">
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen flex justify-center items-center">
        <Carousel className="w-full mx-auto">
          <div className="my-28 md:my-8 py-12 flex flex-col w-full mx-auto md:flex-row-reverse items-center justify-between gap-12">

            <img className="md:w-1/2" src={banner} alt="" />

            {/* hero text */}
            <div className="md:w-1/2">
              <h1 className="text-5xl mb-4 font-semibold text-neutralDGrey md:w-3/4 leading-snug">
                Lessons and insights{" "}
                <span className="text-brandPrimary leading-snug">
                  from 10 years
                </span>
              </h1>
              <p className="text-neutralGrey text-base mb-8">
                Where to grow your own business: site or social
                media?
              </p>
              <button className="px-7 py-2 bg-brandPrimary text-white rounded hover:bg-neutralDGrey">
                Contact
              </button>
            </div>
          </div>
          <div className="my-28 md:my-8 py-12 flex flex-col w-full mx-auto md:flex-row-reverse items-center justify-between gap-12">

            <img className="md:w-1/2" src={banner2} alt="" />

            {/* hero text */}
            <div className="md:w-1/2">
              <h1 className="text-5xl mb-4 font-semibold text-neutralDGrey md:w-3/4 leading-snug">
                Design and Initiation{" "}
                <span className="text-brandPrimary leading-snug">
                  fast with high quality
                </span>
              </h1>
              <p className="text-neutralGrey text-base mb-8">
                Where to grow your own business: site or social
                media?
              </p>
              <button className="px-7 py-2 bg-brandPrimary text-white rounded hover:bg-neutralDGrey">
                Contact
              </button>
            </div>
          </div>
          <div className="my-28 md:my-8 py-12 flex flex-col w-full mx-auto md:flex-row-reverse items-center justify-between gap-12">

            <img className="md:w-1/2" src={banner3} alt="" />
            {/* hero text */}
            <div className="md:w-1/2">
              <h1 className="text-5xl mb-4 font-semibold text-neutralDGrey md:w-3/4 leading-snug">
                Grow Business Fast{" "}
                <span className="text-brandPrimary leading-snug">
                  at least cost
                </span>
              </h1>
              <p className="text-neutralGrey text-base mb-8">
                Where to grow your own business: site or social
                media?
              </p>
              <button className="px-7 py-2 bg-brandPrimary text-white rounded hover:bg-neutralDGrey">
                Contact
              </button>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
