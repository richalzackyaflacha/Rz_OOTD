import React from "react";
import { Link } from "react-router-dom";

// Add image
import OutfitPict1 from "../../../../assets/img/NewPhoto2.jpg";
import OutfitPict2 from "../../../../assets/img/StylePhoto1-1.jpg"

// Add detail
import DetailOutfit1 from "../../../../assets/outfit/detail-outfit1.png"
import DetailOutfit2 from "../../../../assets/outfit/detail-outfit2.png"

const OutfitStyle = () => {
    return (
        <div className="outfit-style">

            <div className="content-outfit">
                <div className="content-outfit-pict">
                    <div className="img-btn">
                        <img src={OutfitPict1} alt="Outfit Style" />

                        <div className="button-to-galery">
                            <Link to="/galeri">Lihat Foto</Link>
                        </div>
                    </div>
                </div>


                <div className="content-outfit-detail">
                    <img src={DetailOutfit1} alt="Detail" />
                </div>
            </div>


            <div className="content-outfit">
                <div className="content-outfit-pict">
                    <div className="img-btn">
                        <img src={OutfitPict2} alt="Outfit Style" />

                        <div className="button-to-galery">
                            <Link to="/galeri">Lihat Foto</Link>
                        </div>
                    </div>
                </div>


                <div className="content-outfit-detail">
                    <img src={DetailOutfit2} alt="Detail" />
                </div>
            </div>

        </div>
    );
};

export default OutfitStyle;