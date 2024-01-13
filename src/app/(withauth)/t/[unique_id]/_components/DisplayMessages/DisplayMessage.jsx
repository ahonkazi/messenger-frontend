import React from 'react'
import Incoming from './Incoming'
import { Outgoing } from './Outgoing'

export const DisplayMessage = () => {
    return (
        <div className=''>
            {/* incoming */}
            <Incoming notEnd={true} message='কি করো? ' />
            <Incoming notEnd={true} message='hii' />
            <Incoming hasImage={true} />
            {/* outgoing */}
            <Outgoing notEnd={true} message='আসসালামুয়ালাইকুম ' />
            <Outgoing notEnd={false} message={`তোমার জন্য <span class="emoji">❤</span><span class="emoji">😘</span>`} hasImage={true} url='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3CQDEO83utmrNSsVt4QtJrmGqM2Dg0gej5g&usqp=CAU' />
        </div>
    )
}
