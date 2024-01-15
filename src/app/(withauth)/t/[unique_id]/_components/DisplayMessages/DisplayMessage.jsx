"use client"
import React, { useEffect, useRef, useState } from 'react'
import { Incoming } from './Incoming'
import { Outgoing } from './Outgoing'
import Scrollbars from 'react-custom-scrollbars-2'
export const DisplayMessage = () => {
    const messagesContainerRef = useRef(null);
    useEffect(() => {
        messagesContainerRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }, []); // Run only once on component mount


    return (

        <Scrollbars style={{ height: '100%' }}
            thumbMinSize={30}
            thumbSize={130}
            universal={true}

            renderThumbVertical={() =>
                <div className='bg-base-100 rounded-lg' />
            }
        >
            <div id='messageContainer' ref={messagesContainerRef} className="message-container  container__area">
                <div className=''>
                    {/* incoming */}
                    <Incoming id={1} notEnd={true} message='কি করো? ' />
                    <Incoming id={2} notEnd={true} message='hii' />
                    <Incoming id={3} hasImage={true} />
                    {/* outgoing */}
                    <Outgoing id={4} notEnd={true} message='আসসালামুয়ালাইকুম ' />
                    <Outgoing id={5} notEnd={false} message={`তোমার জন্য <span class="emoji">❤</span><span class="emoji">😘</span>`} hasImage={true} url='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3CQDEO83utmrNSsVt4QtJrmGqM2Dg0gej5g&usqp=CAU' />

                    <Incoming id={6} notEnd={true} message='কি করো? ' />
                    <Incoming id={7} notEnd={true} message='hii' />
                    <Incoming id={8} hasImage={true} />
                    {/* outgoing */}
                    <Outgoing id={9} notEnd={true} message='আসসালামুয়ালাইকুম ' />
                    <Outgoing id={10} notEnd={false} message={`তোমার জন্য <span class="emoji">❤</span><span class="emoji">😘</span>`} hasImage={true} url='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3CQDEO83utmrNSsVt4QtJrmGqM2Dg0gej5g&usqp=CAU' />

                </div>
            </div>
        </Scrollbars >


    )
}
