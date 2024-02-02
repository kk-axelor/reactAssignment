import React from "react";
import "./about.css";
// Add modle syling

const About = () => {
  return (
    <section className="about-container" id="about">
      <div className="about-wrapper">
        <div className="left image-container">
          <img
            src="https://img.freepik.com/free-vector/books-stack-realistic_1284-4735.jpg?t=st=1706507341~exp=1706507941~hmac=f7e93b16cd30af78e0427cd6ab671dd909b454053d0d115ca5f90e798b105af1"
            alt=""
          />
        </div>
        <div className="right profile-container">
          <h1>About me</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus
            officia suscipit minus perspiciatis, accusamus fuga tempora nulla
            quod eligendi fugit? Odit error velit optio eveniet a accusantium
            vel dolore recusandae!
          </p>
          <div className="about-info">
            <div className="item">
              <span>Name:</span>
              <p>Kunal kumar shaw</p>
            </div>
            <div className="item">
              <span>Email:</span>
              <p>shawkunal3010@gmail.com</p>
            </div>
            <div className="item">
              <span>Phone:</span>
              <p>+91-6289197569</p>
            </div>
            <div className="item">
              <span>Twitter:</span>
              <p>shaw_kunaXYFl</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
