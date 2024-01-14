"use client"
import React, { useEffect, useState } from 'react'
import Step1 from './components/Step1';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import Step4 from './components/Step4';
const SignupModal = ({ openStatus, setOpenStatus }) => {
    const [swiper, setSwiper] = useState(null);

    const setStep = (index) => {
        if (swiper)
            swiper.slideTo(index)
    };

    useEffect(() => {

        if (typeof document !== 'undefined') {
            document.addEventListener('keydown', function (event) {
                if (event.keyCode === 27) {
                    // Esc key was pressed
                    // Execute your desired response here
                    setOpenStatus(false)

                }
                if (event.altKey && event.key === 'Enter') {
                    setOpenStatus(true)


                }
            });
        }

    }, [swiper])

    return (
        <>
            {/* Put this part before </body> tag */}
            <input type="checkbox" checked={openStatus} id="my_modal_6" className="modal-toggle" />
            <div className="modal" role="dialog">
                <div className="modal-box px-4 w-full h-screen rounded-none sm:rounded-md flex items-center max-h-full sm:h-auto sm:w-auto">
                    <Swiper
                        autoHeight={true}
                        onSwiper={setSwiper}
                        spaceBetween={20}
                        simulateTouch={false}
                        slidesPerView={1}
                        onSlideChange={() => console.log('slide change')}
                    >
                        <SwiperSlide><Step1 nextStep={() => setStep(1)} /></SwiperSlide>
                        {/* varify email */}
                        <SwiperSlide><Step2 nextStep={() => setStep(2)} /></SwiperSlide>
                        {/* additinal information */}
                        <SwiperSlide><Step3 nextStep={() => setStep(3)} /></SwiperSlide>
                        <SwiperSlide><Step4 nextStep={() => setStep(0)} /></SwiperSlide>

                    </Swiper>
                </div>
            </div >
        </>
    )
}

export default SignupModal