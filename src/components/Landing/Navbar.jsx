import { useEffect, useState } from "react";
import logo from "../../assets/logo.png";

import { Link } from "react-scroll";
import { motion } from "framer-motion";
// import icons from react icons
import { GrLanguage } from "react-icons/gr";
import { FaXmark, FaBars } from "react-icons/fa6";
import { useTranslation } from "react-i18next";
import LanguagePopover from "./common/LanguagePopover";
import { fadeIn } from "../../variants";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [t, i18n] = useTranslation("global");
  const home = t("navbar.home");
  const service = t("navbar.service");
  const about = t("navbar.about");
  const product = t("navbar.product");
  const contact = t("navbar.contact");
  const commitment = t("navbar.commitment");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
        setIsMenuOpen(false);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { link: home, path: "home" },
    { link: service, path: "service" },
    { link: about, path: "about" },
    { link: product, path: "product" },
    { link: commitment, path: "testimonial" },
  ];
  return (
    <header className=" bg-white md:bg-transparent fixed top-0 left-0 right-0">
      <nav
        className={`py-1 lg:px-14 px-4 ${
          isSticky
            ? "sticky top-0 right-0 left-0 border bg-white transition-all duration-300"
            : ""
        }`}
      >
        <div className="flex justify-between items-center text-base gap-8">
          <a
            href=""
            className="text-2xl font-semibold flex items-center space-x-3"
          >
            <img src={logo} alt="" className="w-20 inline-block items-center" />
            {/* <span>DSV</span> */}
          </a>

          <ul className="md:flex space-x-12 hidden">
            {navItems.map(({ link, path }) => (
              <Link
                to={path}
                spy={true}
                smooth={true}
                offset={-100}
                key={link}
                href={path}
                className="block text-base text-gray900 hover:text-brandPrimary first:font-medium"
              >
                {link}
              </Link>
            ))}
          </ul>

          <motion.div
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="space-x-8 hidden lg:flex items-center"
          >
            <LanguagePopover />
            <Link
              spy={true}
              smooth={true}
              offset={-100}
              key={contact}
              href="footer"
              to="footer"
              className="bg-brandPrimary text-white  py-2 px-4 transition-all duration-300 rounded hover:bg-neutralDGrey"
            >
              {contact}
            </Link>
          </motion.div>

          {/* menu btn, visible on mobile screen */}
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="md:w-3/5 mx-auto md:hidden"
          >
            <button
              onClick={toggleMenu}
              className="text-gray900 focus:outline-none focus:text-gray-500"
            >
              {isMenuOpen ? (
                <FaXmark className="h-6 w-6 text-primary" />
              ) : (
                <FaBars className="h-6 w-6 text-primary" />
              )}
            </button>
          </motion.div>
        </div>

        <div
          className={`space-y-4 px-4 mt-16 py-7 bg-brandPrimary ${
            isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"
          }`}
        >
          {navItems.map(({ link, path }) => (
            <Link
              to={path}
              spy={true}
              smooth={true}
              offset={-90}
              key={link}
              onClick={toggleMenu}
              className="block  text-white hover:text-gray-500"
            >
              {link}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
