import React from "react";
import "./hero.css";

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-wrapper">
        <img
          src="https://img.freepik.com/free-vector/man-profile-account-picture_24908-81754.jpg?w=826&t=st=1706506180~exp=1706506780~hmac=955674e394e3ece6a7ec7fd3ce86bea255cea6cc99bd175f304b823d02e7f117"
          alt=""
        />
        <h1>Hii, I am Stanley!</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut incidunt
          molestias quod obcaecati, quos quaerat sint ab excepturi accusamus
          velit mollitia itaque ipsa illo laborum nihil! Voluptatibus ea
          dignissimos impedit!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore
          <span className="news-letter">Our Newsletter</span> doloribus nisi
          dolorem, veritatis magnam vel assumenda suscipit repudiandae quos
          sequi harum sapiente nesciunt minus, animi eum consequatur laudantium
          dicta voluptas.
        </p>
      </div>
    </section>
  );
};

export default Hero;
