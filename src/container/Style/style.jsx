import React from "react";

// Add CSS
import "../../style/container/style.css";
import "../../index.css";

// Add components
import StyleJumbotron from "./components/jumbotron";
import StyleContent from "./components/content";

const Style = () => {
    return (
        <div className="style-page">
            <StyleJumbotron />

            <StyleContent/>
        </div>
    );
};

export default Style;