import React from "react";

const GaleryJumbotron = () => {
    return(
        <div className="galery-jumbotron">
            <div className="jumbotron-content">
                {/* Title */}
                <div className="title-content">
                    <p className="title-1">Rz OOTD</p>
                    <p className="title-2">Gallery</p>
                </div>

                {/* Button to Content */}
                <div className="button-content">
                    <a href="#content-galery">
                        <button>Lihat Galeri</button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default GaleryJumbotron;