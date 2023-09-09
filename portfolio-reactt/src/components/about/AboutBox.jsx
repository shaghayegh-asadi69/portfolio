import React from 'react';

const aboutBox = () => {
  return (
    <div className="about__boxes grid">
      <div className="about__box">
        <i className="about__icon icon-people"></i>
        <div>
          <h3 className="about__subtitle">0</h3>
          <span className="about__subtitle">satisfied client</span>
        </div>
      </div>
      <div className="about__box">
        <i className="about__icon icon-fire"></i>
        <div>
          <h3 className="about__subtitle">53</h3>
          <span className="about__subtitle">Project compeleted</span>
        </div>
      </div>
      <div className="about__box">
        <i className="about__icon icon-cup"></i>
        <div>
          <h3 className="about__subtitle">5670</h3>
          <span className="about__subtitle">cup of cofee</span>
        </div>
      </div>
    </div>
  );
}

export default aboutBox;
