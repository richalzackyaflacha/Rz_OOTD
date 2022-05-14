import React, { useState } from "react";

// Add CSS
import "./content-content/cardNewPhoto.css";

// Add Fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

// Add photo
import IgPost1 from "../../../assets/img/igPost1.jpg";
import IgPost2 from "../../../assets/img/igPost2.jpg";
import IgPost3 from "../../../assets/img/igPost3.jpg";
import IgPost4 from "../../../assets/img/igPost4.jpg";
import IgPost5 from "../../../assets/img/igPost5.jpg";
import IgPost6 from "../../../assets/img/igPost6.jpg";

const InstagramPost = () => {
    let data = [
        {
            id: 1,
            igPost: IgPost1,
        },
        {
            id: 2,
            igPost: IgPost2,
        },
        {
            id: 3,
            igPost: IgPost3,
        },
        {
            id: 1,
            igPost: IgPost4,
        },
        {
            id: 2,
            igPost: IgPost5,
        },
        {
            id: 3,
            igPost: IgPost6,
        }
    ]

    const [model, setModel] = useState(false);
    const [tempIgPost, setTempIgPost] = useState('');
    const getImg = (igPost) => {
        setTempIgPost(igPost);
        setModel(true);
    };

    return (
        <div className="ig-post">
            {/* Modal Image */}
            <div className={model ? "model model-open" : "model"}>
                <div className="btn-close">
                    <FontAwesomeIcon icon={faXmark} onClick={() => setModel(false)} />
                </div>

                <img src={tempIgPost} alt="Detail Foto" />
            </div>


            {/* Title */}
            <p data-aos="fade-up" data-aos-duration="1000">
                Bagikan Gaya Kamu di &nbsp;
                <a href="https://www.instagram.com/direct/t/340282366841710300949128153199066808830" target="_blank">
                    @richalzacky
                </a>
            </p>


            {/* Picture */}
            <div className="content-ig-post" data-aos="zoom-in-up" data-aos-duration="1000">
                {data.map(( item, index ) => {
                    return (
                        <img src={item.igPost} alt="Foto Terbaru" key={index} onClick={() => getImg(item.igPost)}/>
                    )
                })}
            </div>
        </div>
    );
};

export default InstagramPost;
