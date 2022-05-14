import React, { useEffect } from "react";

// Add CSS
import "../../style/container/about.css";
import "../../index.css";

// Add AOS
import  AOS  from "aos";
import 'aos/dist/aos.css';

// Add components
import AboutJumbotron from "./components/jumbotron";
import AboutContent from "./components/content";

const About = () => {
    // AOS
    useEffect(() => {
        AOS.init();
    });
    
    return (
        <div className="about-page">
            <AboutJumbotron />

            <AboutContent />
        </div>
    );
};

export default About;