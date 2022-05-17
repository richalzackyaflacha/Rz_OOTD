import React, { useEffect } from "react";

// Add CSS
import "../../style/container/style.css";
import "../../index.css";

// Add AOS
import  AOS  from "aos";
import 'aos/dist/aos.css';

// Add components
import StyleJumbotron from "./components/jumbotron";
import StyleContent from "./components/content";

const Style = () => {

    // AOS
    useEffect(() => {
        AOS.init();
    });
    
    return (
        <div className="style-page">
            <StyleJumbotron />

            <StyleContent/>
        </div>
    );
};

export default Style;