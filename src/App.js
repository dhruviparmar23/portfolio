import "./App.css";
import React from "react";
import Nav from "./Components/Navbar/Nav";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from "./Components/ContactUs/Contact";

function App() {
  return (
    <>
      <Nav />
      <Home />
      <About/>
      <Portfolio />
      <Contact />  
    </>
  );
}

export default App;
