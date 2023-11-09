import React, { useState } from "react";
import "./portfolio.css";
import Menu from "./Menu.jsx";

const Portfolio = () => {
  const [items, setItems] = useState(Menu);
  const filterItem = (categoryItem) => {
    const updateItems = Menu.filter((curElem) => {
      return curElem.category === categoryItem;
    });
    setItems(updateItems);

  }
  

  return (
    <section className="work container section " id="work">

      <h2 className="section__title">Recent Works</h2>

      <div className="work__filters">
        <span className="work__item" onClick={() => setItems(Menu)}>
          Everything
        </span>
        <span className="work__item" onClick={() => filterItem("Creative")}>
          Creative
        </span>
        <span className="work__item" onClick={() => filterItem("Art")}>
          Art
        </span>
        <span className="work__item" onClick={() => filterItem("Design")}>
          Design
        </span>
      </div>
      <div className="work__container grid">
        {Menu.map(menu =>
          <div className="work__card" key={menu.id}>
            <span className="work__category">{menu.category}</span>
            <h3 className="work__title">{menu.title}</h3>
            <a href={menu.src} className="work__button">
              <i className="icon-link work__button-icon"></i>
            </a>
          </div>
        )};
      
      </div>
        
    </section>
  );
}

export default Portfolio;
