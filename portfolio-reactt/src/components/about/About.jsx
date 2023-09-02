import React from "react";
import "./about.css";
import Image from "../../assets/avatar-2.svg";

const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About Me</h2>
      <div className="about__container grid"></div>
      <img src={Image} alt="" className="about__img" />
      <div className="about__data grid">
        <div className="about__info">
          <p className="about__description">
            I am Shaghayegh Asadi, Junior web developer from Liverpool, United Kingdom.
            I have enrolled a course at Tech-Educators MERN bootcamp, and I am passionate about designing websites. 
            <a href="" className="btn">Download CV</a>
          </p>
        </div>
      </div>
    </section>
  );
};
export default About;
