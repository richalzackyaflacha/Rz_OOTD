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
import imgCarousel1 from "../../../../assets/img/carouselImg1.jpg"
import imgCarousel2 from "../../../../assets/img/carouselImg2.jpg"
import imgCarousel3 from "../../../../assets/img/carouselImg3.jpg"


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
                <SwiperSlide><img src={imgCarousel1} alt="Img Carousel" /></SwiperSlide>
                <SwiperSlide><img src={imgCarousel2} alt="Img Carousel" /></SwiperSlide>
                <SwiperSlide><img src={imgCarousel3} alt="Img Carousel" /></SwiperSlide>
            </Swiper>
        </div>
    )
}

export default CarousellPhoto;