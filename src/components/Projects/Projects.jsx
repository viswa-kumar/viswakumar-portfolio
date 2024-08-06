import React from 'react';
import './Projects.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import pic1 from "../../img/Overview.png";
import pic2 from "../../img/Login.png";


const BestProjects = () => {
    const BP = [
        {
            img: pic1,
            review: "Campie is a user-friendly app for finding camping spots, providing details on locations, facilities, and camper reviews. It allows users to create, read, update, and delete campground information.",
            url: "https://github.com/viswa-kumar/Camp-Finder"
        },
        {
            img: pic2,
            review: "Login page developed with HTML and CSS, utilizing media queries for responsive design. Ideal for gaining practical experience in front-end development.",
            url: "https://github.com/viswa-kumar/login-page-project"
        }

    ];

    return (
        <div className="b-wrapper" id='Projects'>
            <div className="b-heading">
                <span>Recent </span>
                <span>Projects</span>
            </div>
            <div className="swiper-container-wrapper">
                <Swiper
                    spaceBetween={30}
                    slidesPerView={1}
                    grabCursor={true}
                    className="swiper-container"
                >
                    {BP.map((element, index) => (
                        <SwiperSlide key={index} className="swiper-slide">
                            <div className="card">
                                <div className="card-img-container">
                                    <img src={element.img} alt="" className="card-img" />
                                    <div className="card-content">
                                        <span>{element.review}</span>
                                        <button className='button'><a href={element.url}>View Code</a></button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default BestProjects;
