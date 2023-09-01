import React from "react"
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Resume from "./components/Resume";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
       <About />
      <Resume />
      <Skills />
      <Projects />
      <Contact />
      <Footer /> {/**/}
    </>
  );
}

export default App;
