import React from "react";
import { Link } from "react-router-dom";

// Add content
import CardNewPhoto from "./content-content/cardNewPhoto";
import CarousellPhoto from "./content-content/carousellPhoto";

//Add Fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

// Add picture
import StylePhoto1 from "../../../assets/img/StylePhoto1.jpg";
import StylePhoto2 from "../../../assets/img/StylePhoto2.jpg";

const HomeContent = () => {
    return (
        // Content Home Page
        <div className="home-content" id="content">

            {/* News Photo Content */}
            <div className="new-photo">
                <div className="title-new-photo" data-aos="fade-up" data-aos-duration="1000">
                    <p>Foto Terbaru</p>
                </div>

                <CardNewPhoto />
                
                <div className="more-photo">
                    <Link to='/galeri'>
                        Foto Lainnya 
                        <FontAwesomeIcon icon={faAngleRight} />
                    </Link>
                </div>
            </div>


            {/* Style Content */}
            <div className="style-photo">
                <div className="title-style-photo"  data-aos="fade-up" data-aos-duration="1000">
                    <p>Style</p>
                </div>

                <div className="my-style-photo">
                    <div className="my-pict">
                        <div className="my-pict-content" data-aos="flip-up" data-aos-duration="1000">
                            <img src={StylePhoto1} alt="Style" />
                        </div>


                        <div className="my-pict-content" data-aos="flip-up" data-aos-duration="1000">
                            <img src={StylePhoto2} alt="Style" />
                        </div>
                    </div>


                    <div className="button-to-style">
                        <Link to='/style' data-aos="zoom-in" data-aos-duration="1000">
                            <button>Style</button>
                        </Link>
                    </div>
                </div>
            </div>


            {/* Carousell Content */}
            <div className="carousell-photo">
                <div className="title-carousell-photo" data-aos="fade-up" data-aos-duration="1000">
                    <p>Outfit</p>
                </div>

                <CarousellPhoto />
            </div>
        </div>
    );
};

export default HomeContent;