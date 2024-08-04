import About from "../components/Landing/About";
import Blog from "../components/Landing/Blog";
import Footer from "../components/Landing/Footer";
import Home from "../components/Landing/Home";
import Navbar from "../components/Landing/Navbar";
import Newsletter from "../components/Landing/Newsletter";
import Product from "../components/Landing/Product";
import Services from "../components/Landing/Services";

export default function HomeView() {
  return (
    <>
      <Navbar />
      <Home />
      <Services />
      <About />
      <Product />
      <Blog />
      <Newsletter />
      <Footer />
    </>
  );
}
