import React from "react";
import { Carousel } from "flowbite-react";
import { Link } from "react-scroll";
import banner from "../../assets/banner.jpg";
import banner2 from "../../assets/banner2.jpg";
import banner3 from "../../assets/banner3.jpg";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Home = () => {
  const [t, i18n] = useTranslation("global");
  const home = t("home.button");
  const items = { link: home, path: "footer" };

  return (
    <motion.div className=" bg-neutralWhite" id="home">
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen flex justify-center items-center">
        <Carousel className="w-full mx-auto">
          <div className="my-28 md:my-8 py-12 flex flex-col w-full mx-auto md:flex-row-reverse items-center justify-between gap-12">
            <img className="md:w-1/2" src={banner} alt="" />

            {/* hero text */}
            <div className="md:w-1/2">
              <h1 className="text-5xl mb-4 font-semibold text-neutralDGrey md:w-3/4 leading-snug">
                {/* Lessons and insights  */}
                {t("home.banner1.line1")}{" "}
                <span className="text-brandPrimary leading-snug">
                  {t("home.banner1.line2")}
                </span>
              </h1>
              <p className="text-neutralGrey text-base mb-8">
                {t("home.banner1.line3")}
              </p>
              {/* <button className="px-7 py-2 bg-brandPrimary text-white rounded hover:bg-neutralDGrey">
                {t("home.button")}
              </button> */}
              <motion.div
                variants={fadeIn("up", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="space-x-8 hidden lg:flex items-center"
              >
                <Link
                  spy={true}
                  smooth={true}
                  offset={-100}
                  to={items.path}
                  key={items.link}
                  href="footer"
                  className="bg-brandPrimary text-white  py-2 px-4 transition-all duration-300 rounded hover:bg-neutralDGrey"
                >
                  {items.link}
                </Link>
              </motion.div>
            </div>
          </div>
          <div className="my-28 md:my-8 py-12 flex flex-col w-full mx-auto md:flex-row-reverse items-center justify-between gap-12">
            <img className="md:w-1/2" src={banner2} alt="" />

            {/* hero text */}
            <div className="md:w-1/2">
              <h1 className="text-5xl mb-4 font-semibold text-neutralDGrey md:w-3/4 leading-snug">
                {t("home.banner2.line1")}{" "}
                <span className="text-brandPrimary leading-snug">
                  {t("home.banner2.line2")}
                </span>
              </h1>
              <p className="text-neutralGrey text-base mb-8">
                {t("home.banner2.line3")}
              </p>
              {/* <button className="px-7 py-2 bg-brandPrimary text-white rounded hover:bg-neutralDGrey">
                {t("home.button")}
              </button> */}
              <motion.div
                variants={fadeIn("up", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="space-x-8 hidden lg:flex items-center"
              >
                <Link
                  spy={true}
                  smooth={true}
                  offset={-100}
                  to={items.path}
                  key={items.link}
                  href="footer"
                  className="bg-brandPrimary text-white  py-2 px-4 transition-all duration-300 rounded hover:bg-neutralDGrey"
                >
                  {items.link}
                </Link>
              </motion.div>
            </div>
          </div>
          <div className="my-28 md:my-8 py-12 flex flex-col w-full mx-auto md:flex-row-reverse items-center justify-between gap-12">
            <img className="md:w-1/2" src={banner3} alt="" />
            {/* hero text */}
            <div className="md:w-1/2">
              <h1 className="text-5xl mb-4 font-semibold text-neutralDGrey md:w-3/4 leading-snug">
                {t("home.banner3.line1")}{" "}
                <span className="text-brandPrimary leading-snug">
                  {t("home.banner3.line2")}
                </span>
              </h1>
              <p className="text-neutralGrey text-base mb-8">
                {t("home.banner3.line3")}
              </p>
              {/* <button className="px-7 py-2 bg-brandPrimary text-white rounded hover:bg-neutralDGrey">
                {t("home.button")}
              </button> */}
              <motion.div
                variants={fadeIn("up", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="space-x-8 hidden lg:flex items-center"
              >
                <Link
                  spy={true}
                  smooth={true}
                  offset={-100}
                  to={items.path}
                  key={items.link}
                  href="footer"
                  className="px-7 py-2 bg-brandPrimary text-white rounded hover:bg-neutralDGrey"
                >
                  {items.link}
                </Link>
              </motion.div>
            </div>
          </div>
        </Carousel>
      </div>
    </motion.div>
  );
};

export default Home;
