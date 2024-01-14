"use client"
import React, { useEffect, useRef } from 'react'
import { Incoming } from './Incoming'
import { Outgoing } from './Outgoing'

export const DisplayMessage = () => {
    const messagesContainerRef = useRef(null);
    useEffect(() => {
        const scrollToBottom = () => {
            messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
        };

        // Scroll to the bottom initially
        scrollToBottom();

        // Optionally, scroll to the bottom when new messages are added
        // Example:
        // socket.on('newMessage', scrollToBottom);

    }, []);
    return (
        <div id='messageContainer' style={{ scrollBehavior: 'smooth', scrollbarWidth: 'thin' }} ref={messagesContainerRef} className="message-container overflow-y-auto container__area h-full">
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

    )
}
