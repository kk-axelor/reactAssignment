import React from "react";
import Navbar from "./component/navbar/Navbar";
import Hero from "./component/hero/Hero";
import About from "./component/about/About";
import Blog from "./component/blog/Blog";
import Contact from "./component/contact/Contact";
import Service from "./component/service/Service";


function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Hero />
      <About />
      <Service />
      <Blog />
      <Contact />
    </React.Fragment>

  );
}

export default App;
