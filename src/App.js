import React from "react";
import "./App.css";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <div>
      <Navbar/>
      <div className="section">
        <Home />
      </div>
      <div className="section">
        <About />
      </div>
      <div className="section">
        <Contact />
      </div>
    </div>
  );
};

export default App;
