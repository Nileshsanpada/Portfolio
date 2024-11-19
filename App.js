import React from "react";
import Navbar from "./Components/Navbar.jsx";
import Home from './Components/Home.jsx';
import About from "./Components/About.jsx";
import Skills from "./Components/Skills.jsx";
import Contact from "./Components/Contact.jsx";
import Project from "./Components/Project.jsx";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import "./Components/Style.css";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <div id="home"><Home /></div>
        <div id="about"><About /></div>
        <div id="project"><Project /></div>
        <div id="skills"><Skills /></div>
        <div id="contact"><Contact /></div>
      </div>
    </>
  );
};

export default App;
