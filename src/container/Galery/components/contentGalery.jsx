import React, { useState } from "react";
import { Link } from "react-router-dom";

// Add Fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

// Add Swiper JS
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

// Add CSS
import "./contentGalery.css"

// Add photos
import GaleryP1 from "../../../assets/img/NewPhoto2.jpg"
import DetailP1_1 from "../../../assets/img/NewPhoto1.jpg"
import DetailP1_2 from "../../../assets/img/NewPhoto3.jpg"

import GaleryP2 from "../../../assets/img/StylePhoto1-1.jpg"
import DetailP2_1 from "../../../assets/img/StylePhoto1-2.jpg"
import DetailP2_2 from "../../../assets/img/StylePhoto1-3.jpg"

const ContentGalery = () => {
    // Data image
    let data = [
        {
            id: 1,
            imgGalery: GaleryP2,
            details: [
               GaleryP2, DetailP2_1, DetailP2_2
            ]
        },
        {
            id: 2,
            imgGalery: GaleryP1,
            details: [
               GaleryP1, DetailP1_1, DetailP1_2
            ]
        },
    ];
    const reversed = data.reverse();

    // Modal image
    const [modal, setModal] = useState(false);
    const [modalDetail, setModalDetail] = useState(false);
    const [tempImgSrc, setTempImgSrc] = useState('');
    const [dataDetail, setDetailData] = useState([]);
    const getImg = (details) => {
        setTempImgSrc(details.detailsImg);
        setModal(true);
    };

    const getImgDetail = (imgParent) => {
        setDetailData(imgParent.details)
        // setTempImgSrc(detail);
        setModalDetail(true)
    }


    return(
        <div className="content-galery" id="content-galery">

            {/* Modal Image */}
            <div className={modal ? "modal modal-open" : "modal"}>
                {/* Button Close */}
                <div className="btn-close">
                    <FontAwesomeIcon icon={faXmark} onClick={() => setModal(false)} />
                </div>

                {/* Carousell Image */}
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    pagination={{
                        type: "fraction",
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    {data[0].details.map(( item ) => {
                        // console.log(item);
                        return (
                            <SwiperSlide><img src={item} alt="Detail" /></SwiperSlide>
                        )
                    })} 
                </Swiper>
            </div>

            <div className={modalDetail ? "modal modal-open" : "modal"}>
                {/* Button Close */}
                <div className="btn-close">
                    <FontAwesomeIcon icon={faXmark} onClick={() => setModalDetail(false)} />
                </div>

                {/* Carousell Image */}
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    pagination={{
                        type: "fraction",
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    {
                        dataDetail.map(item => {
                            return (
                                <SwiperSlide><img src={item} alt="Detail" /></SwiperSlide>
                            )  
                        })
                    }
                </Swiper>
            </div>


            {/* Rz Gallery */}
            <div className="rz-galery">
                {data.map(( item, index ) => {
                    return (
                        <div className="galery-card">
                            {/* Picture */}
                            <img src={item.imgGalery} alt="Galery" key={index} onClick={() => getImgDetail(item)} />

                            {/* Button detail */}
                            <div className="button-detail">
                                <button className="btn-detail-1" key={index} onClick={() => getImgDetail(item)}>
                                    Detail
                                </button>

                                <Link to="/style">
                                    <button className="btn-detail-2">Outfit</button>
                                </Link>
                            </div>
                        </div>
                    )
                })}                    
            </div>
        </div>
    );
};

export default ContentGalery;