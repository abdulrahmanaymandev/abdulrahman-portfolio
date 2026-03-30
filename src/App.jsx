import React from "react";

import Nav from "./components/nav/Nav";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Services from "./components/services/Services";
import Skills from "./components/skills/Skills";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Nav />
      <Home />
      <About />
      {/* <Services /> */}
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
