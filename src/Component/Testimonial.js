import React from 'react'
import TestimonialImage from '../assets/testimonialHero.png'
import { TestimonialsData } from '../data/testimonials'
import '../Styles/Testimonial.css'
import { Swiper, SwiperSlide } from 'swiper/react'
export default function Testimonial() {
    return (
        <>
            <div className='TestimonialContainer'>
                <div className='TestimonialHead'>
                    <div className='Left'>
                        <h1>TOP RATED</h1>
                        <p>SEEDILY SAY HAS SUITABLE DISPOSAL AND BOY.<br /> EXERCISE JOY MAN CHILDREN REJOICED.</p>
                    </div>
                    <img src={TestimonialImage} alt="Img"></img>
                    <div className='Left'>
                        <h1>100K</h1>
                        <p>HAPPY CUSTOMERS WITH US</p>
                    </div>

                </div>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={20}
                    slidesPerGroup={1}
                    className="tetimonialCarasol"
                    breakpoints={{
                        0: {
                            width: 320,
                            slidesPerView: 1,
                        },
                        768: {
                            width: 650,
                            slidesPerView: 2,
                        },
                    }}
                >
                    {
                        TestimonialsData.map((Item) => {
                            return <SwiperSlide>
                                <div className='TestimonialSwiper'>
                                    <img src={Item.image} alt="Testi"></img>
                                    <p>{Item.comment}</p>
                                    <hr></hr>
                                    <h2>{Item.name}</h2>
                                </div>
                            </SwiperSlide>
                        })
                    }
                </Swiper>
            </div>
        </>
    )
}
