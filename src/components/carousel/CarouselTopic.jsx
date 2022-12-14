import React from "react";
import {Autoplay, Pagination} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css"
import CardTopic from "./CardTopic";
import "../../style/carousel/Card.scss"
import "../../style/inicio.css"


const CarouselTopics = ( {newbooks, title} ) => {

    return(
        <> 
            <h1 className="carouselTitle">{title}</h1>
            <div className="container">
                <div className="swiperContainer">
                    <Swiper 
                        modules = {[Pagination, Autoplay]}
                        autoplay = {{
                            delay:5000,
                            disableOnInteraction: false,
                        }}
                        pagination = {{
                            el: ".pagination",
                            clickable: true,
                        }}
                        slidesPerView = {3}
                        breakpoints={{
                            "@0.00":{
                                slidesPerView: 1,
                                spaceBetween:25,
                            },
                            "@0.50":{
                                slidesPerView: 1.25,
                                spaceBetween:25,
                            },
                            "@1.00":{
                                slidesPerView: 2,
                                spaceBetween:25,
                            },
                            "@1.25":{
                                slidesPerView: 2.5,
                                spaceBetween:25,
                            },
                            "@1.50":{
                                slidesPerView: 3,
                                spaceBetween:25,
                            },
                            "@1.75":{
                                slidesPerView: 4,
                                spaceBetween:25,
                            },

                        }}
                        >
                            {newbooks?.map((newbook) => (
                                <div>
                                <SwiperSlide>
                                    <CardTopic 
                                    newbook = {newbook}
                                    />
                                </SwiperSlide>  
                                </div>
                            ))}

                        </Swiper>
                    </div>
                <div className="paginacion" />
            </div> 
        </>
    );
}

export default CarouselTopics;
