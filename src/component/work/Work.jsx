import React from "react";
import "./work.css";
const Work = () => {
  return (
    <section className="service-container" id="service">
      <div className="service-wrapper">
        <h1>My Services</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas,
          reiciendis! Animi accusantium, optio voluptas facilis aut natus minus
          iusto dicta consequatur! Pariatur velit error rerum, quasi eius
          repudiandae reiciendis. Iusto.
        </p>
        <div className="service-items">
          <div className="service-item">
            <i className="fa-solid fa-pen-nib service-icon"></i>
            <p>Web Design</p>
          </div>
          <div className="service-item">
            <i className="fa-solid fa-code service-icon"></i>
            <p>Frontend Development</p>
          </div>
          <div className="service-item">
            <i className="fa-solid fa-layer-group service-icon"></i>
            <p>MERN Stack</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
