import React from "react";

// Add CSS 
import "../../style/container/galery.css"

// Add components
import GaleryJumbotron from "./components/galeryJumbotron";
import ContentGalery from "./components/contentGalery";

const Galery = () => {
    return (
        <div className="galery-page">
            <GaleryJumbotron />

            <ContentGalery />
        </div>
    );
};

export default Galery;