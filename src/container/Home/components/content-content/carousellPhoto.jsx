import React from "react";

// Add CSS
import "./carousellPhoto.css"

// Add Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";

// Add photos


const CarousellPhoto = () => {
    return (
        <div className="my-carousell-photo" data-aos="flip-up" data-aos-duration="1000">
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                autoplay={{
                delay: 2500,
                disableOnInteraction: false,
                }}
                pagination={{
                clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
            </Swiper>
        </div>
    )
}

export default CarousellPhoto;