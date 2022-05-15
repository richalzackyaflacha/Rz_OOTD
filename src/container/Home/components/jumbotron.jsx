import React from "react";
import { Link } from "react-router-dom";

// Add asset
import BgHomeJumbotron from "../../../assets/background/h-jumbotron.png";

// Add Fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faTwitter, faYoutube, faGithub } from "@fortawesome/free-brands-svg-icons";

const HomeJumbotron = () => {
    return (
        // Home Jumbotron
        <div className="home-jumbotron">

            {/* Background */}
            <div className="bg-home-jumbotron">
                <img src={BgHomeJumbotron} alt="Background" />
            </div>


            {/* Content */}
            <div className="bg-content-jumbotron">
                <div className="content-jumbotron">
                    {/* Title */}
                    <div className="content-text">
                        <p className="title">Rz OOTD</p>
                        <p className="desc">It's my style</p>
                    </div>


                    {/* Button Action */}
                    <div className="content-button">
                        <Link to='/style'>
                            <button className="btn-style">Style</button>
                        </Link>
                        <Link to='/galeri'>
                            <button className="btn-galeri">Galeri</button>
                        </Link>
                    </div>
                </div>
            </div>


            {/* Footer */}
            <div className="footer-jumbotron">
                {/* Social Media */}
                <div className="sosmed">
                    <li>
                        <a target="_blank" href="https://www.instagram.com/richalzacky/">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                    </li>
                    <li>
                        <a target="_blank" href="https://github.com/richalzackyaflacha">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                    </li>
                    <li>
                        <a target="_blank" href="https://twitter.com/">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                    </li>
                    <li>
                        <a target="_blank" href="https://www.youtube.com/channel/UCYpN1z_35f_joMNOv1ounyw">
                            <FontAwesomeIcon icon={faYoutube} />
                        </a>
                    </li>
                </div>


                {/* Button Next */}
                <div className="btn-next">
                    <a href="#content">
                        <FontAwesomeIcon icon={faArrowRightLong}/>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default HomeJumbotron;