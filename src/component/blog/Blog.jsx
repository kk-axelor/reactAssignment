import React from "react";
import "./blog.css";
import { BLOG_DATA as blogdata } from "../../constant";
const Blog = () => {
  return (
    <div className="blog-container" id="blog">
      <div className="blog-wrapper">
        <h1>My blog</h1>
        <div className="card-wrapper">
          {blogdata?.map((item, i) => (
            <div key={item.id} className="blog-card">
              <img src={item.img} alt="" />
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
