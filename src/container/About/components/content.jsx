import React from "react";

// Add CSS 
import "../../../style/container/about.css";

// Add picture
import AboutPict1 from "../../../assets/img/AboutPicture.jpg";
import ProfilePict from "../../../assets/img/ProfilePicture.jpg";

// Add Fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faGithub, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";

const AboutContent = () => {
    return ( 
        // Content
        <div className="about-content" id="About-content">
            {/* About Content */}
            <div className="about-rzootd">
                {/* Picture */}
                <div className="image-content" data-aos="fade-right" data-aos-duration="1000">
                    <img src={AboutPict1} alt="About Picture" />
                </div>


                {/* Text */}
                <div className="text-content" data-aos="fade-up" data-aos-duration="1000">
                    <h1>Tentang Rz OOTD</h1>
                    <p>Rz OOTD adalah salah satu project dari Rz Project berupa website fashion, yang berisi foto-foto, style, OOTD, dan outfit inspiration.</p>
                </div>
            </div>


            {/* Profile Content */}
            <div className="profile">
                <h1 data-aos="fade-up" data-aos-duration="1000">Profil</h1>

                <div className="content-profile">
                    {/* Picture */}
                    <div className="content-image" data-aos="fade-right" data-aos-duration="1500">
                        <img src={ProfilePict} alt="Profile Picture" />
                    </div>


                    {/* Text */}
                    <div className="content-text" data-aos="fade-up" data-aos-duration="1500">
                        <h1>Richal Zacky Aflacha</h1>

                        <p>Saya adalah Devloper dari Rz Project khususnya Rz OOTD, dan juga saya sebagai model dari website ini. Klik link sosial media di bawah untuk melihat profil saya.</p>
                        
                        <div className="sosmed">
                            <li>
                                <a href="https://www.instagram.com/richalzacky/" target="_blank">
                                    <FontAwesomeIcon icon={faInstagram} />
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/richalzackyaflacha" target="_blank">
                                    <FontAwesomeIcon icon={faGithub} />
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com/" target="_blank">
                                    <FontAwesomeIcon icon={faTwitter} />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.youtube.com/channel/UCYpN1z_35f_joMNOv1ounyw" target="_blank">
                                    <FontAwesomeIcon icon={faYoutube} />
                                </a>
                            </li>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutContent;