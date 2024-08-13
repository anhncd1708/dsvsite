import React from "react";
import aboutImg from "../../assets/login.jpg";
import Maecenas from "../../assets/network.png";
import { useTranslation } from "react-i18next";

// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../../variants";

const Product = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <div className="my-12">
      {/* about text */}
      <div
        className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-12"
        id="product"
      >
        <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="w-1/2"
          >
            <img src={aboutImg} alt="" />
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="md:w-3/5 mx-auto"
          >
            <h2 className="text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5">
              {t("product.title")}
            </h2>
            <p className="md:w-3/4 text-sm text-neutralGrey mb-8">
              {t("product.content")}
            </p>
            <button className="btn-primary">{t("product.button")}</button>
          </motion.div>
        </div>
      </div>

      {/* company stats */}
      <motion.div
        id="testimonial"
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.6 }}
        className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16"
      >
        <div className="flex flex-col md:flex-row justify-start items-center gap-8">
          <div className="md:w-1/3">
            <img src={Maecenas} alt="" />
          </div>

          {/* stats */}
          <div className="md:w-2/3 mx-auto">
            <div>
              <p className="md:w-4/5 text-sm text-neutralGrey mb-8 leading-6">
                {t("ourmission.content")}
              </p>
              <h5 className="text-brandPrimary text-xl font-semibold mb-2">
                {t("ourmission.title")}
              </h5>
              <p className="text-base text-neutralGrey mb-8">
                {t("ourmission.slogan")}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Product;
