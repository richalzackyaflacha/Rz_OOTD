import React from "react";

// Add components
import OutfitStyle from "./content/outfitStyle";

const StyleContent = () => {
    return (
        <div className="style-content" id="StyleContent">
            <div className="cover-header">
                <div className="header-content">
                    <p>#KerenItuGakHarusMahal</p>
                </div>
                <div className="header-contentD"></div>
            </div>

            <div className="cover-content">
                <OutfitStyle/>
            </div>
        </div>
    );
};

export default StyleContent;
