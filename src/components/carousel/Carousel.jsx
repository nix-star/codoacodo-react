import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import {Autoplay, Pagination} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css"
import Card from "./Card";
//import "../../style/carousel/Card.scss"


const CarouselTranding = ({newbooks, title}) => {

/*     const [newbooks, setNewBooks] = useState([])
    

    const getNewBooks = async () => {
        const url = 'https://openlibrary.org/trending/daily.json?limit=5&offset=10'
        return await axios 
        .get(url)
        .then(({data}) => setNewBooks(data.works))
        .catch((error) => console.error(error));
    }

    useEffect(() => {
        getNewBooks()
    },[]) */

    return(
        <> 
        
            <h1 className="carouselTitle">{title}</h1>
            <div className="container">
                <div className="swiperContainer">
                    <Swiper 
                        modules = {[Pagination, Autoplay]}
                        autoplay = {{
                            delay:3000,
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
                            }

                        }}
                        >
                            {newbooks?.map((newbook) => (
                                <div>
                                <SwiperSlide>
                                    <Card newbook={newbook}/>
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

export default CarouselTranding;