import React from "react";

// Add CSS 
import "../../../style/container/about.css"

// Add image
import ImageJumbotron from "../../../assets/background/a-jumbotron.jpg"

// Add Fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const AboutJumbotron = () => {
    return (
        // Jumbotron
        <div className="about-jumbotron">
            {/* Background */}
            <img src={ImageJumbotron} alt="About Jumbotron" />

            {/* Title */}
            <div className="jumbotron-content">
                <p>Rz OOTD</p>

                <div className="button-to-about">
                    <button><a href="#About-content"><FontAwesomeIcon icon={faCaretDown} /></a></button>
                </div>
            </div>
        </div>
    )
}

export default AboutJumbotron;