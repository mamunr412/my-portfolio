import React from "react";
import AboutMe from "../AboutMe/AboutMe";
import Footer from "../Footer/Footer";
import HomeBanner from "../HomeBanner/HomeBanner";
import Menuber from "../Menuber/Menuber";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";

const Home = () => {
  return (
    <div id="home" style={{ backgroundColor: "#e1e1e1" }}>
      <Menuber></Menuber>
      <HomeBanner></HomeBanner>
      <Projects></Projects>
      <Skills></Skills>
      <AboutMe></AboutMe>
      <Footer></Footer>
    </div>
  );
};

export default Home;
