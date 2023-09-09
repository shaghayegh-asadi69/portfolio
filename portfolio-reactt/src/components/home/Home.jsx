import React from "react";
import "./home.css";
import Me from "../../assets/me.jpg";
import HeaderSocials from "./HeaderSocials";
import ScrollDown from "./ScrollDown";

const Home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={Me} alt="" className="home__img" />
        <h1 className="home__name">Shaghayegh Asadi</h1>
        <span className="home__education">I'm a front-End developer</span>
        <span>
          <HeaderSocials />

          <a
            href="https://1drv.ms/w/s!Aug2_MWD-VpLg0b0IGPBTpEIzB-U?e=cFJDuF"
            className="btn"
          >
            Contact Me
          </a>
          <ScrollDown />
        </span>
      </div>
    </section>
  );
};

export default Home;
