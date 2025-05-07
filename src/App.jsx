
import {createBrowserRouter , RouterProvider } from "react-router-dom";

import React from "react";
import LandingPage from "./components/LandingPage";

// importing components 

import { Home } from "./components/Home.jsx";
import { About } from "./components/About.jsx";
import { OurProcess } from "./components/OurProcess.jsx";
import { OurClients } from "./components/OurClients.jsx";
import { OurFounder } from "./components/OurFounder.jsx";
import { Cta } from "./components/Cta.jsx";

const App = () => {

  const routes = createBrowserRouter([
    {
      path : "/",
      element : <Home />
    },
    {
      path : "/about",
      element : <About />
    },
    {
      path : "/our-process",
      element : <OurProcess />
    },
    {
      path : "/our-clients",
      element : <OurClients />
    },
    {
      path : "/founder",
      element : <OurFounder />
    },
    {
      path : "/build-your-legacy",
      element : <Cta />
    }
  ]);


  return( 

    <RouterProvider router={routes} />

  );
};

export default App;
