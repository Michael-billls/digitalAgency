import React, { useEffect } from "react";

// Component import
import Navbar from "./component/Navbar/Navbar";
import Hero from "./component/Navbar/Hero";
import BrandsLogo from "./component/Navbar/BrandLogo";
import Services from "./component/Navbar/Services";
import Testimonial from "./component/Navbar/Testimonials";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import BlogsComp from "./component/Navbar/BlogsComp";
import Footer from "./component/Navbar/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
const App = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in",
      offset: 100,
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <div className="bg-white dark:bg-black dark:text-white text-black overflow-x-hidden">
      <Navbar />
      <Hero />
      <BrandsLogo />
      <Services />
      <Testimonial />
      <BlogsComp />
      <Footer />
    </div>
  );
};

export default App;
