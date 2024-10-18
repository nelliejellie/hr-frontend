import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import TitleText from "./Components/TitleText";
import AboutUs from "./Components/AboutUs";
import Services from "./Components/Services";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <TitleText />
      <AboutUs />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
