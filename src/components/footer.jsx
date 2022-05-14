import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";

// Add CSS
import "../style/components/footer.css";

// Add Fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTwitter, faYoutube, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

// Add Email js
import emailjs from '@emailjs/browser';

// Add AOS
import  AOS  from "aos";
import 'aos/dist/aos.css';

// Add Sweetalert
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/dist/sweetalert2.css';

const Footer = () => {

    // Email JS
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_m5805es', 'template_kpi1poe', form.current, 'sUVAE5ULsYs5AWTtR')
            .then((result) => {
                console.log(result.text);
                Swal.fire({
                    title: 'Sukses Mengirim Pesan',
                    icon: 'success',
                });
                e.target.reset();
            }, (error) => {
                console.log(error.text);
            }
        );
    };

    // AOS
    useEffect(() => {
        AOS.init();
    });

    return (
        <div className="footer">
            <p data-aos="fade-up" data-aos-duration="1000">Rz OOTD</p>

            {/* Footer Content */}
            <div className="footer-content">

                {/* Rz Project */}
                <div className="content-ootd" data-aos="flip-up" data-aos-duration="1000">
                    <p>Rz Project</p>

                    <div className="footer-menu">
                        <li>
                            <a href="http://rz-portfolio.herokuapp.com/" target="_blank">
                                Rz Portfolio
                            </a>
                        </li>
                        <li>
                            <a href="https://rz-quran.vercel.app/" target="_blank">
                                Rz Qur'an
                            </a>
                        </li>
                        <li>
                            <a href="" target="_blank">
                                Rz OOTD
                            </a>
                        </li>
                    </div>
                </div>


                {/* Social Media */}
                <div className="content-ootd" data-aos="flip-up" data-aos-duration="1000">
                    <p>Sosial Media</p>

                    <div className="footer-menu">
                        <li>
                            <a href="https://www.instagram.com/richalzacky/" target="_blank">
                                <FontAwesomeIcon icon={faInstagram} />
                                &ensp;Instagram
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/richalzackyaflacha" target="_blank">
                                <FontAwesomeIcon icon={faGithub} />
                                &ensp;Git Hub
                            </a>
                        </li>
                        <li>
                            <a href="" target="_blank">
                                <FontAwesomeIcon icon={faTwitter} />
                                &ensp;Twitter
                            </a>
                        </li>
                        <li>
                            <a href="https://www.youtube.com/channel/UCYpN1z_35f_joMNOv1ounyw" target="_blank">
                                <FontAwesomeIcon icon={faYoutube} />
                                &ensp;Youtube
                            </a>
                        </li>
                    </div>
                </div>


                {/* About Rz OOTD */}
                <div className="content-ootd" data-aos="flip-up" data-aos-duration="1000">
                    <p>Tentang Rz OOTD</p>

                    <div className="footer-menu">
                        <li>
                            <Link to="/tentang">Tentang</Link>
                        </li>
                        <li>
                            <Link to="/style">Style</Link>
                        </li>
                        <li>
                            <Link to="/galeri">Galeri</Link>
                        </li>
                    </div>
                </div>


                {/* Message */}
                <div className="content-ootd content-ootd-coment" data-aos="flip-up" data-aos-duration="1000">
                    <p>Beri Saran Kamu</p>

                    <div className="coment">
                        <form ref={form} onSubmit={sendEmail}>
                            <input type="email" name="user_email" placeholder="E-mail..." required />

                            <textarea name="message" placeholder="Saran..." required />

                            <button type="submit" >Kirim</button>
                        </form>
                    </div>
                </div>
            </div>


            {/* Copyright */}
            <div className="footer-copyright">
                <div className="location">
                    <a href="https://goo.gl/maps/WuoyZdPoHAiqPgzK8" target="_blank">
                        <FontAwesomeIcon icon={faLocationDot} /> 
                        &ensp;Bogor, Jawa Barat
                    </a>
                </div>

                <div className="copyright">
                    <h3>&copy; Rz OOTD 2022</h3>
                </div>
            </div>
        </div>
    );
};

export default Footer;