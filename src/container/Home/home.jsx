import React, { useEffect } from "react";

// Add CSS
import "../../style/container/home.css";
import "../../index.css";

// Add AOS
import  AOS  from "aos";
import 'aos/dist/aos.css';

// Add components
import HomeJumbotron from "./components/jumbotron";
import HomeContent from "./components/content";
import InstagramPost from "./components/igPost";

const Home = () => {
    
    // AOS
    useEffect(() => {
        AOS.init();
    });

    return (
        <div className="home-page">
            <HomeJumbotron />

            <HomeContent />

            <InstagramPost />
        </div>
    );
};

export default Home;