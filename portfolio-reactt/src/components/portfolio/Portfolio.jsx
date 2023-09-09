import React, { useState } from "react";
import "./portfolio.css";
import Menu from "./Menu";

const Portfolio = () => {
  const [items, setItems] = useState(Menu);

  return (
    <section className="work container section" id="work">
      <h2 className="section__title">Resent Works</h2>

      <div className="work__filters">
        <span className="work__item">Everything</span>
        <span className="work__item">Creative</span>
        <span className="work__item">Art</span>
        <span className="work__item">Design</span>
      </div>


    </section>
  );
};

export default Portfolio;
