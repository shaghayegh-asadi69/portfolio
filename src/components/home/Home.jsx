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
        <span className="home__education">
          Meet Shaghayegh, the self-proclaimed c0ding witch.
        </span>
        <span>
          <HeaderSocials />

          <a href="#contact" className="btn">
            Contact Me
          </a>
          <ScrollDown />
        </span>
      </div>
    </section>
  );
};

export default Home;
