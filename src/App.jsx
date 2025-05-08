import React from "react";
import { Routes, Route } from "react-router-dom";

// importing components

import AppLayout from "./AppLayout.jsx";

import LandingPage from "./components/LandingPage.jsx";
import About from "./components/About.jsx";
import OurProcess from "./components/OurProcess.jsx";
import OurClients from "./components/OurClients.jsx";
import OurFounder from "./components/OurFounder.jsx";
import Cta from "./components/Cta.jsx";

const App = () => {
  return (
    <>
      <LandingPage />
      <About />
      <OurProcess />
      <OurClients />
      <OurFounder />
      <Cta />
    </>
  );
};

export default App;
