"use client"
import Navbar from '@/Components/Client/Navbar'
import React from 'react'
import { useParams } from "next/navigation"
import Image from 'next/image'
import Giveaway from '@/Components/Server/Giveaway'
import Footer from '@/Components/Server/Footer'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const page = () => {

    const { creatorName } = useParams()

    return (
        <>
            <Navbar NavLink={2} />
            <div className="container creatorProfilePage">
                <div className="personalDetails">
                    <div className="imageSection">
                        <Image src="/Images/creator.jpg" className='creatorImage' width={100} height={100} alt='creatorImage' />
                    </div>
                    <div className="name">
                        <h2>{creatorName} <span>(abc123@gmail.com)</span></h2>
                    </div>
                    <div className="description">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur nesciunt assumenda quas dolorum et, est fugiat ipsam! Magni, nesciunt deserunt?</p>
                    </div>
                    <div className="rating">
                        <Image width="24" height="24" src="https://img.icons8.com/fluency/24/filled-star.png" alt="filled-star" />
                        <span>4.8</span>
                    </div>
                </div>
                <h2 className='creatorspage-subheader'>Active Giveaways (4)</h2>
                <div className="activeGiveaways">
                    <Giveaway />
                    <Giveaway />
                    <Giveaway />
                    <Giveaway />
                </div>
                <h2 className='creatorspage-subheader'>Previous Completed Giveaways (6)</h2>
                <div className="previousGiveaways">
                    <Giveaway />
                    <Giveaway />
                    <Giveaway />
                    <Giveaway />
                    <Giveaway />
                    <Giveaway />
                </div>
                <h2 className='creatorspage-subheader'>Reviews</h2>
                <div className='text-danger text-center'>
                    <b>*You can write a review after participate in any giveaway organized by {creatorName}*</b>
                </div>
                <div className="reviewsSlider">
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
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
                        <SwiperSlide>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae, odio?
                            <span><Image width="16" height="16" src="https://img.icons8.com/fluency/16/filled-star.png" alt="filled-star" /> 4.8</span>
                            <p>By : <b>AbdulRehman</b> (abc123@gmail.com)</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae, odio?Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            <span><Image width="16" height="16" src="https://img.icons8.com/fluency/16/filled-star.png" alt="filled-star" /> 4.8</span>
                            <p>By : <b>AbdulRehman</b> (abc123@gmail.com)</p>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default page