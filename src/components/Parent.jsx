

// importing components

import Navbar from "./CommonComponents/Navbar.jsx";
import LandingPage from "./LandingPage.jsx";
import About from "./About.jsx";
import OurProcess from "./OurProcess.jsx";
import OurClients from "./OurClients.jsx";
import OurFounder from "./OurFounder.jsx";
import Cta from "./Cta.jsx";
import Footer from "./Footer.jsx";

export default function Parent()
{
    return (
        <>
            <div className="min-h-screen bg-[#1a1a1a] text-white w-full" >
                <Navbar />
                <LandingPage />
                <About />
                <OurProcess />
                <OurClients />
                <OurFounder />
                <Cta />
                <Footer />
            </div>
        </>
    );
}