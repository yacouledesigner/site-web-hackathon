import React, { Fragment } from "react";
import Header from "../components/Header/Header";
import HeroSection from "../components/Hero-Section/HeroSection";
import Courses from "../components/Courses-section/Courses";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <div className="home">
      <Fragment>
        <Header />
        <HeroSection />
        <Courses />
        {/* <Footer /> */}
      </Fragment>
    </div>
  );
};

export default Home;
