import React from "react";
import { Routes, Route } from "react-router-dom";

import About from "./components/About.jsx";
import OurProcess from "./components/OurProcess.jsx";
import OurClients from "./components/OurClients.jsx";
import { OurFounder } from "./components/OurFounder.jsx";
import { Cta } from "./components/Cta.jsx";
import LandingPage from "./components/LandingPage.jsx";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/about" element={<About />} />
      <Route path="/our-process" element={<OurProcess />} />
      <Route path="/our-clients" element={<OurClients />} />
      <Route path="/founder" element={<OurFounder />} />
      <Route path="/build-your-legacy" element={<Cta />} />
    </Routes>
  );
};

export default App;
