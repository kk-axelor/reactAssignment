import React from "react";
import "./service.css";
const Service = () => {
  return (
    <section class="service-container" id="service">
      <div class="service-wrapper">
        <h1>My Services</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas,
          reiciendis! Animi accusantium, optio voluptas facilis aut natus minus
          iusto dicta consequatur! Pariatur velit error rerum, quasi eius
          repudiandae reiciendis. Iusto.
        </p>

        <div class="service-items">
          <div class="service-item">
            <i class="fa-solid fa-pen-nib service-icon"></i>
            <p>Web Design</p>
          </div>
          <div class="service-item">
            <i class="fa-solid fa-code service-icon"></i>
            <p>Frontend Development</p>
          </div>
          <div class="service-item">
            <i class="fa-solid fa-layer-group service-icon"></i>
            <p>MERN Stack</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
