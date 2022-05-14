import React from "react";

// Add image
import StyleBackground from "../../../assets/background/s-jumbotron.png"

//Add Fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const StyleJumbotron = () => {
    return (
        // Jumbotron
        <div className="style-jumbotron">
            {/* Background */}
            <img src={StyleBackground} alt="Background" />
            
            <div className="jumbotron-content">
                {/* Text Content */}
                <div className="content-text">
                    <div className="top-text">
                        <p>Rz OOTD</p>
                    </div>

                    <div className="bottom-text">
                        <p>Style</p>
                    </div>
                </div>


                {/* Button to Content */}
                <div className="button-to-content">
                    <a href="#StyleContent">
                        <button>
                            Lihat Outfit&nbsp;
                            <FontAwesomeIcon icon={faAngleRight} />
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default StyleJumbotron;