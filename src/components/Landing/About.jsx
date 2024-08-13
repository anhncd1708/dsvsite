import React from "react";
import aboutImg from "../../assets/about.jpg";

// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../../variants";
import { useTranslation } from "react-i18next";

const About = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <div>
      {/* about text */}
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8" id="about">
        <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.6 }}
            className="w-1/2"
          >
            <img src={aboutImg} alt="" />
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
            className="md:w-3/5 mx-auto"
          >
            <h2 className="text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5">
              {t("about.title")}
            </h2>
            <p className="md:w-3/4 text-sm text-neutralGrey mb-8">
              {t("about.content")}
            </p>
            <p className="md:w-3/4 text-sm text-neutralGrey mb-8">
              {t("about.slogan")}
            </p>
            <button className="btn-primary">Learn More</button>
          </motion.div>
        </div>
      </div>

      {/* company stats */}
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16"
      >
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="md:w-1/2">
            <h2 className="text-4xl text-neutralDGrey font-semibold mb-2 md:w-2/3">
              {t("about.stats.content.line1")} <br />{" "}
              <span className="text-brandPrimary">
                {t("about.stats.content.line2")}
              </span>
            </h2>
            <p>{t("about.stats.content.line3")}</p>
          </div>

          {/* stats */}
          <div className="md:w-1/2 mx-auto flex sm:flex-row flex-col sm:items-center justify-around gap-12">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div>
                  <h4 className="text-2xl text-neutralDGrey font-semibold">
                    {t("about.stats.cost.line1")}
                  </h4>
                  <p> {t("about.stats.cost.line2")}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div>
                  <h4 className="text-2xl text-neutralDGrey font-semibold">
                    {t("about.stats.processing.line1")}
                  </h4>
                  <p>{t("about.stats.processing.line2")}</p>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div>
                  <h4 className="text-2xl text-neutralDGrey font-semibold">
                    {t("about.stats.security.line1")}
                  </h4>
                  <p>{t("about.stats.security.line2")}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div>
                  <h4 className="text-2xl text-neutralDGrey font-semibold">
                    {t("about.stats.commitment.line1")}
                  </h4>
                  <p>{t("about.stats.commitment.line2")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
