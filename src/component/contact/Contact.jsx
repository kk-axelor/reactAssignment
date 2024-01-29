import React from "react";
import "./contact.css";
const Contact = () => {
  return (
    <section className="contact-container" id="contact">
      <div className="contact-wrapper">
        <h1>Contact Us</h1>
        <form>
          <div className="form-group">
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Email" />
          </div>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="eg:-sleave some comment for us"
          ></textarea>
          <button>Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
