import React, { useEffect } from "react";

// Add CSS 
import "../../style/container/galery.css";

// Add AOS
import  AOS  from "aos";
import 'aos/dist/aos.css';

// Add components
import GaleryJumbotron from "./components/galeryJumbotron";
import ContentGalery from "./components/contentGalery";

const Galery = () => {

    // AOS
    useEffect(() => {
        AOS.init();
    });
    
    return (
        <div className="galery-page">
            <GaleryJumbotron />

            <ContentGalery />
        </div>
    );
};

export default Galery;