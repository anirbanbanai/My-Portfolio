
import CountUp from 'react-countup';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import { useState } from 'react';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import img1 from '../assets/skills/bootstrap.png'
import img2 from '../assets/skills/css3.png'
import img3 from '../assets/skills/html-5--v1.png'
import img4 from '../assets/skills/javascript--v1.png'
import img6 from '../assets/skills/react-native.png'
import img7 from '../assets/skills/tailwind_css.png'


const Skills = () => {
    const [, setSwiperRef] = useState(null);



    return (
        <div className='p-10 m-10'>
            <h2 className='text-4xl font-semibold text-center'>My Skills</h2>
            <div className='mt-5'>
                <Swiper
                    onSwiper={setSwiperRef}
                    slidesPerView={3}
                    centeredSlides={true}
                    spaceBetween={30}
                    pagination={{
                        type: "fraction",
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper mb-10 w-full"
                >
                    <SwiperSlide className='w-full'>
                        <div className='bg-white p-5 rounded-2xl'>
                            <img className='mx-auto p-3  bg-slate-200 rounded-full' src={img1} alt="" />
                            <h2 className='text-xl font-semibold text-center mt-5'>Bootstrap</h2>
                            <h2 className='text-center mb-10 mt-3 bg-slate-300 w-2/4 mx-auto p-2 rounded-3xl'> <CountUp end={90} duration={5} />% </h2>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='bg-white p-5 rounded-2xl'>
                            <img className='mx-auto p-3  bg-slate-200 rounded-full' src={img2} alt="" />
                            <h2 className='text-xl font-semibold text-center mt-5'>CSS3</h2>
                            <h2 className='text-center mb-10 mt-3 bg-slate-300 w-2/4 mx-auto p-2 rounded-3xl'> <CountUp end={90} duration={5} />% </h2>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='bg-white p-5 rounded-2xl'>
                            <img className='mx-auto p-3  bg-slate-200 rounded-full' src={img3} alt="" />
                            <h2 className='text-xl font-semibold text-center mt-5'>HTML5</h2>
                            <h2 className='text-center mb-10 mt-3 bg-slate-300 w-2/4 mx-auto p-2 rounded-3xl'> <CountUp end={90} duration={5} />% </h2>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='bg-white p-5 rounded-2xl'>
                            <img className='mx-auto p-3  bg-slate-200 rounded-full' src={img4} alt="" />
                            <h2 className='text-xl font-semibold text-center mt-5'>Javascript</h2>
                            <h2 className='text-center mb-10 mt-3 bg-slate-300 w-2/4 mx-auto p-2 rounded-3xl'> <CountUp end={90} duration={5} />% </h2>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='bg-white p-5 rounded-2xl'>
                            <img className='mx-auto p-3  bg-slate-200 rounded-full' src={img6} alt="" />
                            <h2 className='text-xl font-semibold text-center mt-5'>React </h2>
                            <h2 className='text-center mb-10 mt-3 bg-slate-300 w-2/4 mx-auto p-2 rounded-3xl'> <CountUp end={90} duration={5} />% </h2>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='bg-white p-5 rounded-2xl'>
                            <img className='mx-auto p-3  bg-slate-200 rounded-full' src={img7} alt="" />
                            <h2 className='text-xl font-semibold text-center mt-5'>Tailwind</h2>
                            <h2 className='text-center mb-10 mt-3 bg-slate-300 w-2/4 mx-auto p-2 rounded-3xl'> <CountUp end={90} duration={5} />% </h2>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Skills;