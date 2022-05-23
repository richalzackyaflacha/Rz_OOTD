import React, { useState } from "react";

// Add CSS
import "./cardNewPhoto.css"

// Add Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

// Add photos
import NewPhoto1 from "../../../../assets/img/NewPhoto1.jpg"
import NewPhoto2 from "../../../../assets/img/NewPhoto2.jpg"
import NewPhoto3 from "../../../../assets/img/NewPhoto3.jpg"

// Add Fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const CardNewPhoto = () => {
    let data = [
        {
            id: 1,
            imgSrc: NewPhoto1,
        },
        {
            id: 2,
            imgSrc: NewPhoto2,
        },
        {
            id: 3,
            imgSrc: NewPhoto3,
        }
    ]

    const [model, setModel] = useState(false);
    const [tempImgSrc, setTempImgSrc] = useState('');
    const getImg = (imgSrc) => {
        setTempImgSrc(imgSrc);
        setModel(true);
    };

    return ( 
        <div>
            {/* Modal Image */}
            <div className={model ? "model model-open" : "model"}>
                <div className="btn-close">
                    <FontAwesomeIcon icon={faXmark} onClick={() => setModel(false)} />
                </div>

                <img src={tempImgSrc} alt="Detail Foto" />
            </div>

            {/* New Photos */}
            <div className="card-new-photo" data-aos="zoom-in" data-aos-duration="1000">
                <Swiper
                    breakpoints={{
                        900: {
                            slidesPerView: 3,
                        },
                        700: {
                            slidesPerView: 2,
                            spaceBetween: 150
                        },
                        300: {
                            slidesPerView: 1,
                            spaceBetween: 50
                        },
                    }}
                    centeredSlides={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                >

                    {data.map(( item, index ) => {
                        return (
                            <SwiperSlide>
                                <div className="card-photo" key={index} onClick={() => getImg(item.imgSrc)}>
                                    <img src={item.imgSrc} alt="Foto Terbaru" />
                                    <div className="back-card"></div>
                                </div>
                            </SwiperSlide>
                        )
                    })}

                </Swiper>
            </div>
        </div>
    );
};

export default CardNewPhoto;