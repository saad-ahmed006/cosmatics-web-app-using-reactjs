import React from 'react'
import '../Styles/Slider.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper'
import { SliderProducts } from '../data/products'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Slider() {
    return (
        <>
            <div className='Swiper_Container'>
                <Swiper
                    modules={[Pagination, Navigation]}
                    navigation={true}
                    slidesPerView={3}
                    spaceBetween={40}
                    slidesPerGroup={1}
                    loop={true}
                    className="mySwiper"
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
                    {SliderProducts.map((slid) => {
                        return <SwiperSlide className='SwiperSlide'>
                            <div className='leftside'>
                                <div className='name'>
                                    <span>{slid.name}</span>
                                    <span>{slid.detail}</span>
                                    <span>${slid.price}</span>
                                    <button className='button'>Shop</button>
                                </div>
                                <div className='Image'>
                                    <img src={slid.img} alt={"productimg"}></img>
                                </div>
                            </div>
                        </SwiperSlide>
                    })}
                </Swiper>
            </div>
        </>
    )
}
