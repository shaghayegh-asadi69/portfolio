/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./about.css";
import Image from "../../assets/FLBD4985.JPG";
import AboutBox from "./AboutBox";
const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About Me</h2>

      <div className="about__container grid">
        <img src={Image} alt="" className="about__img" />

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              Hello there! I'm Shaylee, a resident of the vibrant city
              of Liverpool in the United Kingdom. I recently emerged
              triumphantly from the coding trenches, having conquered the
              challenges of a comprehensive course at Tech-Educators MERN
              bootcamp. What sets me apart? Well, besides my impressive ability
              to dodge raindrops in Liverpool, I've developed a fervent passion
              for designing websites. I see websites not just as lines of code
              but as canvases waiting for creativity to splash onto them. My
              mission? To turn digital landscapes into captivating experiences.
              Whether I'm orchestrating a symphony of code or bringing fresh
              ideas to life, I'm your go-to enthusiast for all things web
              design. Let's transform concepts into reality and make the
              internet a more visually exciting place, one pixel at a time!{" "}
            </p>
            <a href="/dvcv.pdf" className="btn">
              Download CV
            </a>
          </div>

          <div className="about__skills grid">
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">UI/UX design</h3>
                <span className="skills__number">90%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage development"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Development</h3>
                <span className="skills__number">80%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage ui__design"></span>
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Frontend</h3>
                <span className="skills__number">80%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage frontend"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AboutBox />
    </section>
  );
};
export default About;
